import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../../services/page-title/page-title.service';

@Component({
  selector: 'p2x-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  code: string;

  constructor(public pageTitle: PageTitleService) { }

  ngOnInit() {
    this.pageTitle.title = 'Login';
  }

  onSubmit() {
  }

}
