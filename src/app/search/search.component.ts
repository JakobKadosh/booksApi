import { Component, OnInit } from '@angular/core';
import { BookSearchService } from 'src/shared/services/book-search.service';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { book } from 'src/shared/models/book.model';
import { SET_SEARCH_REASULTS, ADD_WISHLIST } from '../state/book.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  userName: string;
  isLaoding: boolean;
  isRespond: boolean;
  books: Array<book>;
  searchBooksCtrl = new FormControl('', Validators.pattern("[a-zA-Z ]*"))
  searchResults$: Observable<any>;
  username$: Observable<any>;
  wishlist$: Observable<any>;

  constructor(private store: Store<{ username: any, searchResults: any }>, private service: BookSearchService) {
    this.username$ = this.store.pipe(select('username'));
    this.searchResults$ = this.store.pipe(select('searchResults'));
  }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.searchBooksCtrl.hasError('required') ? 'You must enter a value' :
      this.searchBooksCtrl.hasError('pattern') ? 'Not a valid book name' : '';
  }

  submit(bookName: string): void {
    this.isLaoding = true;
    this.service.searchBook(bookName)
      .subscribe(
        res => {
          let searchResults = []
          for (let i = 0; i < res.items.length; i++) {
            if (!res.items[i] ||!res.items[i].volumeInfo) {
              continue;
            }
            searchResults.push({
              id: res.items[i].id,
              title: res.items[i].volumeInfo.title,
              description: (res.items[i].volumeInfo.description || "").substr(0,60),
              imageUrl: res.items[i].volumeInfo.imageLinks.smallThumbnail,
              publisher: res.items[i].volumeInfo.publisher,
              publishedDate: res.items[i].volumeInfo.publishedDate,
              pageCount: res.items[i].volumeInfo.pageCount,
              authors: res.items[i].volumeInfo.authors ? res.items[i].volumeInfo.authors : []
            });
          }
          this.isRespond = true;
          this.isLaoding = false;
          this.store.dispatch(SET_SEARCH_REASULTS({ books: searchResults }))
        },
        err => { console.error(err) }
      );
  }

  addToWishlist(book: book): void {
    this.store.dispatch(ADD_WISHLIST({ book }))
  }
}
