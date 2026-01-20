import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-touch',
  standalone: true,
  imports: [],
  templateUrl: './touch.component.html',
  styleUrl: './touch.component.scss'
})
export class TouchComponent {

  constructor(
    private router: Router,
  ){}

  goToContact(){
    this.router.navigate(['/contact']);
  }
}
