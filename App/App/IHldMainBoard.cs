using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App
{
    public interface IHldMainBoard
    {
        bool CloseSerialPort(ref string strMsg);
        string GetCoderTextData();
        string GetICCardData();
        int[] GetLockAllStatus(int nSide, ref string strMsg);
        int GetLockStatus(int nSide, int nLockID, ref string strMsg);
        int GetPowerStatus(ref string strMsg);
        int[] GetSensorAllStatus(int nSide, ref string strMsg);
        int GetSensorStatus(int nSide, int nLockID, ref string strMsg);
        string GetVersion(ref string strMsg);
        void IsDebug(bool bValue);
        int OpenLock(int nSide, int nLockID, ref string strMsg);
        bool OpenSerialPort(string strPortName, int nBaudRate, ref string strMsg);
        int SetCoderSleep(ref string strMsg);
        int SetCoderWakeup(ref string strMsg);
        int SetLight(int nSide, int nRelayID, int nDoLightType, ref string strMsg);
        bool SetMaxSide(int nMaxSide);
    }
}

