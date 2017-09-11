using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Runtime.InteropServices;

namespace App
{


    class Program
    {
        [DllImport("user32.dll")]
        static extern bool ShowWindow(IntPtr hWnd, int nCmdShow);

        [DllImport("Kernel32")]
        private static extern IntPtr GetConsoleWindow();

        /// <summary>
        /// 
        /// </summary>
        /// <param name="args">
        /// 0: portname
        /// 1: number of relay on right side
        /// 2: number of relay on left side
        /// 3: server url
        /// 4: secret
        /// 5: 0 = Hidden window ( for production), 5 = Show window (more info https://msdn.microsoft.com/en-us/library/ms633548(VS.85).aspx)
        /// </param>
        static void Main(string[] args)
        {
            IntPtr hwnd;
            hwnd = GetConsoleWindow();
            ShowWindow(hwnd, int.Parse(args[5]));

            // for debug
            FakeHldMainBoard.HldMainBoard.Path = "board.txt";

            IHldMainBoard hldMainBoard = new HldMainBoard();
            new App(args[0], int.Parse(args[1]), int.Parse(args[2]),
                args[3], args[4], hldMainBoard).RunAsync().Wait();
        }
    }
}
