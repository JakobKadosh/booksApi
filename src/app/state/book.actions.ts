import { createAction, props } from '@ngrx/store';

export const SET_USERNAME = createAction('[WelcomeComponent] SET_USERNAME', props<{ username: string }>());
export const SET_SEARCH_REASULTS = createAction('[SearchComponent] SET_SEARCH_REASULTS', props<{ books: any }>());
export const ADD_WISHLIST = createAction('[SearchComponent] ADD_WISHLIST', props<{ book: any }>());
export const REMOVE_WISHLIST = createAction('[WishlistComponent] REMOVE_WISHLIST', props<{ book: any }>());