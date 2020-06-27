const { gql } = require("apollo-server");
const typeDefs = gql`

    schema {
        query: MyQuery
    }

    type MyQuery {
        "A simple greeting"
        greeting: String
        interestingUrls: [String]
        randomDiceThrow: Int
        fewNumbers: [Int]
        pi: Float
        isTodayFriday: Boolean
        randomCoinTossesUntilTrue: [Boolean]
        today : DayOfWeek
        workDays: [DayOfWeek]
        schoredingerCatSayHi: String
        randomQuote: Quote!
    }
    """
    # The object representing a quote

    ## It contains a text and author's name
    """
    type Quote{
        text: String
        author: String
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

module.exports = typeDefs;
