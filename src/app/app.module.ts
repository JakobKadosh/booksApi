import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SearchComponent } from './search/search.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
  MatCardModule,
  MatToolbarModule,
  } from "@angular/material";
import { StoreModule } from '@ngrx/store';
import { setUsernameReducer, setSearchResultsReducer, wishlistReducer } from './state/book.reducer';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ToolbarComponent } from './toolbar/toolbar.component';


const routes: Routes = [
  { path: "",redirectTo:"welcome", pathMatch:"full"},
  { path: "welcome", component: WelcomeComponent},
  { path: "search", component: SearchComponent},
  { path: "wishlist", component: WishlistComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SearchComponent,
    WishlistComponent,
    ToolbarComponent
  ],
  imports: [
    FormsModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatToolbarModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({username:setUsernameReducer, searchResults:setSearchResultsReducer,
       wishlist:wishlistReducer}),
    BrowserAnimationsModule,
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
