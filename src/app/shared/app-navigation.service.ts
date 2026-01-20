import { Injectable } from '@angular/core';
import { AppMenu } from './app-menu';
import { AppMenuItem } from './app-menu-item';

@Injectable({
  providedIn: 'root'
})
export class AppNavigationService {

  constructor() { }

  getMenu(): AppMenu{
    return new AppMenu('MainMenu', [
      new AppMenuItem('Our Company', '', '', '/company'),
      new AppMenuItem('Locations', '', '', '/locations'),
      new AppMenuItem('Contact', '', '', '/contact'),
    ]);
  }
}
