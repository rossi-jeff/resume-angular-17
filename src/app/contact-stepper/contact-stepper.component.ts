import { Component, Inject, PLATFORM_ID, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ContactType, blankContact } from '../../types/contact.type';
import { FormatName } from '../../lib/format-name';
import { FormatAddress } from '../../lib/format-address';

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
  contact = signal<ContactType>(blankContact);
  name: string = '';
  address: string = '';

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
    const value = this.contactForm.value;
    const updates: ContactType = blankContact;
    if (value.Name) {
      updates.Name.First = value.Name.First || '';
      updates.Name.Last = value.Name.Last || '';
      updates.Name.Middle = value.Name.Middle || '';
      updates.Name.Salutation = value.Name.Salutation || '';
      updates.Name.Suffix = value.Name.Suffix || '';
    }
    this.name = FormatName(updates.Name);
    if (value.Address) {
      updates.Address.Address = value.Address.Address || '';
      updates.Address.City = value.Address.City || '';
      updates.Address.State = value.Address.State || '';
      updates.Address.Suite = value.Address.Suite || '';
      updates.Address.Zip = value.Address.Zip || '';
    }
    this.address = FormatAddress(updates.Address);
    updates.Email = value.Email || '';
    updates.EmailType = value.EmailType || blankContact.EmailType;
    updates.Message = value.Message || '';
    updates.Phone = value.Phone || '';
    updates.PhoneType = value.PhoneType || blankContact.PhoneType;
    updates.Preferred = value.Preferred || blankContact.Preferred;
    updates.Subject = value.Subject || '';

    this.contact.set(updates);
  };

  goToStep = (idx: number) => {
    this.current = idx;
    this.updateSteps();
  };
}
