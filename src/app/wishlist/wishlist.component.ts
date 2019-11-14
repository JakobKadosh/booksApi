import { Component } from '@angular/core';
import { BookSearchService } from 'src/shared/services/book-search.service';
import { book } from 'src/shared/models/book.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { REMOVE_WISHLIST } from '../state/book.actions';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {
  bookName:string;
  wishlistBooks:Array<book>
  username:string;
  wishlist$:Observable<any>

  constructor(private store:Store<{wishlist:any}>,private service:BookSearchService) { 
    this.wishlist$=this.store.pipe(select("wishlist"));
  }

  removeFromWishlist(book:book){
    this.store.dispatch(REMOVE_WISHLIST({book}))
  }
}
