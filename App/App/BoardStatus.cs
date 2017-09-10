using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App
{
    public class BoardStatus
    {
        public int PowerStatus { get; set; }

        private List<SafeStatus> safeStatuss;

        public List<SafeStatus> SafeStatuss
        {
            get { return safeStatuss = safeStatuss ?? new List<SafeStatus>(); }
            set { safeStatuss = value; }
        }

    }
}
