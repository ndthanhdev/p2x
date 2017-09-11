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
        const int BAUD_RATE = 115200;
        const int POWER_STATUS_NORMAL = 0;
        const int POWER_STATUS_DOWN = 1;
        const int POWER_STATUS_FAIL = -1;
        const string LOG_ERROR_PREFIX = "[Error]";

        string portName, serverUrl;
        IHldMainBoard hldMainBoard;

        Queue<Safe> _commandsQueue;
        Queue<Safe> CommandsQueue => _commandsQueue = _commandsQueue ?? new Queue<Safe>();

        private int _nLeft;

        public int NLeft
        {
            get { return _nLeft; }
            set
            {
                if (value < 1 || value > 152)
                    throw new ArgumentException("Parameters is not valid");
                else
                    _nLeft = value;
            }
        }

        private int _nRight;

        public int NRight
        {
            get { return _nRight; }
            set
            {
                if (value < 1 || value > 152)
                    throw new ArgumentException("Parameters is not valid");
                else
                    _nRight = value;
            }
        }

        private string iCNo = string.Empty;
        private Socket socket;

        public App(string portName, int nRight, int nLeft, string serverUrl, string secret, IHldMainBoard hldMainBoard)
        {
            this.portName = portName;
            this.serverUrl = serverUrl;
            this.hldMainBoard = hldMainBoard;
            this.NRight = nRight;
            this.NLeft = nLeft;
            this.hldMainBoard.SetMaxSide(NLeft > 0 ? 1 : 0 + NRight > 0 ? 1 : 0);

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
                    socket?.Close();
                }
            }
        }

        public async Task Loop()
        {
            string version = string.Empty;
            string errMsg = string.Empty;
            BoardState oldStatus = null, latestStatus;

            if (!TestBoard(portName, ref iCNo, ref version, ref errMsg))
            {
                AppLog.Error("{0}. {1}", "Connect to board fail", errMsg);
                await Task.Delay(ERROR_DELAY);
                return;
            }
            PrintBoardInfo(iCNo, version);

            Subscribe(iCNo);

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
                        // execute command
                    }
                }

                await Task.Delay(1000);
            }

            await Task.Delay(ERROR_DELAY);


        }

        public void Subscribe(string eventName)
        {
            socket = IO.Socket(serverUrl);
            socket.On(Socket.EVENT_CONNECT, () =>
            {
                AppLog.Info("Connected to server");
            });
            socket.On(Socket.EVENT_RECONNECTING, () =>
            {
                AppLog.Info("Reconnecting to server...");
            });
            socket.On(eventName, rawData =>
             {
                 Safe safe = JsonConvert.DeserializeObject<Safe>(rawData.ToString());
                 AppLog.Info("Received {0} from server", safe);
                 lock (CommandsQueue)
                 {
                     CommandsQueue.Enqueue(safe);
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

                var list = GetSafeStatusOfAllSide(ref errMsg);
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

        public SafeState[] GetSafeStatusOfOneSide(int side, int n, ref string errMsg)
        {
            SafeStateBuilder builder = new SafeStateBuilder();

            var locks = hldMainBoard.GetLockAllStatus(side, ref errMsg);
            if (!string.IsNullOrEmpty(errMsg))
            {
                return null;
            }
            var sensors = hldMainBoard.GetSensorAllStatus(side, ref errMsg);
            if (!string.IsNullOrEmpty(errMsg))
            {
                return null;
            }

            return builder.BuildMany(locks, sensors, side, n);
        }

        public List<SafeState> GetSafeStatusOfAllSide(ref string errMsg)
        {
            List<SafeState> list = new List<SafeState>();
            if (_nRight > 0)
            {
                var safeStatus = GetSafeStatusOfOneSide(0, _nRight, ref errMsg);
                if (!string.IsNullOrEmpty(errMsg))
                {
                    return list;
                }
                list.AddRange(safeStatus);
            }
            if (NLeft > 0)
            {
                var safeStatus = GetSafeStatusOfOneSide(1, NLeft, ref errMsg);
                if (!string.IsNullOrEmpty(errMsg))
                {
                    return list;
                }
                list.AddRange(safeStatus);
            }
            return list;
        }

        public bool IsCommandAvailable()
        {
            return CommandsQueue.Count > 0;
        }

        public void ExecuteCommand(Safe safe)
        {
            
        }
    }
}
