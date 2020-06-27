const Quotes = require("inspirational-quotes");

const rootValue = () => {
    const getRandomDiceThrow = sides => Math.ceil(Math.random() * sides);
    const date = new Date();
    const DAYS_OF_WEEK = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const randomCoinToss = () => Math.random() >= 0.5;
    const getRandomCoinTossesUntilTrue = () => {
        const result = [];
        do {
            result.push(randomCoinToss());
        } while (!result[result.length - 1]);
        return result;
    };

    return {
        greeting: "Hello world",
        interestingUrls: ["https://kursreacta.pl", "https://64bites.com"],
        randomDiceThrow: getRandomDiceThrow(6),
        fewNumbers: [1, 2, 3],
        pi: Math.PI,
        isTodayFriday: date.getDay() === 5,
        randomCoinTossesUntilTrue: getRandomCoinTossesUntilTrue(),
        today: DAYS_OF_WEEK[date.getDay()],
        workDays: DAYS_OF_WEEK.slice(1, 6),
        schoredingerCatSayHi: randomCoinToss() ? "meow" : null,
        randomQuote: Quotes.getQuote
    };
};
module.exports = rootValue;