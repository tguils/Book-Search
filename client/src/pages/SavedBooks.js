import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import {
  Jumbotron,
  Container,
  CardColumns,
  Card,
  Button,
 

} from 'react-bootstrap';

import { GET_ME } from '../utils/queries';
import { REMOVE_BOOK } from '../utils/mutations';
import Auth from '../utils/auth';
import { removeBookId } from '../utils/localStorage';

// SavedBooks.js:

// Remove the useEffect() Hook that sets the state for UserData.

// Instead, use the useQuery() Hook to execute the GET_ME query on load and save it to a variable named userData.

// Use the useMutation() Hook to execute the REMOVE_BOOK mutation in the handleDeleteBook() function instead of the deleteBook() function that's imported from API file. (Make sure you keep the removeBookId() function in place!)

// https://www.apollographql.com/docs/react/data/mutations/
// https://www.apollographql.com/tutorials/lift-off-part3/08-the-usequery-hook-with-variables
const SavedBooks = () => {
  const { data, loading } = useQuery(GET_ME);
  const [removeBook] = useMutation(REMOVE_BOOK);
  // create function that accepts the book's mongo _id value as param and deletes the book from the database
  const handleDeleteBook = async (bookId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    
    if (!token) {
      return false;
    }
    try {
      await removeBook({
        variables: {bookId: bookId}
      });
      removeBookId(bookId);
    } catch (err) {
      console.error(err);
    }
  };

  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  const userData = data.me;

  return (
    <>
      <Jumbotron fluid className="text-light bg-dark">
        <Container>
          <h1>Viewing saved books!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2 className='pt-5'>
          {userData.savedBooks.length
            ? `Viewing ${userData.savedBooks.length} saved ${
                userData.savedBooks.length === 1 ? "book" : "books"
              }:`
            : "You have no saved books!"}
        </h2>
        <CardColumns>
          {userData.savedBooks.map((book) => {
            return (
              <Card key={book.bookId} border="dark">
                {book.image ? (
                  <Card.Link href={book.link} target="_blank" rel="noreferrer">
                    <Card.Img
                      src={book.image}
                      alt={`The cover for ${book.title}`}
                      variant="top"
                    />
                  </Card.Link>
                ) : null}
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <p className="small">Authors: {book.authors}</p>
                  <Card.Text>{book.description}</Card.Text>
                    <Button className='btn-block btn-danger' onClick={() => handleDeleteBook(book.bookId)}>
                      Delete this Book!
                    </Button>
                  </Card.Body>
                </Card>
              
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SavedBooks;
