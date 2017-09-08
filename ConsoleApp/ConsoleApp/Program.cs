using System;
using System.IO;
using Hld;
using MainBoardLib;
using RJCP.IO.Ports;

namespace ConsoleApp
{
    class Program
    {
        static HldMainBoard _mainBoard;
        static HldMainBoard mainBoard = _mainBoard = _mainBoard ?? new HldMainBoard();

        static void Main(string[] args)
        {
            Console.WriteLine("Welcome");
            if (File.Exists("config.txt"))
            {

            }
            else
            {
                Console.WriteLine("Config file doesn't exist ");
            }
            displayAvailableSerialPorts();
            Console.ReadLine();

        }

        static void displayAvailableSerialPorts()
        {
            Console.WriteLine("Current available serial ports:");
            foreach (var port in SerialPortStream.GetPortNames())
            {
                Console.WriteLine("\t- {0}", port);
            }
        }
    }
}
