import { createReducer, on } from '@ngrx/store';
import { SET_USERNAME, SET_SEARCH_REASULTS, ADD_WISHLIST, REMOVE_WISHLIST } from './book.actions';
import { userInitState, searchResultsInitState, wishlistInitState } from './book.state';
import { book } from 'src/shared/models/book.model';


const _setUsernameReducer = createReducer(userInitState
    , on(SET_USERNAME, (state, { username }) => {
        return { ...state, username: username }
    })
);

const _setSearchResultsReducer = createReducer(searchResultsInitState
    , on(SET_SEARCH_REASULTS, (state, { books }) => {
        return { ...state, searchResults: books }
    })
);

const _wishlistReducer = createReducer(wishlistInitState
    , on(ADD_WISHLIST, (state, { book }) => {
        for (let i in state.wishlist) {
            if (state.wishlist[i].id == book.id) {
                return { state, wishlist: state.wishlist }
            }
        }
        return { ...state, wishlist: [...state.wishlist || [], book] }
    })
    , on(REMOVE_WISHLIST, (state, { book }) => {
        let newWishlist: Array<book>
        newWishlist = [];
        for (let i in state.wishlist) {
            if (state.wishlist[i].id != book.id) {
                newWishlist.push(state.wishlist[i])
            }
        }
        return { ...state, wishlist: newWishlist }
    })
);


export function setUsernameReducer(state, action) {
    return _setUsernameReducer(state, action)
}

export function setSearchResultsReducer(state, action) {
    return _setSearchResultsReducer(state, action)
}

export function wishlistReducer(state, action) {
    return _wishlistReducer(state, action)
}

