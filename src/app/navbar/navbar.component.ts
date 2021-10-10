import { Component, OnInit } from '@angular/core';
import { Collapse } from 'bootstrap';

import { version } from '../../../node_modules/proseqviewer/package.json';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public version: string = version;

  constructor() { }

  ngOnInit(): void {
  }

  closeMenu(): void {
    const myCollapse = document.getElementById('navbarText');
    // console.log(myCollapse);
    const bsCollapse = new Collapse(myCollapse , {toggle: false});
    bsCollapse.toggle();
  }
}
