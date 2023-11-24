import { Injectable } from '@angular/core';
import { DataService } from './data-service.service';
import { Publication } from '../models/publication';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { catchError, Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicationService extends DataService<Publication> {

  constructor(http: HttpClient) {
    super(http);
    this.basePath = 'http://localhost:8000/publications';
  }

  getAllPublications(): Observable<Publication[]> {
    return this.http.get<Publication[]>(this.basePath);
  }  

  getPublicationById(publicationId: number): Observable<any> {
    const url = `${this.basePath}/${publicationId}`;
    return this.http.get(url);
  }

  getPublicationsByUserId(userId: number): Observable<Publication[]> {
    return this.http
      .get<Publication[]>(
        `${this.basePath}?userId=${userId}`,
        this.httpOptions
      )
      .pipe(retry(2), catchError(this.handleError));
  }

  createPublication(userId: string, productId: string, publication: Publication): Observable<Publication> {
    const url = `${this.basePath}?userId=${userId}&productId=${productId}`;
  
    return this.http.post<Publication>(url, publication, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }
}
