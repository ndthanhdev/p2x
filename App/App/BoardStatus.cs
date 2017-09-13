using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App
{
    public class BoardStatus : IEquatable<BoardStatus>
    {
        public int PowerStatus { get; set; }

        public IList<SafeStatus> SafeStatuss { get; set; }

        public override bool Equals(object obj)
        {
            return Equals(obj as BoardStatus);
        }

        public bool Equals(BoardStatus other)
        {
            return other != null &&
                   PowerStatus == other.PowerStatus &&
                   Enumerable.SequenceEqual<SafeStatus>(SafeStatuss, other.SafeStatuss);
        }

        public override int GetHashCode()
        {
            var hashCode = -85989933;
            hashCode = hashCode * -1521134295 + PowerStatus.GetHashCode();
            hashCode = hashCode * -1521134295 + EqualityComparer<IList<SafeStatus>>.Default.GetHashCode(SafeStatuss);
            return hashCode;
        }

        public static bool operator ==(BoardStatus status1, BoardStatus status2)
        {
            return EqualityComparer<BoardStatus>.Default.Equals(status1, status2);
        }

        public static bool operator !=(BoardStatus status1, BoardStatus status2)
        {
            return !(status1 == status2);
        }

        public override string ToString()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }


    }
}
