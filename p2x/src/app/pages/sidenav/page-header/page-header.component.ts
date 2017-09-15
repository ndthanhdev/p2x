import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PageTitleService } from '../../../services/page-title/page-title.service';

@Component({
  selector: 'p2x-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor(public _pageTitle: PageTitleService) { }

  @Output() toggleSidenav = new EventEmitter<void>();

  getTitle() {
    return this._pageTitle.title;
  }

}
