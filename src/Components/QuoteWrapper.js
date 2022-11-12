import React from 'react';

const QuoteWrapper = () => {



    return (
        <div id="quote-box">
            <div >
                <p id="text">Quote</p>
                <p id="author">Author</p>
            </div>
            <div>
                <button id="new-quote"></button>
                <a id="tweet-quote" href="twitter.com/intent/tweet">Send to tweeter</a>
            </div>


        </div>
    );
};

export default QuoteWrapper;
