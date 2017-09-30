using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.DTO
{
    class Status : BoardStatus
    {
        public string KioskIC { get; set; }
        public Status(BoardStatus boardStatus, string iC)
        {
            this.PowerStatus = boardStatus.PowerStatus;
            this.SafeStatuss = boardStatus.SafeStatuss;
            this.KioskIC = iC;
        }
    }
}
