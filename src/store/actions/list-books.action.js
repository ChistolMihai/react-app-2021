import {fetch_books, single_books, fetch_category, remove_category} from "./types";

export const fetchBooks = () => dispatch => {
    fetch('http://localhost:8080/books_list')
        .then(res => res.json())
        .then(books => dispatch({
            type: fetch_books,
            payload: books
        }))
};

export const singleBooks = (id) => dispatch => {
    fetch(`http://localhost:8080/books_list?id=${id}`)
        .then(res => res.json())
        .then(book => dispatch({
            type: single_books,
            payload: book
        }))
};

export const fetchCategory = () => dispatch => {
    fetch('http://localhost:8080/category')
        .then(res => res.json())
        .then(categories => dispatch({
            type: fetch_category,
            payload: categories
        }))
};

export const removeCategory = (id) => dispatch => {
    fetch(`http://localhost:8080/category/${id}`,{
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(category => dispatch({
            type: remove_category,
            payload: category
        }))
};
