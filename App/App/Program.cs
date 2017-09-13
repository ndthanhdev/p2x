using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Runtime.InteropServices;
using System.IO;
using Newtonsoft.Json;

namespace App
{


    class Program
    {
        const string CONFIG_PATH = "config.json";

        [DllImport("user32.dll")]
        static extern bool ShowWindow(IntPtr hWnd, int nCmdShow);

        [DllImport("Kernel32")]
        private static extern IntPtr GetConsoleWindow();

        static void Main(string[] args)
        {
            var json = File.ReadAllText(CONFIG_PATH);
            AppConfig config = JsonConvert.DeserializeObject<AppConfig>(json);

            IntPtr hwnd;
            hwnd = GetConsoleWindow();
            ShowWindow(hwnd, config.ShowWindow ? 5 : 0);

            // for debug
            // HldMainBoard.Path = "board.txt";

            IHldMainBoard hldMainBoard = new HldMainBoard();
            new App(config, hldMainBoard).RunAsync().Wait();
        }
    }
}
