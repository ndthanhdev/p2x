import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../../services/page-title/page-title.service';

@Component({
  selector: 'p2x-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  email: string;
  password: string;

  constructor(public _pageTitle: PageTitleService) { }

  ngOnInit() {
    this._pageTitle.title = 'Create Account';
  }
  onSubmit() {
  }
}
