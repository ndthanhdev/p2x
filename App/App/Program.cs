using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App
{
    class Program
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="args">
        /// 0: portname
        /// 1: number of relay on right side
        /// 2: number of relay on left side
        /// 3: server url
        /// 4: secret
        /// 5: debug mode or production mode (for prouction mode console app will be hidden)
        /// </param>
        static void Main(string[] args)
        {
            IHldMainBoard hldMainBoard = new HldMainBoard();
            Task.Run(() => new App(args[0], int.Parse(args[1]), int.Parse(args[2]),
                args[3], args[4], hldMainBoard).Run());
            Console.ReadLine();
        }
    }
}
