import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type NavLink = {
  name: string;
  path: string;
};

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  links: NavLink[] = [
    { name: 'Home', path: '/' },
    { name: 'Education', path: '/education' },
    { name: 'Employment', path: '/employment' },
    { name: 'Contact', path: '/contact' },
    { name: 'References', path: '/references' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Links', path: '/links' },
  ];
}
