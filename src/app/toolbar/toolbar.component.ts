import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  username$: Observable<any>

  constructor(private store: Store<{ username: any }>) {
    this.username$ = this.store.pipe(select('username'))
  }

}
