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
        CheckBox[] L, S;
        public Form1()
        {
            InitializeComponent();
            L = new CheckBox[] { chbL1, chbL2, chbL3, chbL4 };
            S = new CheckBox[] { chbS1, chbS2, chbS3, chbS4 };

            Task.Run(async () => await Loop());
        }

        public async Task Loop()
        {
            while (true)
            {
                await Task.Delay(1000);
                if (!chbStart.Checked)
                {
                    if (File.Exists(txbPath.Text))
                    {
                        File.Delete(txbPath.Text);
                    }
                    continue;
                }

                HldMainBoardStatus status = new HldMainBoardStatus();
                status.OpenSerialPort = chbOpenSerialPort.Checked;
                status.CloseSerialPort = chbCloseSerialPort.Checked;

                status.GetPowerStatus = Convert.ToInt32(npdSetPowerStatus.Value);
                status.ICNo = txtICNo.Text;
                status.GetVersion = txtGetVersion.Text;

                status.SetMaxSide = Convert.ToInt32(npdSetMaxSize.Value);

                status.NRelay = Convert.ToInt32(npdNSafe.Value);
                status.Locks = new int[status.NRelay];
                status.Sensors = status.SetMaxSide > 1 ? new int[status.NRelay] : null;
                for (int i = 0; i < status.NRelay; i++)
                {
                    status.Locks[i] = L[i].Checked ? 1 : 0;
                    if (status.Sensors != null)
                        status.Sensors[i] = S[i].Checked ? 1 : 0;
                }

                status.Save(txbPath.Text);

            }
        }


    }
}
