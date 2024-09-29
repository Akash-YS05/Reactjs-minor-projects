import { useEffect, useState } from "react";

const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function FetchQuote() {
    const [quote, setQuote] = useState({text: "", author: ""});

    useEffect(() => {      //wrap the async function with a synch. function (useEffect rules)
        quoteFetch()
    }, [])
    
    async function quoteFetch() {
        const response = await fetch(RANDOM_QUOTE_URL);
        const jsonResponse = await response.json();
        const randQuote = jsonResponse.quote;
        setQuote(randQuote)
    }
    return (
        <div>
            <button onClick={quoteFetch}>Get random quote</button>
            <h1>{quote.text}</h1>
            <h3>{quote.author}</h3>
        </div>
    )
}