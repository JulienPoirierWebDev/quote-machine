import React from 'react';

const QuoteOptionsControl = ({handleClick, author, show, quote}) => {
    return (
        <div className="flex justify-evenly">
            <button id="new-quote" onClick={handleClick} className={"transition animate-bounce bg-gray-200 p-2 rounded hover:bg-gray-400"}>Change</button>
            <a className={"transition bg-gray-200 p-2 rounded hover:bg-gray-400"}
                id="tweet-quote" target="_blank" href={`https://www.twitter.com/intent/tweet?text="${quote}" --> ${author} dans ${show}. Qui a dev cela ? --> shorturl.at/kpCIY`}>Send to tweeter</a>
        </div>
    );
};

export default QuoteOptionsControl;
