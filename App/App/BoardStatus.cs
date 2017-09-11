﻿using System;
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
            var hashCode = -1391016798;
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



        //public override string ToString()
        //{
        //    StringBuilder builder = new StringBuilder();
        //    builder.AppendLine("====================");
        //    builder.AppendLine(string.Format("Power: {0}", PowerStatus));
        //    foreach (var item in SafeStatuss)
        //    {
        //        builder.AppendLine(item.ToString());
        //    }
        //    builder.AppendLine("====================");
        //    return builder.ToString();
        //}


    }
}
