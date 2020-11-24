import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getBooks } from '@neighborly/books/data-access';
import { Books, Book } from '@neighborly/books/ui';
export const BooksFeature = () => {
  const [books, setBooks] = useState([]);
  useEffect(
    () => {
      getBooks().then(setBooks);
    },
    [
      // This effect runs only once on first component render
      // so we declare it as having no dependent state.
    ]
  );
  return (
    <>
      <h2>Books</h2>
      <Books books={books} />
    </>
  );
};
export default BooksFeature;
