import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookSearchService {
  apiKey = "AIzaSyCgiFsWZifrs5ty_RqM-hCp5AVo8pFPLgo";
  
  constructor(private http: HttpClient) { }

  searchBook(bookName): Observable<any> {
    return this.http.get<any>(`https://www.googleapis.com/books/v1/volumes?q=${bookName}&key=${this.apiKey}`);
  }
}
