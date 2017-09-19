import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../../services/page-title/page-title.service';

@Component({
  selector: 'p2x-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(public _pageTitle:PageTitleService) { }

  ngOnInit() {
    this._pageTitle.title = 'Create Kiosk';
  }

}
