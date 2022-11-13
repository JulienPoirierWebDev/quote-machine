import React, {useEffect} from 'react';
import QuoteBox from "./QuoteBox";
import QuoteOptions from "./QuoteOptions";

const QuoteWrapper = () => {

    const [quote, setQuote] = React.useState('');
    const [author, setAuthor] = React.useState('');
    const [show, setShow] = React.useState();
    const [censored, setCensored] = React.useState(false);
    const [loading, setLoading] = React.useState(true);


    const getQuote = () => {
        console.log(censored)
        fetch(`https://movie-quote-api.herokuapp.com/v1/quote/?censored=${censored}`)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setQuote(data.quote);
                setAuthor(data.role);
                setShow(data.show);
            });
    }

    useEffect(() => {
        getQuote();
    }, [])



    return (
        <div id="quote-box" className={"transition-size duration-800 p-3 sm:w-3/4 md:w-1/2 xl:w-1/2 w-3/4  m-auto rounded-md bg-purple-500"}>
            <QuoteBox quote={quote} author={author} show={show}/>
            <QuoteOptions
                handleChange={() => setCensored(!censored)}
                handleClick={getQuote}
                author={author}
                show={show}
                quote={quote}
            />


        </div>
    );
};

export default QuoteWrapper;
