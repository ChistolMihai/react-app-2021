import authReducer from './reducers/auth.reducer';
import booksReducer from './reducers/books.reducer';
import listBooksReducer from "./reducers/list-books.reducer";


import {combineReducers} from 'redux';

const allReducers = combineReducers({
    books: booksReducer,
    auth: authReducer,
    listBooks: listBooksReducer
});

export default allReducers;
