import React from 'react';

const CheckboxWithLabel = ({handleChange, htmlFor, divClasses}) => {
    return (
        <div className={divClasses}>
            <label htmlFor={htmlFor}>Censored</label>
            <input onChange={handleChange} id={htmlFor} name={htmlFor} className="mx-2" type="checkbox"/>
        </div>
    );
};

export default CheckboxWithLabel;
