import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../../services/page-title/page-title.service';

@Component({
  selector: 'p2x-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(public _pageTitle:PageTitleService) { }
  
    ngOnInit() {
      this._pageTitle.title = 'Edit Kiosk';
    }

}
