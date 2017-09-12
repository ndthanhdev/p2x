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

                HldMainBoardState state = new HldMainBoardState();
                state.OpenSerialPort = chbOpenSerialPort.Checked;
                state.CloseSerialPort = chbCloseSerialPort.Checked;

                state.GetPowerStatus = Convert.ToInt32(npdSetPowerStatus.Value);
                state.ICNo = txtICNo.Text;
                state.GetVersion = txtGetVersion.Text;

                state.SetMaxSide = Convert.ToInt32(npdSetMaxSize.Value);

                state.NRelay = Convert.ToInt32(npdNSafe.Value);
                state.Locks = new int[state.NRelay];
                state.Sensors = state.SetMaxSide > 1 ? new int[state.NRelay] : null;
                for (int i = 0; i < state.NRelay; i++)
                {
                    state.Locks[i] = L[i].Checked ? 1 : 0;
                    if (state.Sensors != null)
                        state.Sensors[i] = S[i].Checked ? 1 : 0;
                }

                state.Save(txbPath.Text);

            }
        }


    }
}
