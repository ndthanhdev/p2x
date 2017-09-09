using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Ports;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App
{
    public class App : IApp
    {
        IHldMainBoard hldMainBoard;

        public App(IHldMainBoard hldMainBoard)
        {
            this.hldMainBoard = hldMainBoard;
        }

        public void Run(IAppConfig config)
        {
            Console.WriteLine("Welcome");

            // Load and verify config
            if (config.Load(AppConst.CONFIG_FILE_PATH))
            {
                Console.WriteLine("Config file detected.");
                if (VerifyConfig(config))
                {
                    exitMessage();
                    return;
                }
                Console.WriteLine("Config file was invalid.");
            }
            else
            {
                Console.WriteLine("Config file doesn't exist.");
            }

            var serialports = SerialPort.GetPortNames();
            if (serialports.Length < 1)
            {
                Console.WriteLine("There isn't any plugged serial port, Please plug board then restart app.");
                exitMessage();
                return;
            }
            config.Port = inputPort(serialports);
            string errMsg = string.Empty;
            if (!connectBoard(config.Port, out string iCNo, out string version, ref errMsg))
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
            config.ServerUrl = InputUrl();
            if (!TestServerStatus(config.ServerUrl))
            {
                printError("Server now down");
                exitMessage();
                return;
            }
            config.Token = InputSecretKeyAndConnect(config.ServerUrl, iCNo);
            config.Save(AppConst.CONFIG_FILE_PATH);
            exitMessage();
        }


        public void displayAvailableSerialPorts(string[] ports)
        {
            Console.WriteLine("Current available serial ports:");
            for (int i = 0; i < ports.Length; i++)
            {
                Console.WriteLine("\t{0}. {1}", i + 1, ports[i]);
            }
        }

        public void exitMessage()
        {
            Console.WriteLine("Press any key to exit...");
            Console.ReadLine();
        }

        public string inputPort(string[] ports)
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

        public void printError(params string[] errorMessage)
        {
            foreach (var msg in errorMessage)
            {
                Console.WriteLine("[Error] {0}", msg);
            }
        }

        public bool connectBoard(string choosenPort, out string iCNo, out string version, ref string errMsg)
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

        public string InputUrl()
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

        public bool TestServerStatus(string url)
        {
            // implement this
            return true;
        }

        public string InputSecretKey()
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

        public bool connectToServer(string url, string iCNo, string secretKey, out string token)
        {
            token = "";
            return true;
        }

        public string InputSecretKeyAndConnect(string url, string IcNo)
        {
            bool flag = false;
            string secretKey = "";
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

        public bool VerifyConfig(IAppConfig config)
        {
            return true;
        }

    }
}
