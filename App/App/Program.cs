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
        const string CONFIG_FILE_PATH = "config.txt";

        static void Main(string[] args)
        {
            HldMainBoard hldMainBoard = new HldMainBoard();
            var app = new App(hldMainBoard);
            if (!app.Start(new AppConfig(CONFIG_FILE_PATH)))
            {
                exitMessage();
            }
            app.Loop();
        }


        static void exitMessage()
        {
            Console.WriteLine("Press any key to exit...");
            Console.ReadLine();
        }


    }
}
