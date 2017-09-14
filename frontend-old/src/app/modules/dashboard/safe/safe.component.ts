import { Component, OnInit } from '@angular/core';

import { MdIconRegistry } from "@angular/material";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-safe',
  templateUrl: './safe.component.html',
  styleUrls: ['./safe.component.css']
})
export class SafeComponent implements OnInit {

  constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon("lock", sanitizer.bypassSecurityTrustResourceUrl("assets/vectors/padlock.svg"));
  }

  ngOnInit() {
  }

}
