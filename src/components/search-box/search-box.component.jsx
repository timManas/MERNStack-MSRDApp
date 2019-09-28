import React from "react";
import "./search-box.styles.css"

// This is an example of Destructuring prop: ({placeholder, handleChange})
export const SearchBox = ({placeholder, handleChange}) => (
    <input 
    className='search'
    type='search' 
    placeholder={placeholder}
    onChange={handleChange}
    />
);