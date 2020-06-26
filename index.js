const { ApolloServer, gql } = require("apollo-server");
const PORT = process.env.PORT || 4000
const typeDefs = gql`
    type Query {
        greeting: String
        interestingUrls: [String]
        randomDiceThrow: Int
        fewNumbers: [Int]
        pi: Float
        isTodayFriday: Boolean
        randomCoinTossesUntilTrue: [Boolean]
        today : DayOfWeek
        workDays: [DayOfWeek]
    }
    enum DayOfWeek {
        MON
        TUE 
        WED 
        THU 
        FRI  
        SAT
        SUN
    }
`;
const rootValue = () => { 
    const getRandomDiceThrow = sides => Math.ceil(Math.random() * sides);
    const date = new Date();
    const DAYS_OF_WEEK = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const randomCoinToss = () => Math.random() >= 0.5; 
    const getRandomCoinTossesUntilTrue = () => {
        const result = [];
        do {
            result.push(randomCoinToss());
        } while(!result[result.length-1]);
        return result;
    } 

    const data = {
        greeting: "Hello world",
        interestingUrls: ["https://kursreacta.pl", "https://64bites.com"],
        randomDiceThrow: getRandomDiceThrow(6),
        fewNumbers: [1,2,3], 
        pi: Math.PI,
        isTodayFriday: date.getDay() === 5,
        randomCoinTossesUntilTrue: getRandomCoinTossesUntilTrue(),
        today: DAYS_OF_WEEK[date.getDay()],
        workDays: DAYS_OF_WEEK.slice(1,6)
    };
    return data;
};

const server = new ApolloServer({ 
    typeDefs,
    rootValue, 
    playground: true, 
    introspection: true 
});

server.listen({ port: PORT }).then((result) => console.log(result.url)); 