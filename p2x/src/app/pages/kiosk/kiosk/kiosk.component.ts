import { Component, OnInit } from '@angular/core';
import {PageTitleService} from "../../../services/page-title/page-title.service";

@Component({
  selector: 'p2x-kiosk',
  templateUrl: './kiosk.component.html',
  styleUrls: ['./kiosk.component.scss']
})
export class KioskComponent implements OnInit {

  constructor(public _pageTitle: PageTitleService) { }

  ngOnInit() {
    this._pageTitle.title = "Safe";
  }

}