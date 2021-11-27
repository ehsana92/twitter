import React, { useState, useEffect } from 'react';

const Search = () => {

    const [query, setQuery] = useState();

    useEffect(() => {
        if (!query)
            return;
        console.log('data fetch on query fetch')
    }, [query]);

    return (
        <div>
            <input value={query} onChange={e => setQuery(e.target.value)} />
        </div>
    );
};

export default Search;