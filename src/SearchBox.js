import React from 'react';

const SearchBox = ({ searchChange }) => {
    return(
        <input
            className="tc pa3 b--green bg-lightest-blue "
            type="search" 
            placeholder="search"
            onChange={searchChange}
        />
    );
}




export default SearchBox;