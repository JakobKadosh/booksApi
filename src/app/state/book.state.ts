import { book } from 'src/shared/models/book.model'

export interface userState {
    username: string
}
export interface bookState {
    searchResults: Array<book>
}

export interface wishlistState {
    wishlist: Array<book>
}

export const userInitState: userState = {
    username: ""
}

export const searchResultsInitState: bookState = {
    searchResults: Array<book>()
}

export const wishlistInitState: wishlistState = {
    wishlist: Array<book>()
}