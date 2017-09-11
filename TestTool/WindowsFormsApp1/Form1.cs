using FakeHldMainBoard;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using Newtonsoft.Json;
using System.IO;

namespace WindowsFormsApp1
{
    public partial class Form1 : Form
    {
        CheckBox[] RL, LL, RS, LS;
        Task t;
        public Form1()
        {
            InitializeComponent();
            RL = new CheckBox[] { chbRL1, chbRL2, chbRL3, chbRL4 };
            RS = new CheckBox[] { chbRS1, chbRS2, chbRS3, chbRS4 };

            LL = new CheckBox[] { chbLL1, chbLL2, chbLL3, chbLL4 };
            LS = new CheckBox[] { chbLS1, chbLS2, chbLS3, chbLS4 };

            Task.Run(async () => await Loop());
        }

        public async Task Loop()
        {
            while (true)
            {
                await Task.Delay(2000);
                if (!chbStart.Checked)
                {
                    continue;
                }
                HldMainBoardStatus hld = new HldMainBoardStatus();
                hld.OpenSerialPort = chbOpenSerialPort.Checked;
                hld.CloseSerialPort = chbCloseSerialPort.Checked;

                hld.GetPowerStatus = Convert.ToInt32(npdSetPowerStatus.Value);
                hld.ICNo = txtICNo.Text;
                hld.GetVersion = txtGetVersion.Text;

                hld.SetMaxSide = Convert.ToInt32(npdSetMaxSize.Value);

                hld.nLockRight = new int[Convert.ToInt32(npdRight.Value)];
                hld.nSensorRight = new int[Convert.ToInt32(npdRight.Value)];
                for (int i = 0; i < npdRight.Value; i++)
                {
                    hld.nLockRight[i] = RL[i].Checked ? 1 : 0;
                    hld.nSensorRight[i] = RS[i].Checked ? 1 : 0;
                }


                hld.nLockLeft = new int[Convert.ToInt32(npdLeft.Value)];
                hld.nSensorLeft = new int[Convert.ToInt32(npdLeft.Value)];
                for (int i = 0; i < npdLeft.Value; i++)
                {
                    hld.nLockLeft[i] = LL[i].Checked ? 1 : 0;
                    hld.nSensorLeft[i] = LS[i].Checked ? 1 : 0;
                }

                save(txbPath.Text, hld);

            }
        }

        void save(string path, HldMainBoardStatus hld)
        {
            try
            {
                var json = JsonConvert.SerializeObject(hld, Formatting.Indented);
                File.WriteAllText(path, json);

            }
            catch (Exception ex)
            {

                throw;
            }
        }


    }
}
