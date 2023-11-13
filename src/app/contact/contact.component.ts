import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphqlService } from '../graphql.service';
import { ContactStepperComponent } from '../contact-stepper/contact-stepper.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ContactStepperComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  constructor(private graphql: GraphqlService) {}
}
