const gql = require('graphql-tag');
const {ApolloServer} = require('apollo-server');

/**
 * "!" mark in type defination is to mark them 
 * as it should alway be present 
 */

/**
 * 
 * schema always need a query to access that schema
 * 
 */
const typeDefs = gql`
  type User {
    email: String! 
    avatar:String
    friends:[User]!
  }

  type Query {
    me:User!,
    name:String
  }
`
// resolver have a same value type as type defs
const resolvers = {
  Query:{
    me(){
      return {
        email:'naveen@naveen.com',
        avatar:'http://yoda.pnd',
        friends:[]
      }
    },
    name(){
      return 'Hello'
    }
  }
}
const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen(4000)
.then(()=>{
  console.log('server running');
})
.catch((err)=>{
  console.error(err);
})