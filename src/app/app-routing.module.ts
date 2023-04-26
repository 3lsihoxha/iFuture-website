import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { NavigationEnd } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'calendar', component: CalendarComponent }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
