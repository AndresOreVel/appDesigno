import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  name = '';
  email = '';
  phone = null;
  message = '';

  constructor(
    private router: Router
  ){}

  goToLocation(){
    this.router.navigate(['/locations']);
  }

  isEmailValid():boolean{
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(this.email.toLocaleLowerCase().trim());
  }

  onSubmit(form: any){
    form.reset();

    this.name = '';
    this.email = '';
    this.phone = null;
    this.message = '';
  }
}
