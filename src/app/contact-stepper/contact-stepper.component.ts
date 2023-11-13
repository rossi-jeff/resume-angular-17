import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ContactType, blankContact } from '../../types/contact.type';

@Component({
  selector: 'app-contact-stepper',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-stepper.component.html',
  styleUrl: './contact-stepper.component.css',
})
export class ContactStepperComponent {
  steps: string[] = ['Name', 'Address', 'Contact', 'Message', 'Confirmation'];
  current: number = 0;
  contactForm = new FormGroup({
    Name: new FormGroup({
      Salutation: new FormControl(''),
      First: new FormControl(''),
      Middle: new FormControl(''),
      Last: new FormControl(''),
      Suffix: new FormControl(''),
    }),
    Address: new FormGroup({
      Address: new FormControl(''),
      Suite: new FormControl(''),
      City: new FormControl(''),
      State: new FormControl(''),
      Zip: new FormControl(''),
    }),
    Email: new FormControl(''),
    EmailType: new FormControl('Work'),
    Phone: new FormControl(''),
    PhoneType: new FormControl('Work'),
    Preferred: new FormControl('Email'),
    Subject: new FormControl(''),
    Message: new FormControl(''),
  });
  contact: ContactType = blankContact;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  nextStep = () => {
    if (this.current + 1 >= this.steps.length) return;
    this.current++;
    this.updateSteps();
  };

  previousStep = () => {
    if (this.current - 1 < 0) return;
    this.current--;
    this.updateSteps();
  };

  updateSteps = () => {
    if (isPlatformBrowser(this.platformId)) {
      for (let i = 0; i < this.steps.length; i++) {
        const btn = document.getElementById(
          `step-button-${i}`
        ) as HTMLButtonElement;
        const step = document.getElementById(`step-${i}`);
        if (i <= this.current) {
          btn.disabled = false;
        } else {
          btn.disabled = true;
        }
        if (i == this.current) {
          btn.classList.add('current');
          if (step) step.classList.add('current');
        } else {
          btn.classList.remove('current');
          if (step) step.classList.remove('current');
        }
      }
      this.updateContact();
    }
  };

  updateContact = () => {
    let value = this.contactForm.value;
    console.log(value);
    if (value.Name) {
      this.contact.Name.First = value.Name.First || '';
      this.contact.Name.Last = value.Name.Last || '';
      this.contact.Name.Middle = value.Name.Middle || '';
      this.contact.Name.Salutation = value.Name.Salutation || '';
      this.contact.Name.Suffix = value.Name.Suffix || '';
    }
    if (value.Address) {
      this.contact.Address.Address = value.Address.Address || '';
      this.contact.Address.City = value.Address.City || '';
      this.contact.Address.State = value.Address.State || '';
      this.contact.Address.Suite = value.Address.Suite || '';
      this.contact.Address.Zip = value.Address.Zip || '';
    }
    this.contact.Email = value.Email || '';
    this.contact.EmailType = value.EmailType || blankContact.EmailType;
    this.contact.Message = value.Message || '';
    this.contact.Phone = value.Phone || '';
    this.contact.PhoneType = value.PhoneType || blankContact.PhoneType;
    this.contact.Preferred = value.Preferred || blankContact.Preferred;
    this.contact.Subject = value.Subject || '';
    // console.log(this.contact);
  };

  goToStep = (idx: number) => {
    this.current = idx;
    this.updateSteps();
  };
}
