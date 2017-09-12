using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App
{
    class SafeStateBuilder
    {
        public SafeState[] BuildMany(int nRelay, int[] locks, int[] sensors = null)
        {
            SafeState[] safes = new SafeState[nRelay];
            for (int i = 0; i < nRelay; i++)
            {
                safes[i] = new SafeState()
                {
                    Id = i,
                    LockStatus = locks[i],
                    SensorStatus = sensors == null ? 1 : sensors[i]
                };
            };

            return safes;
        }
    }
}
