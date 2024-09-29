import { useEffect, useState } from "react";

const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function FetchQuoteLoader() {
    const [quote, setQuote] = useState({text: "", author: ""});
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {      //wrap the async function with a synch. function (useEffect rules)
        async function quoteFetch() {
            const response = await fetch(RANDOM_QUOTE_URL);
            const jsonResponse = await response.json();
            const randQuote = jsonResponse.quote;
            setQuote(randQuote)
            setIsLoading(false)
        }
        quoteFetch()
    }, [])
    
    
    return (
        <div>
            {isLoading && <p>Loading...</p>}
            <h1>{quote.text}</h1>
            <h3>{quote.author}</h3>
        </div>
    )
}