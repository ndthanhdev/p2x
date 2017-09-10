using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App
{







    public class LockData
    {
        public Side Side { get; set; }
        public byte No { get; set; }
        public LockStatus LockStatus { get; set; }
        public SensorStatus SensorStatus { get; set; }

        public string Id
        {
            get
            {
                return string.Format("{0}{1}", Side == Side.Right ? "R" : "L", No.ToString());
            }
        }

    }

    public class BoardStatus
    {
        public PowerStatus PowerStatus { get; set; }

        public List<LockData> LockDatas { get; set; }
    }
}
