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
        private HldMainBoardStatus Load()
        {
            var json = File.ReadAllText(Path);
            return JsonConvert.DeserializeObject<HldMainBoardStatus>(json);
        }
        public bool CloseSerialPort(ref string strMsg)
        {
            return Load().CloseSerialPort;
        }

        public string GetCoderTextData()
        {
            throw new NotImplementedException();
        }

        public string GetICCardData()
        {
            return Load().ICNo;
        }

        public int[] GetLockAllStatus(int nSide, ref string strMsg)
        {
            var status = Load();
            return nSide == 0 ? status.nLockRight : status.nLockLeft;
        }

        public int GetLockStatus(int nSide, int nLockID, ref string strMsg)
        {
            throw new NotImplementedException();
        }

        public int GetPowerStatus(ref string strMsg)
        {
            return Load().GetPowerStatus;
        }

        public int[] GetSensorAllStatus(int nSide, ref string strMsg)
        {
            var status = Load();
            return nSide == 0 ? status.nSensorRight : status.nSensorLeft;
        }

        public int GetSensorStatus(int nSide, int nLockID, ref string strMsg)
        {
            throw new NotImplementedException();
        }

        public string GetVersion(ref string strMsg)
        {
            return Load().GetVersion;
        }

        public void IsDebug(bool bValue)
        {
            throw new NotImplementedException();
        }

        public int OpenLock(int nSide, int nLockID, ref string strMsg)
        {
            throw new NotImplementedException();
        }

        public bool OpenSerialPort(string strPortName, int nBaudRate, ref string strMsg)
        {
            return Load().OpenSerialPort;
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
            return Load().SetMaxSide;
        }
    }
}
