import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphqlService } from '../graphql.service';
import { Reference } from '../../types/reference.type';
import { GET_REFERENCES_QUERY } from '../../graphql/queries/get-references';
import { ReferenceCardComponent } from '../reference-card/reference-card.component';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, ReferenceCardComponent],
  templateUrl: './references.component.html',
  styleUrl: './references.component.css',
})
export class ReferencesComponent implements OnInit {
  references: Reference[] = [];

  constructor(private graphql: GraphqlService) {}

  ngOnInit(): void {
    this.graphql
      .query({ query: GET_REFERENCES_QUERY })
      .subscribe(
        (response: any) => (this.references = response.data.getReferences)
      );
  }
}
