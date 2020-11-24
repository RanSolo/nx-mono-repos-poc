import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getBooks } from '@neighborly/books/data-access';
import { Books, Book } from '@neighborly/books/ui';
import { on } from 'process';

export const BooksFeature = () => {
  const [books, setBooks] = useState([]);

  const onAdd = (book) => {
    alert(`Added ${book.title}`);
  };

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
      {/* We'll implement this properly in Chapter 4 */}
      {/* Pass a stub callback for now */}
      <Books books={books} onAdd={(book) => onAdd(book)} />
    </>
  );
};
