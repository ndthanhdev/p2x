using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App
{
    public class Safe : IEquatable<Safe>
    {
        private int _side;

        public int Side
        {
            get { return _side; }
            set
            {
                if (value < 0 || value > 1)
                {
                    throw new ArgumentOutOfRangeException();
                }
                _side = value;
            }
        }


        private int _no;

        public int No
        {
            get { return _no; }
            set
            {
                if (value < 1 || value > 152)
                {
                    throw new ArgumentOutOfRangeException();
                }
                _no = value;
            }
        }

        public override bool Equals(object obj)
        {
            return Equals(obj as Safe);
        }

        public bool Equals(Safe other)
        {
            return other != null &&
                   Side == other.Side &&
                   No == other.No;
        }

        public override int GetHashCode()
        {
            var hashCode = 96580424;
            hashCode = hashCode * -1521134295 + Side.GetHashCode();
            hashCode = hashCode * -1521134295 + No.GetHashCode();
            return hashCode;
        }

        public override string ToString()
        {
            return JsonConvert.SerializeObject(this);
        }

        public static bool operator ==(Safe safe1, Safe safe2)
        {
            return EqualityComparer<Safe>.Default.Equals(safe1, safe2);
        }

        public static bool operator !=(Safe safe1, Safe safe2)
        {
            return !(safe1 == safe2);
        }
    }
}
