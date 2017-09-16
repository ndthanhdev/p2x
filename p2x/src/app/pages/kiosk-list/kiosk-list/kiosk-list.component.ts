import {Component, OnInit} from '@angular/core';
import {PageTitleService} from "../../../services/page-title/page-title.service";

@Component({
  selector: 'p2x-kiosk-list',
  templateUrl: './kiosk-list.component.html',
  styleUrls: ['./kiosk-list.component.scss']
})
export class KioskListComponent implements OnInit {

  constructor(public _pageTitle: PageTitleService) {
  }

  ngOnInit() {
    this._pageTitle.title = 'Kiosk List';
  }
}
