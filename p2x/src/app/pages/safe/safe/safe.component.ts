import { Component, OnInit } from '@angular/core';
import {PageTitleService} from "../../../services/page-title/page-title.service";

@Component({
  selector: 'p2x-safe',
  templateUrl: './safe.component.html',
  styleUrls: ['./safe.component.scss']
})
export class SafeComponent implements OnInit {

  constructor(public _pageTitle: PageTitleService) { }

  ngOnInit() {
    this._pageTitle.title = 'Safe X';
  }

}
