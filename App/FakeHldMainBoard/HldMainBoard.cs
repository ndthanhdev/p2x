using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;


namespace FakeHldMainBoard
{
    public class HldMainBoard : IHldMainBoard
    {
        public static string Path;


        public bool CloseSerialPort(ref string strMsg)
        {
            return HldMainBoardStatus.Load(Path).CloseSerialPort;
        }

        public string GetCoderTextData()
        {
            throw new NotImplementedException();
        }

        public string GetICCardData()
        {
            return HldMainBoardStatus.Load(Path).IC;
        }

        public int[] GetLockAllStatus(int nSide, ref string strMsg)
        {
            var status = HldMainBoardStatus.Load(Path);
            return status.Locks;
        }

        public int GetLockStatus(int nSide, int nLockID, ref string strMsg)
        {
            throw new NotImplementedException();
        }

        public int GetPowerStatus(ref string strMsg)
        {
            return HldMainBoardStatus.Load(Path).GetPowerStatus;
        }

        public int[] GetSensorAllStatus(int nSide, ref string strMsg)
        {
            var status = HldMainBoardStatus.Load(Path);
            return status.Sensors;
        }

        public int GetSensorStatus(int nSide, int nLockID, ref string strMsg)
        {
            throw new NotImplementedException();
        }

        public string GetVersion(ref string strMsg)
        {
            return HldMainBoardStatus.Load(Path).GetVersion;
        }

        public void IsDebug(bool bValue)
        {
            throw new NotImplementedException();
        }

        public int OpenLock(int nSide, int nLockID, ref string strMsg)
        {
            HldMainBoardStatus state = HldMainBoardStatus.Load(Path);
            state.Locks[nLockID] = 0;
            state.Save(Path);
            return 0;
        }

        public bool OpenSerialPort(string strPortName, int nBaudRate, ref string strMsg)
        {
            return HldMainBoardStatus.Load(Path).OpenSerialPort;
        }

        public int SetCoderSleep(ref string strMsg)
        {
            throw new NotImplementedException();
        }

        public int SetCoderWakeup(ref string strMsg)
        {
            throw new NotImplementedException();
        }

        public int SetLight(int nSide, int nRelayID, int nDoLightType, ref string strMsg)
        {
            throw new NotImplementedException();
        }

        public int SetMaxSide(int nMaxSide)
        {
            return HldMainBoardStatus.Load(Path).SetMaxSide;
        }
    }
}
