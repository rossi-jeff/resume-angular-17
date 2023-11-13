import {
  Component,
  Inject,
  Input,
  OnInit,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Reference } from '../../types/reference.type';
import { FormatName } from '../../lib/format-name';
import { FormatAddress } from '../../lib/format-address';

@Component({
  selector: 'app-reference-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reference-card.component.html',
  styleUrl: './reference-card.component.css',
})
export class ReferenceCardComponent implements OnInit {
  @Input()
  reference!: Reference;
  name: string = '';
  address: string = '';
  phone: string = '';
  email: string = '';
  comment: string = '';
  showContact = signal(false);
  showComment = signal(false);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  getPhones = () => {
    const phones: string[] = [];
    if (this.reference.Phones) {
      for (let i = 0; i < this.reference.Phones.length; i++) {
        const p = this.reference.Phones[i];
        if (p.Number) phones.push(p.Number);
      }
    }
    return phones.length ? phones.join(', ') : '';
  };

  getEmails = () => {
    const emails: string[] = [];
    if (this.reference.Emails) {
      for (let i = 0; i < this.reference.Emails.length; i++) {
        const e = this.reference.Emails[i];
        if (e.Address) emails.push(e.Address);
      }
    }
    return emails.length ? emails.join(', ') : '';
  };

  getComment = () => {
    return this.reference.Comments &&
      this.reference.Comments.length &&
      this.reference.Comments[0].Message
      ? this.reference.Comments[0].Message
      : '';
  };

  toggleContact = () => {
    if (isPlatformBrowser(this.platformId)) {
      const container = document.getElementById(
        `reference-contact-${this.reference.Id}`
      );
      if (this.showContact()) {
        if (container) container.classList.remove('visible');
      } else {
        if (container) container.classList.add('visible');
      }
      this.showContact.update((value) => !value);
    }
  };

  toggleComment = () => {
    if (isPlatformBrowser(this.platformId)) {
      const container = document.getElementById(
        `reference-comment-${this.reference.Id}`
      );
      if (this.showComment()) {
        if (container) container.classList.remove('visible');
      } else {
        if (container) container.classList.add('visible');
      }
      this.showComment.update((value) => !value);
    }
  };

  ngOnInit(): void {
    this.phone = this.getPhones();
    this.email = this.getEmails();
    this.comment = this.getComment();
    if (this.reference.Name) this.name = FormatName(this.reference.Name);
    if (this.reference.Address)
      this.address = FormatAddress(this.reference.Address);
  }
}
