import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { EmploymentComponent } from './employment/employment.component';
import { ContactComponent } from './contact/contact.component';
import { ReferencesComponent } from './references/references.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { LinksComponent } from './links/links.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Jeff Rossi | Software Developer',
  },
  {
    path: 'education',
    component: EducationComponent,
    title: 'Jeff Rossi | Education',
  },
  {
    path: 'employment',
    component: EmploymentComponent,
    title: 'Jeff Rossi | Employment',
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Jeff Rossi | Contact',
  },
  {
    path: 'references',
    component: ReferencesComponent,
    title: 'Jeff Rossi | References',
  },
  {
    path: 'testimonials',
    component: TestimonialsComponent,
    title: 'Jeff Rossi | Testimonials',
  },
  { path: 'links', component: LinksComponent, title: 'Jeff Rossi | Links' },
];
