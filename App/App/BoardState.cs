using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App
{
    public class BoardState : IEquatable<BoardState>
    {
        public int PowerStatus { get; set; }

        public IList<SafeState> SafeStates { get; set; }

        public override bool Equals(object obj)
        {
            return Equals(obj as BoardState);
        }

        public bool Equals(BoardState other)
        {
            return other != null &&
                   PowerStatus == other.PowerStatus &&
                   Enumerable.SequenceEqual<SafeState>(SafeStates, other.SafeStates);
        }

        public override int GetHashCode()
        {
            var hashCode = -85989933;
            hashCode = hashCode * -1521134295 + PowerStatus.GetHashCode();
            hashCode = hashCode * -1521134295 + EqualityComparer<IList<SafeState>>.Default.GetHashCode(SafeStates);
            return hashCode;
        }

        public static bool operator ==(BoardState status1, BoardState status2)
        {
            return EqualityComparer<BoardState>.Default.Equals(status1, status2);
        }

        public static bool operator !=(BoardState status1, BoardState status2)
        {
            return !(status1 == status2);
        }

        public override string ToString()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }


    }
}
