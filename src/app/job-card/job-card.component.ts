import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Job } from '../../types/job.type';
import { FormatAddress } from '../../lib/format-address';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.css',
})
export class JobCardComponent implements OnInit {
  @Input()
  job!: Job;
  address: string = '';

  ngOnInit(): void {
    if (this.job.Address) this.address = FormatAddress(this.job.Address);
  }
}
