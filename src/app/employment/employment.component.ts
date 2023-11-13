import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphqlService } from '../graphql.service';
import { Job } from '../../types/job.type';
import { GET_JOBS_QUERY } from '../../graphql/queries/get-jobs';
import { JobCardComponent } from '../job-card/job-card.component';

@Component({
  selector: 'app-employment',
  standalone: true,
  imports: [CommonModule, JobCardComponent],
  templateUrl: './employment.component.html',
  styleUrl: './employment.component.css',
})
export class EmploymentComponent implements OnInit {
  jobs: Job[] = [];

  constructor(private graphql: GraphqlService) {}

  ngOnInit(): void {
    this.graphql
      .query({ query: GET_JOBS_QUERY })
      .subscribe((response: any) => (this.jobs = response.data.getJobs));
  }
}
