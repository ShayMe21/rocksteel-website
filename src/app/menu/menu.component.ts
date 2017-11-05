import { Component, OnInit, Directive, HostListener, HostBinding } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isIn: boolean = false;   // store state of bootstrap navbar
  constructor() { }

  ngOnInit() {}

  /**
   * Toggle state of bootstrap navbar to expand/collapse
   */
  toggleState() {
    let bool = this.isIn;
    this.isIn = bool === false ? true : false;
  }

  /**
   * Navigate to a section of the page
   * @param location a valid CSS ID selector; i.e. it should be preceded with '#'
   */
  navigateTo(location: string): void {
    window.location.hash = location;
    setTimeout(() => {
      document.querySelector(location).parentElement.scrollIntoView();
    });

    
  }


}
