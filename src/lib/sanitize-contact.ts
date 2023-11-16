import {
  AdressFormType,
  ContactFormType,
  NameFormType,
} from '../types/contact.type';

export const SanitizeContact = (contact: ContactFormType) => {
  const sanitized: ContactFormType = {};
  let key: keyof ContactFormType;
  for (key in contact) {
    if (key == 'Name' && contact['Name']) {
      let key2: keyof NameFormType;
      sanitized['Name'] = {};
      for (key2 in contact['Name']) {
        if (contact['Name'][key2])
          sanitized['Name'][key2] = contact['Name'][key2];
      }
    } else if (key == 'Address' && contact['Address']) {
      let key3: keyof AdressFormType;
      sanitized['Address'] = {};
      for (key3 in contact['Address']) {
        if (contact['Address'][key3])
          sanitized['Address'][key3] = contact['Address'][key3];
      }
    } else if (key && contact[key]) {
      switch (key) {
        case 'Email':
          sanitized['Email'] = contact['Email'];
          break;
        case 'EmailType':
          sanitized['EmailType'] = contact['EmailType'];
          break;
        case 'Phone':
          sanitized['Phone'] = contact['Phone'];
          break;
        case 'PhoneType':
          sanitized['PhoneType'] = contact['PhoneType'];
          break;
        case 'Preferred':
          sanitized['Preferred'] = contact['Preferred'];
          break;
        case 'Subject':
          sanitized['Subject'] = contact['Subject'];
          break;
        case 'Message':
          sanitized['Message'] = contact['Message'];
          break;
      }
    }
  }
  return sanitized;
};
