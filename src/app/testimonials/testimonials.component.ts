import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphqlService } from '../graphql.service';
import { Comment } from '../../types/comment.type';
import { GET_COMMENTS_QUERY } from '../../graphql/queries/get-comments';
import { CommentCardComponent } from '../comment-card/comment-card.component';
import { LoadingIndicatorComponent } from '../loading-indicator/loading-indicator.component';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, CommentCardComponent, LoadingIndicatorComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})
export class TestimonialsComponent implements OnInit {
  comments: Comment[] = [];

  constructor(private graphql: GraphqlService) {}

  ngOnInit(): void {
    this.graphql
      .query({ query: GET_COMMENTS_QUERY })
      .subscribe(
        (response: any) => (this.comments = response.data.getComments)
      );
  }
}
