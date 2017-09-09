using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Ports;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App
{
    class Program
    {

        static void Main(string[] args)
        {
            HldMainBoard hldMainBoard = new HldMainBoard();
            new App(hldMainBoard).Run(new AppConfig());
        }

    }
}
