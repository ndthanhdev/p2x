using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App
{
    class Program
    {
        static void Main(string[] args)
        {
            IHldMainBoard hldMainBoard = new HldMainBoard();
            Task.Run(() => new App(args[0], int.Parse(args[1]), int.Parse(args[2]),
                args[3], args[4], hldMainBoard).Run());
            Console.ReadLine();
        }
    }
}
