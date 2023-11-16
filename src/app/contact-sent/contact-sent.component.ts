import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-sent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-sent.component.html',
  styleUrl: './contact-sent.component.css',
})
export class ContactSentComponent {
  @Input() name!: string;
}
