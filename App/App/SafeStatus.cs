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
        public int No { get; set; }
        public int IsOpen { get; set; }
        public int IsOccupied { get; set; }

        public override bool Equals(object obj)
        {
            return Equals(obj as SafeStatus);
        }

        public bool Equals(SafeStatus other)
        {
            return other != null &&
                   No == other.No &&
                   IsOpen == other.IsOpen &&
                   IsOccupied == other.IsOccupied;
        }

        public override int GetHashCode()
        {
            var hashCode = 2109148185;
            hashCode = hashCode * -1521134295 + No.GetHashCode();
            hashCode = hashCode * -1521134295 + IsOpen.GetHashCode();
            hashCode = hashCode * -1521134295 + IsOccupied.GetHashCode();
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
