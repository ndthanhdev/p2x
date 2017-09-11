using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App
{
    public class SafeStatus : IEquatable<SafeStatus>
    {
        public int Side { get; set; }
        public int No { get; set; }
        public int LockStatus { get; set; }
        public int SensorStatus { get; set; }

        public string Id
        {
            get
            {
                return string.Format("{0}{1}", Side.ToString(), No.ToString());
            }
        }

        public override bool Equals(object obj)
        {
            return Equals(obj as SafeStatus);
        }

        public bool Equals(SafeStatus other)
        {
            return other != null &&
                   Side == other.Side &&
                   No == other.No &&
                   LockStatus == other.LockStatus &&
                   SensorStatus == other.SensorStatus &&
                   Id == other.Id;
        }

        public override int GetHashCode()
        {
            var hashCode = 1698533385;
            hashCode = hashCode * -1521134295 + Side.GetHashCode();
            hashCode = hashCode * -1521134295 + No.GetHashCode();
            hashCode = hashCode * -1521134295 + LockStatus.GetHashCode();
            hashCode = hashCode * -1521134295 + SensorStatus.GetHashCode();
            hashCode = hashCode * -1521134295 + EqualityComparer<string>.Default.GetHashCode(Id);
            return hashCode;
        }

        public static bool operator ==(SafeStatus status1, SafeStatus status2)
        {
            return EqualityComparer<SafeStatus>.Default.Equals(status1, status2);
        }

        public static bool operator !=(SafeStatus status1, SafeStatus status2)
        {
            return !(status1 == status2);
        }


        //public override string ToString()
        //{
        //    return string.Format("{0}|{1}|{2}", Id, LockStatus, SensorStatus);
        //}
    }
}
