using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App
{
    class HldMainBoard : MainBoardLib.HldMainBoard, IHldMainBoard
    {
        bool IHldMainBoard.SetMaxSide(int nMaxSide)
        {
            return base.SetMaxSide(nMaxSide) == 0 ? true : false;
        }
    }
}
