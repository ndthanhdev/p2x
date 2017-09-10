namespace App
{
    public interface IApp
    {
        bool connectBoard(string choosenPort, out string iCNo, out string version, ref string errMsg);
        bool connectToServer(string url, string iCNo, string secretKey, out string token);
        void displayAvailableSerialPorts(string[] ports);
        bool InputConfig(IAppConfig config, ref string iCNo, ref string version, ref string errMsg);
        string inputPort(string[] ports);
        string InputSecretKey();
        bool InputSecretKeyAndConnect(IAppConfig config, ref string errMsg);
        string InputUrl();
        void Loop();
        void printError(params string[] errorMessage);
        bool Start(IAppConfig config);
        bool TestBoard(IAppConfig config, ref string iCNo, ref string version, ref string msg);
        bool TestServerStatus(string url);
        bool VerifyConfig(IAppConfig config);
    }
}