using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App
{
    public class SafeStatus
    {
        public int Side { get; set; }
        public int No { get; set; }
        public int LockStatus { get; set; }
        public int SensorStatus { get; set; }

        public string Id
        {
            get
            {
                return string.Format("{0}{1}", Side.ToString(), No.ToString());
            }
        }

    }
}
