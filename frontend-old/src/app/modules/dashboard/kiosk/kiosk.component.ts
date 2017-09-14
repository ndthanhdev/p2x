import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-kiosk',
  templateUrl: './kiosk.component.html',
  styleUrls: ['./kiosk.component.css']
})
export class KioskComponent implements OnInit {

  @Input() kiosk: string;

  constructor() {
  }

  ngOnInit() {
  }

}
