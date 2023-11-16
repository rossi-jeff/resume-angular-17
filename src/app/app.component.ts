import { Component, Inject, PLATFORM_ID, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { paletteNames } from '../lib/palette';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderBarComponent, FooterBarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Jeff Rossi | Software Developer';
  theme = signal(paletteNames[0]);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  changeTheme = (name: string) => {
    this.theme.set(name);
  };

  changeDark = (dark: boolean) => {
    if (isPlatformBrowser(this.platformId)) {
      const main = document.getElementById('main');
      if (main) {
        dark ? main.classList.add('dark') : main.classList.remove('dark');
      }
    }
  };
}
