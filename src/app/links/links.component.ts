import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphqlService } from '../graphql.service';
import { Link } from '../../types/link.type';
import { GET_LINKS_QUERY } from '../../graphql/queries/get-links';
import { LinkCardComponent } from '../link-card/link-card.component';

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [CommonModule, LinkCardComponent],
  templateUrl: './links.component.html',
  styleUrl: './links.component.css',
})
export class LinksComponent implements OnInit {
  links: Link[] = [];

  constructor(private graphql: GraphqlService) {}

  ngOnInit(): void {
    this.graphql
      .query({ query: GET_LINKS_QUERY })
      .subscribe((response: any) => (this.links = response.data.getLinks));
  }
}
