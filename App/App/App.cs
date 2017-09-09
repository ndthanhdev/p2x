using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Ports;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App
{
    public class App
    {
        IHldMainBoard hldMainBoard;

        public App(IHldMainBoard hldMainBoard)
        {
            this.hldMainBoard = hldMainBoard;
        }

        public void Run()
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
            string errMsg = string.Empty;
            if (!connectBoard(choosenPort, out string iCNo, out string version, ref errMsg))
            {
                printError(errMsg);
                Console.WriteLine("Please plug board then restart app.");
                exitMessage();
                return;
            }
            else
            {
                Console.WriteLine(iCNo);
            }
            var url = InputUrl();
            if (!TestServerStatus(url))
            {
                printError("Server now down");
                exitMessage();
                return;
            }
            string token = InputSecretKeyAndConnect(url, iCNo, out string secretKey);
            SaveConfig(url, secretKey);
            exitMessage();
        }


        void displayAvailableSerialPorts(string[] ports)
        {
            Console.WriteLine("Current available serial ports:");
            for (int i = 0; i < ports.Length; i++)
            {
                Console.WriteLine("\t{0}. {1}", i + 1, ports[i]);
            }
        }

        void exitMessage()
        {
            Console.WriteLine("Press any key to exit...");
            Console.ReadLine();
        }

        string inputPort(string[] ports)
        {
            int portNumber;
            bool isParseSuccess;
            do
            {
                displayAvailableSerialPorts(ports);
                Console.Write("Select a port: ");
                isParseSuccess = int.TryParse(Console.ReadLine().Trim(), out portNumber);
            } while (!isParseSuccess || portNumber < 1 || portNumber > ports.Length);
            return ports[portNumber - 1];
        }

        void printError(params string[] errorMessage)
        {
            foreach (var msg in errorMessage)
            {
                Console.WriteLine("[Error] {0}", msg);
            }
        }

        bool connectBoard(string choosenPort, out string iCNo, out string version, ref string errMsg)
        {
            iCNo = "";
            version = "";
            errMsg = string.Empty;
            bool isConnected = hldMainBoard.OpenSerialPort(choosenPort, AppConst.BAUD_RATE, ref errMsg);
            if (!isConnected)
            {
                return false;
            }
            else
            {
                iCNo = hldMainBoard.GetICCardData();
                version = hldMainBoard.GetVersion(ref errMsg);
                if (string.IsNullOrEmpty(errMsg))
                {
                    return false;
                }
                else if (string.IsNullOrEmpty(iCNo))
                {
                    errMsg = "IC No is empty";
                    return false;
                }
                else
                {
                    return true;
                }
            }
        }

        string InputUrl()
        {
            Uri url;
            bool isParseSuccess = false;
            int count = 0;
            do
            {
                if (count > 0)
                {
                    Console.Write("Your url provided is invalid, ");
                }
                Console.Write("Input Server's url:");
                count++;
                isParseSuccess = Uri.TryCreate(Console.ReadLine().Trim(), UriKind.Absolute, out url);
            } while (!isParseSuccess);
            return url.AbsolutePath;
        }

        bool TestServerStatus(string url)
        {
            // implement this
            return true;
        }

        string InputSecretKey()
        {
            string secretKey = "";
            bool isParseSuccess = false;
            int count = 0;
            do
            {
                Console.Write("Input secret key:");
                count++;
                isParseSuccess = !string.IsNullOrEmpty(Console.ReadLine().Trim());
            } while (!isParseSuccess);
            return secretKey;
        }

        bool connectToServer(string url, string iCNo, string secretKey, out string token)
        {
            token = "";
            return true;
        }

        string InputSecretKeyAndConnect(string url, string IcNo, out string secretKey)
        {
            bool flag = false;
            string token = "";
            do
            {
                if (flag)
                {
                    Console.WriteLine("IC No isn't exist on server or secret key is incorrect. Make sure Ic No was registered with server and secret key is correct.");
                }
                flag = true;
                secretKey = InputSecretKey();

            } while (!connectToServer(url, IcNo, secretKey, out token));

            return token;
        }

        void SaveConfig(string url, string secret)
        {
            File.WriteAllLines(AppConst.CONFIG_FILE_PATH, new string[] { url, secret });
        }


    }
}
