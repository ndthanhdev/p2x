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
            this.label8 = new System.Windows.Forms.Label();
            this.label9 = new System.Windows.Forms.Label();
            this.label10 = new System.Windows.Forms.Label();
            this.label11 = new System.Windows.Forms.Label();
            this.label12 = new System.Windows.Forms.Label();
            this.chbRL1 = new System.Windows.Forms.CheckBox();
            this.chbRL2 = new System.Windows.Forms.CheckBox();
            this.chbRL3 = new System.Windows.Forms.CheckBox();
            this.chbRL4 = new System.Windows.Forms.CheckBox();
            this.chbRS4 = new System.Windows.Forms.CheckBox();
            this.chbRS3 = new System.Windows.Forms.CheckBox();
            this.chbRS2 = new System.Windows.Forms.CheckBox();
            this.chbRS1 = new System.Windows.Forms.CheckBox();
            this.chbLL4 = new System.Windows.Forms.CheckBox();
            this.chbLL3 = new System.Windows.Forms.CheckBox();
            this.chbLL2 = new System.Windows.Forms.CheckBox();
            this.chbLL1 = new System.Windows.Forms.CheckBox();
            this.chbLS4 = new System.Windows.Forms.CheckBox();
            this.chbLS3 = new System.Windows.Forms.CheckBox();
            this.chbLS2 = new System.Windows.Forms.CheckBox();
            this.chbLS1 = new System.Windows.Forms.CheckBox();
            this.chbOpenSerialPort = new System.Windows.Forms.CheckBox();
            this.chbCloseSerialPort = new System.Windows.Forms.CheckBox();
            this.chbStart = new System.Windows.Forms.CheckBox();
            this.npdRight = new System.Windows.Forms.NumericUpDown();
            this.npdLeft = new System.Windows.Forms.NumericUpDown();
            this.txbPath = new System.Windows.Forms.TextBox();
            this.label13 = new System.Windows.Forms.Label();
            this.npdSetMaxSize = new System.Windows.Forms.NumericUpDown();
            this.npdSetPowerStatus = new System.Windows.Forms.NumericUpDown();
            ((System.ComponentModel.ISupportInitialize)(this.npdRight)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.npdLeft)).BeginInit();
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
            this.label7.Size = new System.Drawing.Size(38, 13);
            this.label7.TabIndex = 13;
            this.label7.Text = "nRight";
            // 
            // label8
            // 
            this.label8.AutoSize = true;
            this.label8.Location = new System.Drawing.Point(15, 222);
            this.label8.Name = "label8";
            this.label8.Size = new System.Drawing.Size(31, 13);
            this.label8.TabIndex = 15;
            this.label8.Text = "nLeft";
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
            // label11
            // 
            this.label11.AutoSize = true;
            this.label11.Location = new System.Drawing.Point(15, 311);
            this.label11.Name = "label11";
            this.label11.Size = new System.Drawing.Size(38, 13);
            this.label11.TabIndex = 19;
            this.label11.Text = "sensor";
            // 
            // label12
            // 
            this.label12.AutoSize = true;
            this.label12.Location = new System.Drawing.Point(15, 280);
            this.label12.Name = "label12";
            this.label12.Size = new System.Drawing.Size(27, 13);
            this.label12.TabIndex = 18;
            this.label12.Text = "lock";
            // 
            // chbRL1
            // 
            this.chbRL1.AutoSize = true;
            this.chbRL1.Location = new System.Drawing.Point(81, 159);
            this.chbRL1.Name = "chbRL1";
            this.chbRL1.Size = new System.Drawing.Size(80, 17);
            this.chbRL1.TabIndex = 20;
            this.chbRL1.Text = "checkBox1";
            this.chbRL1.UseVisualStyleBackColor = true;
            // 
            // chbRL2
            // 
            this.chbRL2.AutoSize = true;
            this.chbRL2.Location = new System.Drawing.Point(167, 159);
            this.chbRL2.Name = "chbRL2";
            this.chbRL2.Size = new System.Drawing.Size(80, 17);
            this.chbRL2.TabIndex = 21;
            this.chbRL2.Text = "checkBox2";
            this.chbRL2.UseVisualStyleBackColor = true;
            // 
            // chbRL3
            // 
            this.chbRL3.AutoSize = true;
            this.chbRL3.Location = new System.Drawing.Point(253, 159);
            this.chbRL3.Name = "chbRL3";
            this.chbRL3.Size = new System.Drawing.Size(80, 17);
            this.chbRL3.TabIndex = 22;
            this.chbRL3.Text = "checkBox3";
            this.chbRL3.UseVisualStyleBackColor = true;
            // 
            // chbRL4
            // 
            this.chbRL4.AutoSize = true;
            this.chbRL4.Location = new System.Drawing.Point(339, 159);
            this.chbRL4.Name = "chbRL4";
            this.chbRL4.Size = new System.Drawing.Size(80, 17);
            this.chbRL4.TabIndex = 23;
            this.chbRL4.Text = "checkBox4";
            this.chbRL4.UseVisualStyleBackColor = true;
            // 
            // chbRS4
            // 
            this.chbRS4.AutoSize = true;
            this.chbRS4.Location = new System.Drawing.Point(339, 194);
            this.chbRS4.Name = "chbRS4";
            this.chbRS4.Size = new System.Drawing.Size(80, 17);
            this.chbRS4.TabIndex = 27;
            this.chbRS4.Text = "checkBox5";
            this.chbRS4.UseVisualStyleBackColor = true;
            // 
            // chbRS3
            // 
            this.chbRS3.AutoSize = true;
            this.chbRS3.Location = new System.Drawing.Point(253, 194);
            this.chbRS3.Name = "chbRS3";
            this.chbRS3.Size = new System.Drawing.Size(80, 17);
            this.chbRS3.TabIndex = 26;
            this.chbRS3.Text = "checkBox6";
            this.chbRS3.UseVisualStyleBackColor = true;
            // 
            // chbRS2
            // 
            this.chbRS2.AutoSize = true;
            this.chbRS2.Location = new System.Drawing.Point(167, 194);
            this.chbRS2.Name = "chbRS2";
            this.chbRS2.Size = new System.Drawing.Size(80, 17);
            this.chbRS2.TabIndex = 25;
            this.chbRS2.Text = "checkBox7";
            this.chbRS2.UseVisualStyleBackColor = true;
            // 
            // chbRS1
            // 
            this.chbRS1.AutoSize = true;
            this.chbRS1.Location = new System.Drawing.Point(81, 194);
            this.chbRS1.Name = "chbRS1";
            this.chbRS1.Size = new System.Drawing.Size(80, 17);
            this.chbRS1.TabIndex = 24;
            this.chbRS1.Text = "checkBox8";
            this.chbRS1.UseVisualStyleBackColor = true;
            // 
            // chbLL4
            // 
            this.chbLL4.AutoSize = true;
            this.chbLL4.Location = new System.Drawing.Point(339, 276);
            this.chbLL4.Name = "chbLL4";
            this.chbLL4.Size = new System.Drawing.Size(80, 17);
            this.chbLL4.TabIndex = 31;
            this.chbLL4.Text = "checkBox9";
            this.chbLL4.UseVisualStyleBackColor = true;
            // 
            // chbLL3
            // 
            this.chbLL3.AutoSize = true;
            this.chbLL3.Location = new System.Drawing.Point(253, 276);
            this.chbLL3.Name = "chbLL3";
            this.chbLL3.Size = new System.Drawing.Size(86, 17);
            this.chbLL3.TabIndex = 30;
            this.chbLL3.Text = "checkBox10";
            this.chbLL3.UseVisualStyleBackColor = true;
            // 
            // chbLL2
            // 
            this.chbLL2.AutoSize = true;
            this.chbLL2.Location = new System.Drawing.Point(167, 276);
            this.chbLL2.Name = "chbLL2";
            this.chbLL2.Size = new System.Drawing.Size(86, 17);
            this.chbLL2.TabIndex = 29;
            this.chbLL2.Text = "checkBox11";
            this.chbLL2.UseVisualStyleBackColor = true;
            // 
            // chbLL1
            // 
            this.chbLL1.AutoSize = true;
            this.chbLL1.Location = new System.Drawing.Point(81, 276);
            this.chbLL1.Name = "chbLL1";
            this.chbLL1.Size = new System.Drawing.Size(86, 17);
            this.chbLL1.TabIndex = 28;
            this.chbLL1.Text = "checkBox12";
            this.chbLL1.UseVisualStyleBackColor = true;
            // 
            // chbLS4
            // 
            this.chbLS4.AutoSize = true;
            this.chbLS4.Location = new System.Drawing.Point(339, 311);
            this.chbLS4.Name = "chbLS4";
            this.chbLS4.Size = new System.Drawing.Size(86, 17);
            this.chbLS4.TabIndex = 35;
            this.chbLS4.Text = "checkBox13";
            this.chbLS4.UseVisualStyleBackColor = true;
            // 
            // chbLS3
            // 
            this.chbLS3.AutoSize = true;
            this.chbLS3.Location = new System.Drawing.Point(253, 311);
            this.chbLS3.Name = "chbLS3";
            this.chbLS3.Size = new System.Drawing.Size(86, 17);
            this.chbLS3.TabIndex = 34;
            this.chbLS3.Text = "checkBox14";
            this.chbLS3.UseVisualStyleBackColor = true;
            // 
            // chbLS2
            // 
            this.chbLS2.AutoSize = true;
            this.chbLS2.Location = new System.Drawing.Point(167, 311);
            this.chbLS2.Name = "chbLS2";
            this.chbLS2.Size = new System.Drawing.Size(86, 17);
            this.chbLS2.TabIndex = 33;
            this.chbLS2.Text = "checkBox15";
            this.chbLS2.UseVisualStyleBackColor = true;
            // 
            // chbLS1
            // 
            this.chbLS1.AutoSize = true;
            this.chbLS1.Location = new System.Drawing.Point(81, 311);
            this.chbLS1.Name = "chbLS1";
            this.chbLS1.Size = new System.Drawing.Size(86, 17);
            this.chbLS1.TabIndex = 32;
            this.chbLS1.Text = "checkBox16";
            this.chbLS1.UseVisualStyleBackColor = true;
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
            // npdRight
            // 
            this.npdRight.Location = new System.Drawing.Point(15, 131);
            this.npdRight.Maximum = new decimal(new int[] {
            4,
            0,
            0,
            0});
            this.npdRight.Name = "npdRight";
            this.npdRight.Size = new System.Drawing.Size(42, 20);
            this.npdRight.TabIndex = 39;
            // 
            // npdLeft
            // 
            this.npdLeft.Location = new System.Drawing.Point(15, 238);
            this.npdLeft.Maximum = new decimal(new int[] {
            4,
            0,
            0,
            0});
            this.npdLeft.Name = "npdLeft";
            this.npdLeft.Size = new System.Drawing.Size(42, 20);
            this.npdLeft.TabIndex = 40;
            // 
            // txbPath
            // 
            this.txbPath.Location = new System.Drawing.Point(12, 395);
            this.txbPath.Name = "txbPath";
            this.txbPath.Size = new System.Drawing.Size(973, 20);
            this.txbPath.TabIndex = 41;
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
            this.Controls.Add(this.npdLeft);
            this.Controls.Add(this.npdRight);
            this.Controls.Add(this.chbStart);
            this.Controls.Add(this.chbCloseSerialPort);
            this.Controls.Add(this.chbOpenSerialPort);
            this.Controls.Add(this.chbLS4);
            this.Controls.Add(this.chbLS3);
            this.Controls.Add(this.chbLS2);
            this.Controls.Add(this.chbLS1);
            this.Controls.Add(this.chbLL4);
            this.Controls.Add(this.chbLL3);
            this.Controls.Add(this.chbLL2);
            this.Controls.Add(this.chbLL1);
            this.Controls.Add(this.chbRS4);
            this.Controls.Add(this.chbRS3);
            this.Controls.Add(this.chbRS2);
            this.Controls.Add(this.chbRS1);
            this.Controls.Add(this.chbRL4);
            this.Controls.Add(this.chbRL3);
            this.Controls.Add(this.chbRL2);
            this.Controls.Add(this.chbRL1);
            this.Controls.Add(this.label11);
            this.Controls.Add(this.label12);
            this.Controls.Add(this.label10);
            this.Controls.Add(this.label9);
            this.Controls.Add(this.label8);
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
            ((System.ComponentModel.ISupportInitialize)(this.npdRight)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.npdLeft)).EndInit();
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
        private System.Windows.Forms.Label label8;
        private System.Windows.Forms.Label label9;
        private System.Windows.Forms.Label label10;
        private System.Windows.Forms.Label label11;
        private System.Windows.Forms.Label label12;
        private System.Windows.Forms.CheckBox chbRL1;
        private System.Windows.Forms.CheckBox chbRL2;
        private System.Windows.Forms.CheckBox chbRL3;
        private System.Windows.Forms.CheckBox chbRL4;
        private System.Windows.Forms.CheckBox chbRS4;
        private System.Windows.Forms.CheckBox chbRS3;
        private System.Windows.Forms.CheckBox chbRS2;
        private System.Windows.Forms.CheckBox chbRS1;
        private System.Windows.Forms.CheckBox chbLL4;
        private System.Windows.Forms.CheckBox chbLL3;
        private System.Windows.Forms.CheckBox chbLL2;
        private System.Windows.Forms.CheckBox chbLL1;
        private System.Windows.Forms.CheckBox chbLS4;
        private System.Windows.Forms.CheckBox chbLS3;
        private System.Windows.Forms.CheckBox chbLS2;
        private System.Windows.Forms.CheckBox chbLS1;
        private System.Windows.Forms.CheckBox chbOpenSerialPort;
        private System.Windows.Forms.CheckBox chbCloseSerialPort;
        private System.Windows.Forms.CheckBox chbStart;
        private System.Windows.Forms.NumericUpDown npdRight;
        private System.Windows.Forms.NumericUpDown npdLeft;
        private System.Windows.Forms.TextBox txbPath;
        private System.Windows.Forms.Label label13;
        private System.Windows.Forms.NumericUpDown npdSetMaxSize;
        private System.Windows.Forms.NumericUpDown npdSetPowerStatus;
    }
}

