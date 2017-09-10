using App.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App
{
    public class BoardStatus
    {
        public PowerStatus PowerStatus { get; set; }

        public List<SafeStatus> LockDatas { get; set; }
    }
}
