namespace App
{
    public interface IAppConfig
    {
        string Port { get; set; }
        string ServerUrl { get; set; }
        string Token { get; set; }

        bool Load(string path);
        void Save(string path);
    }
}