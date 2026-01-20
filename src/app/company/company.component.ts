import { Component } from '@angular/core';
import { TouchComponent } from "../touch/touch.component";
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [TouchComponent, RouterModule],
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss'
})
export class CompanyComponent {

  constructor(
    private router: Router
  ) {}

  goToLocation(){
    this.router.navigate(['/locations']);
  }
}
