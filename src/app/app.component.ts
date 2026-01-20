import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { AppMenu } from './shared/app-menu';
import { AppNavigationService } from './shared/app-navigation.service';
import { TouchComponent } from "./touch/touch.component";
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  currentImage: string = '../assets/icons/icon-hamburger.svg';
  menuActive: boolean = false;
  title = 'designo';
  menu!: AppMenu;

  constructor(
    private router: Router,
    private navigationService: AppNavigationService,
  ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.menuActive = false;
      });
  }

  ngOnInit(): void {
    this.menu = this.navigationService.getMenu();
  }

  toggleButton() {
    this.menuActive = !this.menuActive;
    if (this.currentImage === '../assets/icons/icon-hamburger.svg') {
      this.currentImage = '../assets/icons/icon-close.svg';
    } else {
      this.currentImage = '../assets/icons/icon-hamburger.svg';
    }
  }

  closeMenu() {
    this.menuActive = false;
  }

  @HostListener('window:resize', [])
  onResize() {
    if (window.innerWidth > 540 && this.menuActive) {
      this.menuActive = false;
    }
  }
}
