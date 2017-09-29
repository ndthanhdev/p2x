using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App
{
    class SafeStatusBuilder
    {
        public SafeStatus[] BuildMany(int nRelay, int[] locks, int[] sensors = null)
        {
            SafeStatus[] safes = new SafeStatus[nRelay];
            for (int i = 0; i < nRelay; i++)
            {
                safes[i] = new SafeStatus()
                {
                    No = i,
                    IsOpen = locks[i],
                    IsOccupied = sensors == null ? 1 : sensors[i]
                };
            };

            return safes;
        }
    }
}
