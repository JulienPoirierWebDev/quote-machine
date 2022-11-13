import React from 'react';

const QuoteOptionsControl = ({handleClick, author, show, quote}) => {
    return (
        <div className="flex justify-evenly">
            <button id="new-quote" onClick={handleClick} className={"transition animate-bounce bg-green-400 p-2 rounded hover:bg-white"}>Change</button>
            <a className={"transition bg-green-400 p-2 rounded hover:bg-white"}
                id="tweet-quote" target="_blank" href={`https://www.twitter.com/intent/tweet?text="${quote}" --> ${author} dans ${show}. Qui a dev cela ? --> shorturl.at/kpCIY`}>Send to tweeter</a>
        </div>
    );
};

export default QuoteOptionsControl;
