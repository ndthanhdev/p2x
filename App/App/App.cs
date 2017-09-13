using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Quobject.SocketIoClientDotNet.Client;
using Newtonsoft.Json;

namespace App
{
    class App
    {
        const int ERROR_DELAY = 3000;
        const int LOOP_DELAY = 500;
        const int BAUD_RATE = 115200;
        const int POWER_STATUS_NORMAL = 0;
        const int POWER_STATUS_DOWN = 1;
        const int POWER_STATUS_FAIL = -1;
        const string LOG_ERROR_PREFIX = "[Error]";

        string portName, serverUrl;
        IHldMainBoard hldMainBoard;

        Queue<int> _commandsQueue;
        Queue<int> CommandsQueue => _commandsQueue = _commandsQueue ?? new Queue<int>();

        private int _nSafe;

        public int NSafe
        {
            get { return _nSafe; }
            set
            {
                if (value < 1 || value > 152)
                    throw new ArgumentException("Parameters is not valid");
                else
                    _nSafe = value;
            }
        }

        public bool IsSensor { get; set; }

        private string iCNo = string.Empty;
        string version = string.Empty;
        private Socket socket;

        public App(AppConfig config, IHldMainBoard hldMainBoard)
        {
            this.portName = config.PortName;
            this.serverUrl = config.ServerUrl;
            this.hldMainBoard = hldMainBoard;
            this.NSafe = config.NLocks;
            this.IsSensor = config.IsSensor;
            this.hldMainBoard.SetMaxSide(IsSensor ? 2 : 1);

        }

        public async Task RunAsync()
        {
            while (true)
            {
                try
                {
                    await Loop();
                }
                catch (Exception ex)
                {
                    AppLog.Error(ex.ToString());
                }
                finally
                {
                    iCNo = string.Empty;
                    version = string.Empty;
                    socket?.Close();
                }
                await Task.Delay(ERROR_DELAY);
            }
        }

        public async Task Loop()
        {
            string errMsg = string.Empty;
            BoardState oldStatus = null, latestStatus;

            if (!TestBoard(portName, ref iCNo, ref version, ref errMsg))
            {
                AppLog.Error("{0}. {1}", "Connect to board fail", errMsg);
                await Task.Delay(ERROR_DELAY);
                return;
            }
            PrintBoardInfo(iCNo, version);

            //Subscribe(iCNo);

            while (true)
            {
                latestStatus = ReadBoardState(ref errMsg);
                if (latestStatus is null || !string.IsNullOrEmpty(errMsg))
                {
                    AppLog.Error("{0}. {1}", "Can't read board's state", errMsg);
                    break;
                }

                if (latestStatus != oldStatus)
                {
                    Console.WriteLine("Previous state:");
                    Console.WriteLine(oldStatus);
                    Console.WriteLine("New state:");
                    Console.WriteLine(latestStatus);
                    if (!SendData(latestStatus, ref errMsg))
                    {
                        AppLog.Error("{0}. {1}", "Send data to server fail", errMsg);
                        break;
                    }
                    oldStatus = latestStatus;
                }

                if (IsCommandAvailable())
                {
                    lock (CommandsQueue)
                    {
                        var safe = CommandsQueue.Dequeue();
                        if (!ExecuteCommand(safe, ref errMsg))
                        {
                            AppLog.Error("{0}. {1}", "Execute command fail", errMsg);
                        }
                        else
                        {
                            AppLog.Info("Opened Safe:{0}", safe);
                        }

                    }
                }

                await Task.Delay(LOOP_DELAY);
            }
        }

        public void Subscribe(string eventName)
        {
            socket = IO.Socket(serverUrl);
            socket.On(Socket.EVENT_CONNECT, async () =>
            {
                await Task.Yield();
                AppLog.Info("Connected to server");
            });
            socket.On(Socket.EVENT_RECONNECTING, async () =>
            {
                await Task.Yield();
                AppLog.Info("Reconnecting to server...");
            });
            socket.On(eventName, async (rawData) =>
             {
                 await Task.Yield();
                 int safeId = int.Parse(rawData.ToString());
                 AppLog.Info("Received {0}", safeId);
                 lock (CommandsQueue)
                 {
                     CommandsQueue.Enqueue(safeId);
                 }
             });
        }

        public bool TestBoard(string portName, ref string iCNo, ref string version, ref string errMsg)
        {
            try
            {
                errMsg = string.Empty;
                if (!hldMainBoard.OpenSerialPort(portName, BAUD_RATE, ref errMsg))
                {
                    return false;
                }
                var powerStatus = hldMainBoard.GetPowerStatus(ref errMsg);
                if (!string.IsNullOrEmpty(errMsg) || powerStatus == POWER_STATUS_FAIL)
                {
                    return false;
                }
                else if (powerStatus == POWER_STATUS_DOWN)
                {
                    errMsg = "MainBoard's power is down";
                    return false;
                }

                iCNo = hldMainBoard.GetICCardData();
                version = hldMainBoard.GetVersion(ref errMsg);
                if (!string.IsNullOrEmpty(errMsg))
                {
                    return false;
                }
                else if (string.IsNullOrEmpty(iCNo))
                {
                    errMsg = "IC No is empty";
                    return false;
                }
                return true;
            }
            catch (Exception ex)
            {
                errMsg = ex.ToString();
                return false;
            }
            finally
            {
                CloseSerialPort();
            }

        }

        public void PrintBoardInfo(string iCNo, string version)
        {
            AppLog.Info("IC No: {0}", iCNo);
            AppLog.Info("Board Version: {0}", version);
        }

        public BoardState ReadBoardState(ref string errMsg)
        {
            try
            {
                BoardState boardStatus = new BoardState();
                if (!hldMainBoard.OpenSerialPort(portName, BAUD_RATE, ref errMsg))
                {
                    return null;
                }

                boardStatus.PowerStatus = hldMainBoard.GetPowerStatus(ref errMsg);
                if (!string.IsNullOrEmpty(errMsg))
                {
                    return null;
                }
                else if (boardStatus.PowerStatus == 1)
                {
                    errMsg = "Power is down";
                    return null;
                }
                if (boardStatus.PowerStatus != 0)
                {
                    /* No action required */
                }

                var list = GetAllSafeState(ref errMsg);
                if (!string.IsNullOrEmpty(errMsg))
                {
                    return null;
                }

                boardStatus.SafeStates = list;
                return boardStatus;
            }
            catch (Exception ex)
            {
                errMsg = ex.ToString();
                return null;
            }
            finally
            {
                CloseSerialPort();
            }
        }

        public bool SendData(BoardState status, ref string errMsg)
        {
            return true;
        }

        public void CloseSerialPort()
        {
            string errMsg = string.Empty;
            hldMainBoard.CloseSerialPort(ref errMsg);
            if (!string.IsNullOrEmpty(errMsg))
            {
                AppLog.Error("{0}. {1}", "Close serial port fail", errMsg);
            }
        }

        public List<SafeState> GetAllSafeState(ref string errMsg)
        {
            SafeStateBuilder builder = new SafeStateBuilder();
            List<SafeState> list = new List<SafeState>();
            var locks = hldMainBoard.GetLockAllStatus(0, ref errMsg);
            if (!string.IsNullOrEmpty(errMsg))
            {
                return null;
            }
            if (IsSensor)
            {
                var sensors = hldMainBoard.GetSensorAllStatus(1, ref errMsg);
                if (!string.IsNullOrEmpty(errMsg))
                {
                    return null;
                }
                list.AddRange(builder.BuildMany(NSafe, locks, sensors));
            }
            else
            {
                list.AddRange(builder.BuildMany(NSafe, locks));
            }
            return list;
        }

        public bool IsCommandAvailable()
        {
            return CommandsQueue.Count > 0;
        }

        public bool ExecuteCommand(int safeId, ref string msg)
        {
            try
            {
                if (!hldMainBoard.OpenSerialPort(portName, BAUD_RATE, ref msg))
                {
                    return false;
                }
                if (hldMainBoard.OpenLock(0, safeId, ref msg) < 0)
                {
                    return false;
                }
                return true;
            }
            catch (Exception ex)
            {
                msg = ex.ToString();
                return false;
            }
            finally
            {
                hldMainBoard.CloseSerialPort(ref msg);
            }
        }
    }
}
