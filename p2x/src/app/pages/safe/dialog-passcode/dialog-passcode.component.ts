import { Component, OnInit, Inject } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';

@Component({
  selector: 'p2x-dialog-passcode',
  templateUrl: './dialog-passcode.component.html',
  styleUrls: ['./dialog-passcode.component.scss']
})
export class DialogPasscodeComponent implements OnInit {

  constructor(
    @Inject(MD_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
