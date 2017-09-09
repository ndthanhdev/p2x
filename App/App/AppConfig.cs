using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App
{
    public class AppConfig : IAppConfig
    {
        public string Port { get; set; }
        public string ServerUrl { get; set; }
        public string Token { get; set; }

        private string _path;
        public AppConfig(string path)
        {
            _path = path;
        }

        public bool Load()
        {
            if (File.Exists(_path))
            {
                var lines = File.ReadAllLines(AppConst.CONFIG_FILE_PATH);
                if (lines.Length != 3)
                    return false;
                Port = lines[0];
                ServerUrl = lines[1];
                Token = lines[2];
                return true;
            }
            return false;
        }

        public void Save()
        {
            File.WriteAllLines(_path, new string[] { Port, ServerUrl, Token });
        }
    }
}
