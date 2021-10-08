import { Component, OnInit } from '@angular/core';
import { Dropdown, Collapse } from 'bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

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
