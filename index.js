const { ApolloServer, gql } = require("apollo-server");
const PORT = process.env.PORT || 4000
const typeDefs = gql`
    type Query {
        greeting: String
        interestingUrls: [String]
        randomDiceThrow: Int
    }
`;
function rootValue(){ 
    const getRandomDiceThrow = sides => Math.ceil(Math.random() * sides);
    const data = {
        greeting: "Hello world",
        interestingUrls: ["https://kursreacta.pl", "https://64bites.com"],
        randomDiceThrow: getRandomDiceThrow(6)
    }
    return data;
}

const server = new ApolloServer({ 
    typeDefs,
    rootValue, 
    playground: true, 
    introspection: true 
});

server.listen({ port: PORT }).then((result) => console.log(result.url)); 