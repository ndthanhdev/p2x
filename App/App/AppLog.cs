using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App
{
    public static class AppLog
    {
        public static void Error(string message, params object[] args)
        {
            Console.Write("[Error] ");
            Console.WriteLine(message, args);
        }

        public static void Info(string message, params object[] args)
        {
            Console.Write("[Info] ");
            Console.WriteLine(message, args);
        }
    }
}
