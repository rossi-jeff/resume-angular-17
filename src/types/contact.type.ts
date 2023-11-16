import { Address } from './address.type';
import { FullName } from './full-name.type';

export type ContactType = {
  Name: FullName;
  Address: Address;
  Email: string;
  EmailType: string;
  Phone: string;
  PhoneType: string;
  Preferred: string;
  Subject: string;
  Message: string;
};

export type NameFormType = {
  Salutation?: string | null;
  First?: string | null;
  Middle?: string | null;
  Last?: string | null;
  Suffix?: string | null;
};

export type AdressFormType = {
  Address?: string | null;
  Suite?: string | null;
  City?: string | null;
  State?: string | null;
  Zip?: string | null;
};

export type ContactFormType = {
  Name?: NameFormType;
  Address?: AdressFormType;
  Email?: string | null;
  EmailType?: string | null;
  Phone?: string | null;
  PhoneType?: string | null;
  Preferred?: string | null;
  Subject?: string | null;
  Message?: string | null;
};

export const blankContact: ContactType = {
  Name: {
    Salutation: '',
    First: '',
    Middle: '',
    Last: '',
    Suffix: '',
  },
  Address: {
    Address: '',
    Suite: '',
    City: '',
    State: '',
    Zip: '',
  },
  Email: '',
  EmailType: 'Work',
  Phone: '',
  PhoneType: 'Work',
  Preferred: 'Email',
  Subject: '',
  Message: '',
};
