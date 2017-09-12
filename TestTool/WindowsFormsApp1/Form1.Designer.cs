namespace WindowsFormsApp1
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.label4 = new System.Windows.Forms.Label();
            this.label5 = new System.Windows.Forms.Label();
            this.txtICNo = new System.Windows.Forms.TextBox();
            this.label6 = new System.Windows.Forms.Label();
            this.txtGetVersion = new System.Windows.Forms.TextBox();
            this.label7 = new System.Windows.Forms.Label();
            this.label9 = new System.Windows.Forms.Label();
            this.label10 = new System.Windows.Forms.Label();
            this.chbL1 = new System.Windows.Forms.CheckBox();
            this.chbL2 = new System.Windows.Forms.CheckBox();
            this.chbL3 = new System.Windows.Forms.CheckBox();
            this.chbL4 = new System.Windows.Forms.CheckBox();
            this.chbS4 = new System.Windows.Forms.CheckBox();
            this.chbS3 = new System.Windows.Forms.CheckBox();
            this.chbS2 = new System.Windows.Forms.CheckBox();
            this.chbS1 = new System.Windows.Forms.CheckBox();
            this.chbOpenSerialPort = new System.Windows.Forms.CheckBox();
            this.chbCloseSerialPort = new System.Windows.Forms.CheckBox();
            this.chbStart = new System.Windows.Forms.CheckBox();
            this.npdNSafe = new System.Windows.Forms.NumericUpDown();
            this.txbPath = new System.Windows.Forms.TextBox();
            this.label13 = new System.Windows.Forms.Label();
            this.npdSetMaxSize = new System.Windows.Forms.NumericUpDown();
            this.npdSetPowerStatus = new System.Windows.Forms.NumericUpDown();
            ((System.ComponentModel.ISupportInitialize)(this.npdNSafe)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.npdSetMaxSize)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.npdSetPowerStatus)).BeginInit();
            this.SuspendLayout();
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(12, 30);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(78, 13);
            this.label1.TabIndex = 1;
            this.label1.Text = "OpenSerialPort";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(118, 30);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(78, 13);
            this.label2.TabIndex = 3;
            this.label2.Text = "CloseSerialPort";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(542, 30);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(63, 13);
            this.label3.TabIndex = 5;
            this.label3.Text = "SetMaxSize";
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Location = new System.Drawing.Point(224, 30);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(84, 13);
            this.label4.TabIndex = 7;
            this.label4.Text = "GetPowerStatus";
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Location = new System.Drawing.Point(330, 30);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(31, 13);
            this.label5.TabIndex = 9;
            this.label5.Text = "ICNo";
            // 
            // txtICNo
            // 
            this.txtICNo.Location = new System.Drawing.Point(330, 46);
            this.txtICNo.Name = "txtICNo";
            this.txtICNo.Size = new System.Drawing.Size(100, 20);
            this.txtICNo.TabIndex = 8;
            this.txtICNo.Text = "ic123";
            // 
            // label6
            // 
            this.label6.AutoSize = true;
            this.label6.Location = new System.Drawing.Point(436, 30);
            this.label6.Name = "label6";
            this.label6.Size = new System.Drawing.Size(59, 13);
            this.label6.TabIndex = 11;
            this.label6.Text = "GetVersion";
            // 
            // txtGetVersion
            // 
            this.txtGetVersion.Location = new System.Drawing.Point(436, 46);
            this.txtGetVersion.Name = "txtGetVersion";
            this.txtGetVersion.Size = new System.Drawing.Size(100, 20);
            this.txtGetVersion.TabIndex = 10;
            this.txtGetVersion.Text = "version 1.2.3";
            // 
            // label7
            // 
            this.label7.AutoSize = true;
            this.label7.Location = new System.Drawing.Point(15, 105);
            this.label7.Name = "label7";
            this.label7.Size = new System.Drawing.Size(35, 13);
            this.label7.TabIndex = 13;
            this.label7.Text = "nSafe";
            // 
            // label9
            // 
            this.label9.AutoSize = true;
            this.label9.Location = new System.Drawing.Point(15, 163);
            this.label9.Name = "label9";
            this.label9.Size = new System.Drawing.Size(27, 13);
            this.label9.TabIndex = 16;
            this.label9.Text = "lock";
            // 
            // label10
            // 
            this.label10.AutoSize = true;
            this.label10.Location = new System.Drawing.Point(15, 194);
            this.label10.Name = "label10";
            this.label10.Size = new System.Drawing.Size(38, 13);
            this.label10.TabIndex = 17;
            this.label10.Text = "sensor";
            // 
            // chbL1
            // 
            this.chbL1.AutoSize = true;
            this.chbL1.Location = new System.Drawing.Point(81, 159);
            this.chbL1.Name = "chbL1";
            this.chbL1.Size = new System.Drawing.Size(80, 17);
            this.chbL1.TabIndex = 20;
            this.chbL1.Text = "checkBox1";
            this.chbL1.UseVisualStyleBackColor = true;
            // 
            // chbL2
            // 
            this.chbL2.AutoSize = true;
            this.chbL2.Location = new System.Drawing.Point(167, 159);
            this.chbL2.Name = "chbL2";
            this.chbL2.Size = new System.Drawing.Size(80, 17);
            this.chbL2.TabIndex = 21;
            this.chbL2.Text = "checkBox2";
            this.chbL2.UseVisualStyleBackColor = true;
            // 
            // chbL3
            // 
            this.chbL3.AutoSize = true;
            this.chbL3.Location = new System.Drawing.Point(253, 159);
            this.chbL3.Name = "chbL3";
            this.chbL3.Size = new System.Drawing.Size(80, 17);
            this.chbL3.TabIndex = 22;
            this.chbL3.Text = "checkBox3";
            this.chbL3.UseVisualStyleBackColor = true;
            // 
            // chbL4
            // 
            this.chbL4.AutoSize = true;
            this.chbL4.Location = new System.Drawing.Point(339, 159);
            this.chbL4.Name = "chbL4";
            this.chbL4.Size = new System.Drawing.Size(80, 17);
            this.chbL4.TabIndex = 23;
            this.chbL4.Text = "checkBox4";
            this.chbL4.UseVisualStyleBackColor = true;
            // 
            // chbS4
            // 
            this.chbS4.AutoSize = true;
            this.chbS4.Location = new System.Drawing.Point(339, 194);
            this.chbS4.Name = "chbS4";
            this.chbS4.Size = new System.Drawing.Size(80, 17);
            this.chbS4.TabIndex = 27;
            this.chbS4.Text = "checkBox5";
            this.chbS4.UseVisualStyleBackColor = true;
            // 
            // chbS3
            // 
            this.chbS3.AutoSize = true;
            this.chbS3.Location = new System.Drawing.Point(253, 194);
            this.chbS3.Name = "chbS3";
            this.chbS3.Size = new System.Drawing.Size(80, 17);
            this.chbS3.TabIndex = 26;
            this.chbS3.Text = "checkBox6";
            this.chbS3.UseVisualStyleBackColor = true;
            // 
            // chbS2
            // 
            this.chbS2.AutoSize = true;
            this.chbS2.Location = new System.Drawing.Point(167, 194);
            this.chbS2.Name = "chbS2";
            this.chbS2.Size = new System.Drawing.Size(80, 17);
            this.chbS2.TabIndex = 25;
            this.chbS2.Text = "checkBox7";
            this.chbS2.UseVisualStyleBackColor = true;
            // 
            // chbS1
            // 
            this.chbS1.AutoSize = true;
            this.chbS1.Location = new System.Drawing.Point(81, 194);
            this.chbS1.Name = "chbS1";
            this.chbS1.Size = new System.Drawing.Size(80, 17);
            this.chbS1.TabIndex = 24;
            this.chbS1.Text = "checkBox8";
            this.chbS1.UseVisualStyleBackColor = true;
            // 
            // chbOpenSerialPort
            // 
            this.chbOpenSerialPort.AutoSize = true;
            this.chbOpenSerialPort.Checked = true;
            this.chbOpenSerialPort.CheckState = System.Windows.Forms.CheckState.Checked;
            this.chbOpenSerialPort.Location = new System.Drawing.Point(15, 49);
            this.chbOpenSerialPort.Name = "chbOpenSerialPort";
            this.chbOpenSerialPort.Size = new System.Drawing.Size(86, 17);
            this.chbOpenSerialPort.TabIndex = 36;
            this.chbOpenSerialPort.Text = "checkBox17";
            this.chbOpenSerialPort.UseVisualStyleBackColor = true;
            // 
            // chbCloseSerialPort
            // 
            this.chbCloseSerialPort.AutoSize = true;
            this.chbCloseSerialPort.Checked = true;
            this.chbCloseSerialPort.CheckState = System.Windows.Forms.CheckState.Checked;
            this.chbCloseSerialPort.Location = new System.Drawing.Point(121, 49);
            this.chbCloseSerialPort.Name = "chbCloseSerialPort";
            this.chbCloseSerialPort.Size = new System.Drawing.Size(86, 17);
            this.chbCloseSerialPort.TabIndex = 37;
            this.chbCloseSerialPort.Text = "checkBox18";
            this.chbCloseSerialPort.UseVisualStyleBackColor = true;
            // 
            // chbStart
            // 
            this.chbStart.AutoSize = true;
            this.chbStart.Location = new System.Drawing.Point(913, 46);
            this.chbStart.Name = "chbStart";
            this.chbStart.Size = new System.Drawing.Size(48, 17);
            this.chbStart.TabIndex = 38;
            this.chbStart.Text = "Start";
            this.chbStart.UseVisualStyleBackColor = true;
            // 
            // npdNSafe
            // 
            this.npdNSafe.Location = new System.Drawing.Point(15, 131);
            this.npdNSafe.Maximum = new decimal(new int[] {
            4,
            0,
            0,
            0});
            this.npdNSafe.Name = "npdNSafe";
            this.npdNSafe.Size = new System.Drawing.Size(42, 20);
            this.npdNSafe.TabIndex = 39;
            // 
            // txbPath
            // 
            this.txbPath.Location = new System.Drawing.Point(12, 395);
            this.txbPath.Name = "txbPath";
            this.txbPath.Size = new System.Drawing.Size(973, 20);
            this.txbPath.TabIndex = 41;
            this.txbPath.Text = "C:\\Users\\duyth\\Desktop\\p2x\\App\\App\\bin\\Debug\\board.txt";
            // 
            // label13
            // 
            this.label13.AutoSize = true;
            this.label13.Location = new System.Drawing.Point(12, 379);
            this.label13.Name = "label13";
            this.label13.Size = new System.Drawing.Size(28, 13);
            this.label13.TabIndex = 42;
            this.label13.Text = "path";
            // 
            // npdSetMaxSize
            // 
            this.npdSetMaxSize.Location = new System.Drawing.Point(545, 49);
            this.npdSetMaxSize.Maximum = new decimal(new int[] {
            2,
            0,
            0,
            0});
            this.npdSetMaxSize.Minimum = new decimal(new int[] {
            1,
            0,
            0,
            0});
            this.npdSetMaxSize.Name = "npdSetMaxSize";
            this.npdSetMaxSize.Size = new System.Drawing.Size(42, 20);
            this.npdSetMaxSize.TabIndex = 43;
            this.npdSetMaxSize.Value = new decimal(new int[] {
            1,
            0,
            0,
            0});
            // 
            // npdSetPowerStatus
            // 
            this.npdSetPowerStatus.Location = new System.Drawing.Point(227, 49);
            this.npdSetPowerStatus.Maximum = new decimal(new int[] {
            1,
            0,
            0,
            0});
            this.npdSetPowerStatus.Minimum = new decimal(new int[] {
            1,
            0,
            0,
            -2147483648});
            this.npdSetPowerStatus.Name = "npdSetPowerStatus";
            this.npdSetPowerStatus.Size = new System.Drawing.Size(42, 20);
            this.npdSetPowerStatus.TabIndex = 44;
            this.npdSetPowerStatus.Value = new decimal(new int[] {
            1,
            0,
            0,
            0});
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1005, 427);
            this.Controls.Add(this.npdSetPowerStatus);
            this.Controls.Add(this.npdSetMaxSize);
            this.Controls.Add(this.label13);
            this.Controls.Add(this.txbPath);
            this.Controls.Add(this.npdNSafe);
            this.Controls.Add(this.chbStart);
            this.Controls.Add(this.chbCloseSerialPort);
            this.Controls.Add(this.chbOpenSerialPort);
            this.Controls.Add(this.chbS4);
            this.Controls.Add(this.chbS3);
            this.Controls.Add(this.chbS2);
            this.Controls.Add(this.chbS1);
            this.Controls.Add(this.chbL4);
            this.Controls.Add(this.chbL3);
            this.Controls.Add(this.chbL2);
            this.Controls.Add(this.chbL1);
            this.Controls.Add(this.label10);
            this.Controls.Add(this.label9);
            this.Controls.Add(this.label7);
            this.Controls.Add(this.label6);
            this.Controls.Add(this.txtGetVersion);
            this.Controls.Add(this.label5);
            this.Controls.Add(this.txtICNo);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Name = "Form1";
            this.Text = "Form1";
            ((System.ComponentModel.ISupportInitialize)(this.npdNSafe)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.npdSetMaxSize)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.npdSetPowerStatus)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.TextBox txtICNo;
        private System.Windows.Forms.Label label6;
        private System.Windows.Forms.TextBox txtGetVersion;
        private System.Windows.Forms.Label label7;
        private System.Windows.Forms.Label label9;
        private System.Windows.Forms.Label label10;
        private System.Windows.Forms.CheckBox chbL1;
        private System.Windows.Forms.CheckBox chbL2;
        private System.Windows.Forms.CheckBox chbL3;
        private System.Windows.Forms.CheckBox chbL4;
        private System.Windows.Forms.CheckBox chbS4;
        private System.Windows.Forms.CheckBox chbS3;
        private System.Windows.Forms.CheckBox chbS2;
        private System.Windows.Forms.CheckBox chbS1;
        private System.Windows.Forms.CheckBox chbOpenSerialPort;
        private System.Windows.Forms.CheckBox chbCloseSerialPort;
        private System.Windows.Forms.CheckBox chbStart;
        private System.Windows.Forms.NumericUpDown npdNSafe;
        private System.Windows.Forms.TextBox txbPath;
        private System.Windows.Forms.Label label13;
        private System.Windows.Forms.NumericUpDown npdSetMaxSize;
        private System.Windows.Forms.NumericUpDown npdSetPowerStatus;
    }
}

