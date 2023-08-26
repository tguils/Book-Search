import { gql } from '@apollo/client';
//login user should take in name email and password then returns token and name 
export const LOGIN_USER = gql ``;

//add user should take in name email password and return adds them and then returns id, name and email and token
export const ADD_USER = gql ``;

//save book should take in all the book variables and then returns the user and user's saved books 
export const SAVE_BOOK = gql ``;


//This will take in the book variables and then the return the user's updated saved books minus the book details on teh deleted one
export const REMOVE_BOOK = gql ``;