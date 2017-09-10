using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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

        private int numberOfSides;

        public int NumberOfSides
        {
            get { return numberOfSides; }
            set
            {
                if (value < 1 || value > 2)
                    throw new ArgumentException("numberOfSides must be between 1 and 2", nameof(numberOfSides));
                else
                {
                    numberOfSides = value;
                    this.hldMainBoard.SetMaxSide(numberOfSides);
                }

            }
        }

        private int maxRelayPerSide;

        public int MaxRelayPerSide
        {
            get { return maxRelayPerSide; }
            set
            {
                if (value < 1 || value > 152)
                    throw new ArgumentException("numberOfSides must be between 1 and 152", nameof(numberOfSides));
                else
                    maxRelayPerSide = value;
            }
        }



        public App(string portName, int numberOfSides, int maxRelayPerSide, string serverUrl, string secret, IHldMainBoard hldMainBoard)
        {
            this.portName = portName;
            this.serverUrl = serverUrl;
            this.hldMainBoard = hldMainBoard;
            this.NumberOfSides = numberOfSides;
            this.MaxRelayPerSide = maxRelayPerSide;

        }

        public async Task Run()
        {
            string iCNo = string.Empty;
            string version = string.Empty;
            string errMsg = string.Empty;
            bool connectionStatus = false;
            BoardStatus oldStatus = null, latestStatus;

            while (true)
            {
                // test board print info
                // test server print info
                // read data
                // send data
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

                    SendData(latestStatus, ref errMsg);
                    if (!string.IsNullOrEmpty(errMsg))
                    {
                        PrintError(errMsg);
                        await Task.Delay(ERROR_DELAY);
                        continue;
                    }
                    oldStatus = latestStatus;
                }

            }

        }

        public bool TestBoard(string portName, ref string iCNo, ref string version, ref string errMsg)
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
            if (!hldMainBoard.CloseSerialPort(ref errMsg))
            {
                return false;
            }
            return true;

        }

        public bool TestConnection(string url, ref string msg)
        {
            // implement this
            return true;
        }

        //public void 

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


                SafeBuilder builder = new SafeBuilder();
                BoardStatus boardStatus = new BoardStatus();
                errMsg = string.Empty;
                if (!hldMainBoard.OpenSerialPort(portName, BAUD_RATE, ref errMsg))
                {
                    return null;
                }

                boardStatus.PowerStatus = hldMainBoard.GetPowerStatus(ref errMsg);
                if (!string.IsNullOrEmpty(errMsg))
                {
                    return null;
                }

                for (int i = 0; i < numberOfSides; i++)
                {
                    var locks = hldMainBoard.GetLockAllStatus(i, ref errMsg);
                    if (!string.IsNullOrEmpty(errMsg))
                    {
                        return null;
                    }
                    var sensors = hldMainBoard.GetSensorAllStatus(i, ref errMsg);
                    if (!string.IsNullOrEmpty(errMsg))
                    {
                        return null;
                    }
                    boardStatus.SafeStatuss.AddRange(builder.BuildMany(locks, sensors, i, MaxRelayPerSide));
                }

                if (!hldMainBoard.CloseSerialPort(ref errMsg))
                {
                    return null;
                }
                return boardStatus;
            }
            catch (Exception ex)
            {
                errMsg = ex.ToString();
                return null;
            }
        }

        public bool SendData(BoardStatus status, ref string errMsg)
        {
            return true;
        }
    }
}
