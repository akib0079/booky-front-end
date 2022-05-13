import React, { useEffect, useState } from 'react';

const UsebookData = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('https://calm-caverns-00395.herokuapp.com/books')
            .then(res => res.json())
            .then(bookData => setBooks(bookData))
    }, []);

    return [books, setBooks];
};

export default UsebookData;