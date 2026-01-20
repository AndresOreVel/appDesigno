import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }

  private allLinks = [
    { label: 'Our Company', route: '/company' },
    { label: 'About', route: '/about' },
    { label: 'Locations', route: '/locations' },
    { label: 'Contact', route: '/contact' }
  ];

  getHeaderLinks(){
    return this.allLinks.filter(link => link.label !== 'Locations');
  }

  getFooterLinks(){
    return this.allLinks.filter(link => link.label !== 'About');
  }
}
