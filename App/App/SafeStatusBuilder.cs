using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App
{
    class SafeStatusBuilder
    {
        public SafeStatus[] BuildMany(int[] locks, int[] sensors, int side, int nRelay)
        {
            SafeStatus[] safes = new SafeStatus[nRelay];
            for (int i = 0; i < nRelay; i++)
            {
                safes[i] = new SafeStatus()
                {
                    Side = side,
                    No = i + 1,
                    LockStatus = locks[i],
                    SensorStatus = sensors[i]
                };
            }
            return safes;
        }
    }
}
