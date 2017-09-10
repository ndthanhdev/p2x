using Microsoft.VisualStudio.TestTools.UnitTesting;
using App;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.QualityTools.Testing.Fakes;

namespace AppTests
{
    [TestClass()]
    public class AppTests
    {
        IHldMainBoard boardStub;
        string[] ports = new string[] { "COM1" };
        string serverUrl = "http://server.com";


        [TestInitialize()]
        public void BeforeEach()
        {
            boardStub = new App.Fakes.StubIHldMainBoard();
        }

        [TestMethod()]
        public void InputConfigTest_HappyPath()
        {
            IApp appReal = new App.App(boardStub);
            var configReal = new App.AppConfig("path");
            string iCNoReal = string.Empty, versionReal = string.Empty, errMsgReal = string.Empty;

            using (ShimsContext.Create())
            {
                System.IO.Ports.Fakes.ShimSerialPort.GetPortNames = () => ports;
                App.Fakes.ShimApp.AllInstances.inputPortStringArray = (App.App app, string[] port) => "COM1";
                App.Fakes.ShimApp.AllInstances.TestBoardIAppConfigStringRefStringRefStringRef
                    = (App.App app, IAppConfig config, ref string iCNo, ref string version, ref string msg) =>
                    {
                        iCNo = "ic123";
                        version = " v2.4.3";
                        return true;
                    };
                App.Fakes.ShimApp.AllInstances.InputUrl = (App.App app) => serverUrl;
                App.Fakes.ShimApp.AllInstances.TestServerStatusString = (App.App app, string url) => true;
                App.Fakes.ShimApp.AllInstances.InputSecretKeyAndConnectIAppConfigStringRef =
                    (App.App app, IAppConfig config, ref string errMsg) => true;


                Assert.IsTrue(appReal.InputConfig(configReal, ref iCNoReal, ref versionReal, ref errMsgReal));
            };


        }

        [TestMethod()]
        public void StartTest()
        {
            string expect = string.
        }
    }
}