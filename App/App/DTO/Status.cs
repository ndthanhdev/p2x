using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.DTO
{
    class Status : BoardStatus
    {
        public string KioskICNo { get; set; }
        public Status(BoardStatus boardStatus, string iCNo)
        {
            this.PowerStatus = boardStatus.PowerStatus;
            this.SafeStatuss = boardStatus.SafeStatuss;
            this.KioskICNo = iCNo;
        }
    }
}
