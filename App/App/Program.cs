using MainBoardLib;
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
            var serialports = SerialPort.GetPortNames();
            if (serialports.Length < 1)
            {
                Console.WriteLine("There isn't any plugged serial port, Please plug board then restart app.");
                exitMessage();
                return;
            }
            string choosenPort = inputPort(serialports);
            if (!connectBoard(choosenPort, out string icData, out string version))
            {
                Console.WriteLine("Please plug board then restart app.");
                exitMessage();
                return;
            }
            else
            {
                Console.WriteLine(icData);
            }
            exitMessage();

        }

        static void displayAvailableSerialPorts(string[] ports)
        {
            Console.WriteLine("Current available serial ports:");
            for (int i = 0; i < ports.Length; i++)
            {
                Console.WriteLine("\t{0}. {1}", i + 1, ports[i]);
            }
        }

        static void exitMessage()
        {
            Console.WriteLine("Press any key to exit...");
            Console.ReadLine();
        }

        static string inputPort(string[] ports)
        {
            int portNumber;
            bool isParseSuccess;
            do
            {
                displayAvailableSerialPorts(ports);
                Console.Write("Select a port: ");
                isParseSuccess = int.TryParse(Console.ReadLine(), out portNumber);
            } while (!isParseSuccess || portNumber < 1 || portNumber > ports.Length);
            return ports[portNumber - 1];
        }

        static void printError(params string[] errorMessage)
        {
            foreach (var msg in errorMessage)
            {
                Console.WriteLine("[Error] {0}", msg);
            }
        }

        static bool connectBoard(string choosenPort, out string iCNo, out string version)
        {
            iCNo = "";
            version = "";
            string errMsg = string.Empty;
            bool isConnected = mainBoard.OpenSerialPort(choosenPort, AppConst.BAUD_RATE, ref errMsg);
            if (!isConnected)
            {
                printError(errMsg);
                return false;
            }
            else
            {
                iCNo = mainBoard.GetICCardData();
                version = mainBoard.GetVersion(ref errMsg);
                if (string.IsNullOrEmpty(errMsg))
                {
                    printError(errMsg);
                    return false;

                }
                else if (string.IsNullOrEmpty(iCNo))
                {
                    errMsg = "IC No is empty";
                    printError(errMsg);
                    return false;
                }
                else
                {
                    return true;
                }
            }
        }

        //static string InputUrl()
        //{

        //}
    }
}
