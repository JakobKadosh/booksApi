import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { BookSearchService } from 'src/shared/services/book-search.service';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { SET_USERNAME } from '../state/book.actions';
import { user } from 'src/shared/models/user.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})

export class WelcomeComponent {
  username$: Observable<any>;
  user:user={username:""};
  
  formControl = new FormControl('', Validators.pattern("[a-zA-Z ]*"))
  constructor(private store: Store<{ username: any }>, private router: Router, private service: BookSearchService) {
    this.username$ = this.store.pipe(select('username'))
  }

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'You must enter a value' :
      this.formControl.hasError('pattern') ? 'Not a valid userName' : '';
  } 

  submit(): void {
    this.store.dispatch(SET_USERNAME({username:this.formControl.value}));
    this.router.navigate(['search'])
  }
}
