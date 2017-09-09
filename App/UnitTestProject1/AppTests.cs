using Microsoft.VisualStudio.TestTools.UnitTesting;
using App;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppTests
{
    [TestClass()]
    public class AppTests
    {
        IHldMainBoard board;

        [TestInitialize()]
        public void BeforeEach()
        {
            board = new App.Fakes.StubIHldMainBoard();            
        }

        [TestMethod()]
        public void RunTest()
        {
            
        }
    }
}