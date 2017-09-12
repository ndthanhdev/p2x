using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App
{
    class AppConfig
    {
        public string PortName { get; set; }

        public int NoSafe { get; set; }

        public bool IsSensor { get; set; }

        public string ServerUrl { get; set; }

        public string Secret { get; set; }

        public bool ShowWindow { get; set; }

    }
}
