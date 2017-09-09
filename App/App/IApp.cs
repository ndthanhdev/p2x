namespace App
{
    public interface IApp
    {
        bool connectBoard(string choosenPort, out string iCNo, out string version, ref string errMsg);
        bool connectToServer(string url, string iCNo, string secretKey, out string token);
        void displayAvailableSerialPorts(string[] ports);
        void exitMessage();
        string inputPort(string[] ports);
        string InputSecretKey();
        string InputSecretKeyAndConnect(string url, string IcNo);
        string InputUrl();
        void printError(params string[] errorMessage);
        void Start(IAppConfig config);
        bool TestServerStatus(string url);
        bool VerifyConfig(IAppConfig config);
    }
}