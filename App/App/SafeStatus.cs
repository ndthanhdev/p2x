using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App
{
    public class SafeStatus : IEquatable<SafeStatus>
    {
        public int IdNo { get; set; }
        public int Lock { get; set; }
        public int Sensor { get; set; }

        public override bool Equals(object obj)
        {
            return Equals(obj as SafeStatus);
        }

        public bool Equals(SafeStatus other)
        {
            return other != null &&
                   IdNo == other.IdNo &&
                   Lock == other.Lock &&
                   Sensor == other.Sensor;
        }

        public override int GetHashCode()
        {
            var hashCode = 2109148185;
            hashCode = hashCode * -1521134295 + IdNo.GetHashCode();
            hashCode = hashCode * -1521134295 + Lock.GetHashCode();
            hashCode = hashCode * -1521134295 + Sensor.GetHashCode();
            return hashCode;
        }

        public override string ToString()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }

        public static bool operator ==(SafeStatus state1, SafeStatus state2)
        {
            return EqualityComparer<SafeStatus>.Default.Equals(state1, state2);
        }

        public static bool operator !=(SafeStatus state1, SafeStatus state2)
        {
            return !(state1 == state2);
        }
    }
}
