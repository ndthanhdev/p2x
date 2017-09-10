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
        IHldMainBoard _HldMainBoard;

        public App(IHldMainBoard hldMainBoard)
        {
            this._HldMainBoard = hldMainBoard;
        }

        public bool Start(IAppConfig config)
        {
            Console.WriteLine("Welcome");

            // Load and verify config
            if (config.Load())
            {
                Console.WriteLine("Config file detected.");
                if (!TestBoard(config))
                {
                    Console.WriteLine("Connect to board unsuccessful. Please re-config.");
                }
                else
                {
                    if (!VerifyConfig(config))
                    {
                        Console.WriteLine("Connect to server unsuccessful. Please re-config.");
                    }
                    else
                    {
                        Console.WriteLine("Load config and Connect to server Successful.");
                    }
                }
            }
            else
            {
                Console.WriteLine("Config file doesn't exist. Please config.");
            }

            // Using cofig file fail input it.
            if (!InputConfig(config))
            {
                return false;
            }
            else
            {
                config.Save();
                return false;
            }
        }

        public void Loop()
        {

        }

        public bool InputConfig(IAppConfig config)
        {
            var serialports = SerialPort.GetPortNames();
            if (serialports.Length < 1)
            {
                Console.WriteLine("There isn't any plugged serial port, Please plug board then restart app.");
                return false;
            }
            config.Port = inputPort(serialports);
            string errMsg = string.Empty;
            // testboard
            if (!connectBoard(config.Port, out string iCNo, out string version, ref errMsg))
            {
                printError(errMsg);
                Console.WriteLine("Please plug board then restart app.");
                return false;
            }
            else
            {
                Console.WriteLine(iCNo);
            }
            config.ServerUrl = InputUrl();
            if (!TestServerStatus(config.ServerUrl))
            {
                printError("Server now down");
                return false;
            }
            if (!InputSecretKeyAndConnect(config))
            {
                Console.WriteLine("Can't establish connection");
                return false;
            }
            else
            {
                return true;
            }
        }

        public void displayAvailableSerialPorts(string[] ports)
        {
            Console.WriteLine("Current available serial ports:");
            for (int i = 0; i < ports.Length; i++)
            {
                Console.WriteLine("\t{0}. {1}", i + 1, ports[i]);
            }
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
            bool isConnected = _HldMainBoard.OpenSerialPort(choosenPort, AppConst.BAUD_RATE, ref errMsg);
            if (!isConnected)
            {
                return false;
            }
            else
            {
                iCNo = _HldMainBoard.GetICCardData();
                version = _HldMainBoard.GetVersion(ref errMsg);
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

        public bool InputSecretKeyAndConnect(IAppConfig config)
        {
            int count = 0;
            string secretKey = string.Empty;
            string token;
            do
            {
                if (count > 0)
                {
                    if (count >= 3)
                    {
                        return false;
                    }
                    Console.WriteLine("Remaining Chance {0}, IC No isn't exist on server or secret key is incorrect. Make sure Ic No was registered with server and secret key is correct.", 3 - count);
                }
                count++;
                secretKey = InputSecretKey();

            } while (!connectToServer(config.ServerUrl, config.Port, secretKey, out token));
            config.Token = token;
            return true;
        }

        public bool VerifyConfig(IAppConfig config)
        {
            return true;
        }

        public bool TestBoard(IAppConfig appConfig)
        {
            return true;
        }
    }
}
