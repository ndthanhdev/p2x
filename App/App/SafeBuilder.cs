using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App
{
    class SafeBuilder
    {
        public SafeStatus[] BuildMany(int[] locks, int[] sensors, int nSide, int nRelay)
        {
            SafeStatus[] safes = new SafeStatus[nRelay];
            for (int i = 0; i < nRelay; i++)
            {
                safes[i].Side = nSide;
                safes[i].No = i + 1;
                safes[i].LockStatus = locks[i];
                safes[i].SensorStatus = sensors[i];
            }
            return safes;
        }
    }
}
