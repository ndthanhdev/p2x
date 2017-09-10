using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Quobject.SocketIoClientDotNet.Client;

namespace App
{
    class App
    {
        const int ERROR_DELAY = 3000;
        const int BAUD_RATE = 115200;
        const int POWER_STATUS_NORMAL = 0;
        const int POWER_STATUS_DOWN = 1;
        const int POWER_STATUS_FAIL = -1;

        string portName, serverUrl;
        IHldMainBoard hldMainBoard;

        Queue<String> _commandsQueue;
        Queue<String> CommandsQueue => _commandsQueue = _commandsQueue ?? new Queue<string>();

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


        public App(string portName, int nRight, int nLeft, string serverUrl, string secret, IHldMainBoard hldMainBoard)
        {
            this.portName = portName;
            this.serverUrl = serverUrl;
            this.hldMainBoard = hldMainBoard;
            this.NRight = nRight;
            this.NLeft = nLeft;
            this.hldMainBoard.SetMaxSide(NLeft > 0 ? 1 : 0 + NRight > 0 ? 1 : 0);

        }

        public async Task Run()
        {
            await Task.WhenAll(Loop(), Subscribe());
        }

        public async Task Loop()
        {
            string iCNo = string.Empty;
            string version = string.Empty;
            string errMsg = string.Empty;
            bool connectionStatus = false;
            BoardStatus oldStatus = null, latestStatus;

            while (true)
            {
                // check commandQueue and execute
                // test board print info
                // test server print info
                // read data
                // if data changed
                // send data

                if (CommandsQueue.Count > 0)
                {
                    lock (CommandsQueue)
                    {
                        // execute command
                    }
                }

                if (!TestBoard(portName, ref iCNo, ref version, ref errMsg))
                {
                    PrintError(errMsg);
                    await Task.Delay(ERROR_DELAY);
                    continue;
                }
                PrintBoardInfo(iCNo, version);

                latestStatus = ReadBoardStatus(ref errMsg);
                if (!string.IsNullOrEmpty(errMsg))
                {
                    PrintError(errMsg);
                    await Task.Delay(ERROR_DELAY);
                    continue;
                }

                if (latestStatus != oldStatus)
                {
                    connectionStatus = TestConnection(serverUrl, ref errMsg);
                    PrintConnectionStatus(connectionStatus);
                    if (!connectionStatus)
                    {
                        PrintError(errMsg);
                        await Task.Delay(ERROR_DELAY);
                        continue;
                    }

                    if (!SendData(latestStatus, ref errMsg))
                    {
                        PrintError(errMsg);
                        await Task.Delay(ERROR_DELAY);
                        continue;
                    }
                    oldStatus = latestStatus;
                }

            }

        }

        public async Task Subscribe()
        {
            var socket = IO.Socket("http://localhost:3000");
            socket.On(Socket.EVENT_CONNECT, () =>
             {
                 Console.WriteLine("connected");
             });
            socket.On("ic123", data =>
            {
                Console.WriteLine(data);
            });

            while (true)
            {

                await Task.Yield();
            }
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

        public bool TestConnection(string url, ref string msg)
        {
            // implement this
            return true;
        }

        public void PrintError(params string[] errorMessage)
        {
            foreach (var msg in errorMessage)
            {
                Console.WriteLine("[Error] {0}. Restart in {1}ms...", msg, ERROR_DELAY.ToString());
            }
        }

        public void PrintBoardInfo(string iCNo, string version)
        {
            Console.WriteLine("[Info] IC No: {0}", iCNo);
            Console.WriteLine("[Info] Board Version: {0}", version);
        }

        public void PrintConnectionStatus(bool status)
        {
            Console.WriteLine("[Info] Connection Status: {0}", status ? "Ablive" : "Lost");
        }

        public BoardStatus ReadBoardStatus(ref string errMsg)
        {
            try
            {
                BoardStatus boardStatus = new BoardStatus();
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

                boardStatus.SafeStatuss.AddRange(list);
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

        public bool SendData(BoardStatus status, ref string errMsg)
        {
            return true;
        }

        public void CloseSerialPort()
        {
            string errMsg = string.Empty;
            hldMainBoard.CloseSerialPort(ref errMsg);
            if (!string.IsNullOrEmpty(errMsg))
            {
                PrintError(errMsg);
            }
        }

        public SafeStatus[] GetSafeStatusOfOneSide(int side, int n, ref string errMsg)
        {
            SafeStatusBuilder builder = new SafeStatusBuilder();

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

        public List<SafeStatus> GetSafeStatusOfAllSide(ref string errMsg)
        {
            List<SafeStatus> list = new List<SafeStatus>();
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
    }
}
