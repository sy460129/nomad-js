const quotes = [
    {
    quote: "sy46's second page",
    author: 'sy46'
    },
    ];
const quote=document.querySelector("#quote span:first-child");
const author=document.querySelector("#quote span:last-child");

const todaysQuote=(quotes[Math.floor(Math.random()*quotes.length)]);
quote.innerText=todaysQuote.quote;
author.innerText=todaysQuote.author;