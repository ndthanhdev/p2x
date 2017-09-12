using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App
{
    public class SafeState : IEquatable<SafeState>
    {
        public int Id { get; set; }
        public int LockStatus { get; set; }
        public int SensorStatus { get; set; }

        public override bool Equals(object obj)
        {
            return Equals(obj as SafeState);
        }

        public bool Equals(SafeState other)
        {
            return other != null &&
                   Id == other.Id &&
                   LockStatus == other.LockStatus &&
                   SensorStatus == other.SensorStatus;
        }

        public override int GetHashCode()
        {
            var hashCode = 2109148185;
            hashCode = hashCode * -1521134295 + Id.GetHashCode();
            hashCode = hashCode * -1521134295 + LockStatus.GetHashCode();
            hashCode = hashCode * -1521134295 + SensorStatus.GetHashCode();
            return hashCode;
        }

        public override string ToString()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }

        public static bool operator ==(SafeState state1, SafeState state2)
        {
            return EqualityComparer<SafeState>.Default.Equals(state1, state2);
        }

        public static bool operator !=(SafeState state1, SafeState state2)
        {
            return !(state1 == state2);
        }
    }
}
