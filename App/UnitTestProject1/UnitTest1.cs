using App;
using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.QualityTools.Testing.Fakes;

namespace App.Tests
{
    [TestClass()]
    public class UnitTest1
    {
        const string Port = "COM1",
                ServerUrl = "htpp://server.com",
                Token = "token";
        AppConfig appConfig;

        [TestInitialize()]
        public void BeforeEach()
        {
            appConfig = new AppConfig();
        }

        [TestMethod()]
        public void LoadTest_FileExistWithConfig()
        {
            using (ShimsContext.Create())
            {
                System.IO.Fakes.ShimFile.ExistsString = (string path) =>
                {
                    return true;
                };
                System.IO.Fakes.ShimFile.ReadAllLinesString = (string path) =>
                {
                    return new string[] { "COM1", "htpp://server.com", "token" };
                };

                Assert.IsTrue(appConfig.Load("path"));
                Assert.AreEqual(Port, appConfig.Port);
                Assert.AreEqual(ServerUrl, appConfig.ServerUrl);
                Assert.AreEqual(Token, appConfig.Token);
            }
        }

        [TestMethod()]
        public void LoadTest_FileNotExist()
        {
            using (ShimsContext.Create())
            {
                System.IO.Fakes.ShimFile.ExistsString = (string path) =>
                {
                    return false;
                };
                Assert.IsFalse(appConfig.Load("path"));
            }
        }

        [TestMethod()]
        public void LoadTest_FileWrongFormat()
        {
            using (ShimsContext.Create())
            {
                using (ShimsContext.Create())
                {
                    System.IO.Fakes.ShimFile.ExistsString = (string path) =>
                    {
                        return true;
                    };
                    System.IO.Fakes.ShimFile.ReadAllLinesString = (string path) =>
                    {
                        return new string[] { "COM1", "htpp://server.com" };
                    };

                    Assert.IsFalse(appConfig.Load("path"));
                }
            }
        }
    }
}
