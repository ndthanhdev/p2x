namespace App
{
    public interface IAppConfig
    {
        string Port { get; set; }
        string ServerUrl { get; set; }
        string Token { get; set; }

        bool Load();
        void Save();
    }
}