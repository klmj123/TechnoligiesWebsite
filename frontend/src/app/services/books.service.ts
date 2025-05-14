import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  baseURL: string = "https://www.googleapis.com/books/v1/volumes"
  maxResults = 10;

  constructor(private httpClient: HttpClient) { }

  getBooks(search: string, pageNumber: number): Observable<Book[]>{
    return this.httpClient.get(`${this.baseURL}?q=${search}&startIndex=${pageNumber*this.maxResults}&maxResults=${this.maxResults}`).pipe(
      map(resp =>{
       return (resp as any).items as Book[];
      })
    )
  }

  getBookById(id: string): Observable<Book>{
    return this.httpClient.get<Book>(`${this.baseURL}/${id}`);
  }
}
