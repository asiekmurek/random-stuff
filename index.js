const { ApolloServer, } = require("apollo-server");
const typeDefs = require("./typeDefs");
const PORT = process.env.PORT || 4000
const rootValue = require("./rootValue")

const server = new ApolloServer({ 
    typeDefs,
    rootValue, 
    playground: true, 
    introspection: true 
});

server.listen({ port: PORT }).then((result) => console.log(result.url)); 