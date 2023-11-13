import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Link } from '../../types/link.type';

@Component({
  selector: 'app-link-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './link-card.component.html',
  styleUrl: './link-card.component.css',
})
export class LinkCardComponent {
  @Input()
  link!: Link;
}
