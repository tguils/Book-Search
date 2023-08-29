import { gql } from '@apollo/client';
//this will get teh information included in teh user's profile - their user detail variables, the book count , and the variable details of their saved books
export const GET_ME = gql`
    query me {
        me {
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