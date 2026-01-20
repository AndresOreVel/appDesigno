import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TouchComponent } from "../touch/touch.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TouchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(
    private router: Router
  ){}

  goToDesign(type: string) {
    this.router.navigate(['/design', type]);
  }

  goToCompany(){
    this.router.navigate(['/company']);
  }
}
