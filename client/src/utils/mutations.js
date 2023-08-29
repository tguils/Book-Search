import { gql } from '@apollo/client';
//login user should take in name email and password then returns token and name 
export const LOGIN_USER = gql `
    mutation loginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            token
            user {
                _id
                username
                email
            }
        }
    }
`;

//add user should take in name email password and return adds them and then returns id, name and email and token
export const ADD_USER = gql `
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
                email
            }
        }
    }
`;

//save book should take in all the book variables and then returns the user and user's saved books 
export const SAVE_BOOK = gql `
    mutation saveBook($bookId: String!, $description: String!, $title: String! $authors: [String], $image: String, $link: String) {
        saveBook(bookId: $bookId, description: $description, title: $title authors: $authors, image: $image, link: $link) {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                title
                description
                authors
                image
                link
            }
        }
    }
`;


//This will take in the book variables and then the return the user's updated saved books minus the book details on teh deleted one
export const REMOVE_BOOK = gql `
mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
        _id
        username
        email
        bookCount
        savedBooks {
            bookId
            title
            description
            authors
            image
            link
        }
    }
}
`;