import React from 'react';
import './SearchBox.styles.css';

const SearchBox = ({handleChange, placeholder}) => 
    (<input className="search-input" 
            type="search" 
            placeholder={placeholder}
            onChange={handleChange} />)

export default SearchBox