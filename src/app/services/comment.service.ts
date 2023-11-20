import { Injectable } from '@angular/core';
import {DataService} from "./data-service.service";
import {Comment} from "../models/comment";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommentService extends DataService<Comment>{
  private createdCommentId: string | null = null;
  constructor(http: HttpClient) {
    super(http);
    this.basePath = 'http://localhost:8000/comments';
  }

  createComment(userId: string, publicationId: string,comment: Comment): Observable<Comment> {

    const url = `${this.basePath}?userId=${userId}&publicationId=${publicationId}`;

    return this.http.post<Comment>(url, comment, this.httpOptions)
        .pipe(
            retry(2),
            catchError(this.handleError)
        );
  }

  getCommentsByPublicationId(publicationId: string): Observable<Comment[]> {
    const url = `${this.basePath}/publication/${publicationId}`;
    return this.http.get<Comment[]>(url, this.httpOptions)
        .pipe(
            retry(2),
            catchError(this.handleError)
        );
  }

}
