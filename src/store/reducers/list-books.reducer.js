import {fetch_books, single_books, fetch_category, remove_category} from "../actions/types";

const initialState = {
    books: [],
    book: {},
    categories: [],
    removed: {},
    loading: false,
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case fetch_books:
            return {
                ...state,
                books: action.payload
            };
        case single_books:
            return {
                ...state,
                book: action.payload
            };
        case fetch_category:
            return {
                ...state,
                categories: action.payload
            };
        case remove_category:
            return {
                ...state,
               removed: action.payload
            };
        default:
            return state;
    }
}
