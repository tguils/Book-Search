const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

type Query {
    me: User
}

type Book {
    bookId: ID!
    authors:[String]
    description: String
    title: String
    image: String
    link: String
  }

type Auth {
    token: ID!
    user: User
  }

input InputBook {
    bookId: String
    authors: [String]
    title: String
    description: String
    image: String
    link: String
  }
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(book: InputBook!): User
    removeBook(bookId: String!): User
  }
`
module.exports = typeDefs;
