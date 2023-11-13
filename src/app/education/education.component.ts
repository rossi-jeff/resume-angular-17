import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphqlService } from '../graphql.service';
import { School } from '../../types/school.type';
import { GET_SCHOOLS_QUERY } from '../../graphql/queries/get-schools';
import { SchoolCardComponent } from '../school-card/school-card.component';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, SchoolCardComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent implements OnInit {
  schools: School[] = [];

  constructor(private graphql: GraphqlService) {}

  ngOnInit(): void {
    this.graphql
      .query({ query: GET_SCHOOLS_QUERY })
      .subscribe((response: any) => (this.schools = response.data.getSchools));
  }
}
