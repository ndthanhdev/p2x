using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App
{
    class SafeStateBuilder
    {
        public SafeState[] BuildMany(int[] locks, int[] sensors, int side, int nRelay)
        {
            SafeState[] safes = new SafeState[nRelay];
            for (int i = 0; i < nRelay; i++)
            {
                safes[i] = new SafeState()
                {
                    Safe = new Safe()
                    {
                        Side = side,
                        Id = i
                    },
                    LockStatus = locks[i],
                    SensorStatus = sensors[i]
                };
            }
            return safes;
        }
    }
}
