import { Component, OnInit, Directive, HostListener, HostBinding } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isIn : boolean = false;   // store state of bootstrap navbar
  constructor() { }

  ngOnInit() {
  }

  /**
   * Toggle state of bootstrap navbar to expand/collapse
   */
  toggleState() {
    let bool = this.isIn;
    this.isIn = bool === false ? true : false;
  }


}
