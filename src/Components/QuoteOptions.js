import React from 'react';
import CheckboxWithLabel from "./CheckboxWithLabel";
import QuoteOptionsControl from "./QuoteOptionsControl";

const QuoteOptions = ({handleChange, handleClick, author, show, quote}) => {
    return (
        <>
            <CheckboxWithLabel handleChange={handleChange} htmlFor={"censored"} divClasses={"text-center py-3"}/>

            <QuoteOptionsControl handleClick={handleClick} quote={quote} show={show} author={author} />

        </>
    );
};

export default QuoteOptions;
