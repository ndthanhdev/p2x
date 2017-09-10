using App.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App
{
    class HldMainBoard : MainBoardLib.HldMainBoard, IHldMainBoard
    {
        PowerStatus IHldMainBoard.GetPowerStatus(ref string strMsg)
        {
            switch (base.GetPowerStatus(ref strMsg))
            {
                case 0:
                    return PowerStatus.Normal;
                case 1:
                    return PowerStatus.PowerDown;
                default:
                    return PowerStatus.Fail;
            }
        }
    }
}
