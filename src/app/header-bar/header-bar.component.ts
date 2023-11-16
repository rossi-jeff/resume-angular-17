import { Component, EventEmitter, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { paletteNames } from '../../lib/palette';

@Component({
  selector: 'app-header-bar',
  standalone: true,
  imports: [CommonModule, NavBarComponent],
  templateUrl: './header-bar.component.html',
  styleUrl: './header-bar.component.css',
})
export class HeaderBarComponent {
  @Output() changeTheme = new EventEmitter<string>();
  @Output() changeDark = new EventEmitter<boolean>();

  themes: string[] = paletteNames;
  theme = signal(paletteNames[0]);
  dark = signal(false);

  setTheme = (ev: any) => {
    const name = paletteNames[ev.target.selectedIndex];
    this.changeTheme.emit(name);
    this.theme.set(name);
  };

  toggleDark = () => {
    this.changeDark.emit(!this.dark());
    this.dark.update((val) => !val);
  };
}
