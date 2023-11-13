import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { School } from '../../types/school.type';
import { FormatAddress } from '../../lib/format-address';

@Component({
  selector: 'app-school-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './school-card.component.html',
  styleUrl: './school-card.component.css',
})
export class SchoolCardComponent implements OnInit {
  @Input()
  school!: School;
  address: string = '';

  ngOnInit(): void {
    if (this.school.Address) this.address = FormatAddress(this.school.Address);
  }
}
