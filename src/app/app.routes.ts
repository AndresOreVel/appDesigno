import { Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { ContactComponent } from './contact/contact.component';
import { LocationsComponent } from './locations/locations.component';
import { HomeComponent } from './home/home.component';
import { DesignComponent } from './design/design.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'design/:type', component: DesignComponent},
    { path: 'company', component: CompanyComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'locations', component: LocationsComponent },
    { path: '**', redirectTo: 'home'}
];
