using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FakeHldMainBoard
{
    public class HldMainBoardState
    {
        public bool OpenSerialPort { get; set; }
        public bool CloseSerialPort { get; set; }
        public int GetPowerStatus { get; set; }
        public string ICNo { get; set; }
        public int[] nLockLeft { get; set; }
        public int[] nSensorLeft { get; set; }
        public int[] nLockRight { get; set; }
        public int[] nSensorRight { get; set; }
        public string GetVersion { get; set; }
        public int SetMaxSide { get; set; }
        public void Save(string path)
        {
            var json = JsonConvert.SerializeObject(this, Formatting.Indented);
            File.WriteAllText(path, json);
        }

        public static HldMainBoardState Load(string path)
        {
            var json = File.ReadAllText(path);
            return JsonConvert.DeserializeObject<HldMainBoardState>(json);
        }
    }
}
