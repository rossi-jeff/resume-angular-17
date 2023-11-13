import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { EmploymentComponent } from './employment/employment.component';
import { ContactComponent } from './contact/contact.component';
import { ReferencesComponent } from './references/references.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { LinksComponent } from './links/links.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'education', component: EducationComponent },
  { path: 'employment', component: EmploymentComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'references', component: ReferencesComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'links', component: LinksComponent },
];
