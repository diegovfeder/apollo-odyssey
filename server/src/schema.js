const {gql} = require('apollo-server');

const typeDefs = gql`

type Query {
  "Query to get tracks array for the homepagede grid"
  tracksForHome: [Track!]!
}

"A track is a group of Modules that teaches about a specific topic."
type Track {
  id: ID!
  title: String!
  author: Author!
  thumbnail: String
  "the track's approximate length in minutes"
  length: Int
  modulesCount: Int
}

"Author of a complete Track"
type Author {
  id: ID!
  "The author's first and last name"
  name: String!
  photo: String
}
`


module.exports = typeDefs;
