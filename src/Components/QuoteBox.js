import React from 'react';

const QuoteBox = ({quote, author, show}) => {
    return (
        <div className=" p-3 text-center">
            <h2 id="text" className={"transition-size duration-700 py-2 text-xl"} >{quote}</h2>
            <h3 id="author" className={"py-2 text-lg"}>{author} in {show}</h3>
        </div>
    );
};

export default QuoteBox;
