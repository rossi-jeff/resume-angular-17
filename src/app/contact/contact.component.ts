import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphqlService } from '../graphql.service';
import { ContactStepperComponent } from '../contact-stepper/contact-stepper.component';
import { ContactFormType, NameFormType } from '../../types/contact.type';
import { SanitizeContact } from '../../lib/sanitize-contact';
import { FormatName } from '../../lib/format-name';
import { FullName } from '../../types/full-name.type';
import { ContactSentComponent } from '../contact-sent/contact-sent.component';
import { CREATE_CONTACT_MUTATION } from '../../graphql/mutations/create-contact';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ContactStepperComponent, ContactSentComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  name = signal('');
  sent = signal(false);
  constructor(private graphql: GraphqlService) {}

  sendContact = (contact: ContactFormType) => {
    const newName: FullName = {};
    if (contact.Name) {
      let key: keyof NameFormType;
      for (key in contact.Name) {
        switch (key) {
          case 'First':
            newName.First = contact['Name']['First']
              ? contact['Name']['First']
              : undefined;
            break;
          case 'Last':
            newName.Last = contact['Name']['Last']
              ? contact['Name']['Last']
              : undefined;
            break;
          case 'Middle':
            newName.Middle = contact['Name']['Middle']
              ? contact['Name']['Middle']
              : undefined;
            break;
          case 'Salutation':
            newName.Salutation = contact['Name']['Salutation']
              ? contact['Name']['Salutation']
              : undefined;
            break;
          case 'Suffix':
            newName.Suffix = contact['Name']['Suffix']
              ? contact['Name']['Suffix']
              : undefined;
            break;
        }
      }
    }
    this.name.set(FormatName(newName));
    const variables = SanitizeContact(contact);
    this.graphql
      .mutation({ mutation: CREATE_CONTACT_MUTATION, variables })
      .subscribe(() => this.sent.set(true));
  };
}
