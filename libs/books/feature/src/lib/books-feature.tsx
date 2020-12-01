import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IBook } from '@neighborly/shared-models';
import { getBooks } from '@neighborly/books/data-access';
import { Books, Book } from '@neighborly/books/ui';
import { on } from 'process';

export const BooksFeature = () => {
  const [books, setBooks] = useState([] as IBook[]);
  const [selectedBook, setSelectedBook] = useState({} as IBook);

  const onAdd = (book) => {
    alert(`Added ${book.title}`);
  };

  const onSelectBook = (book) => {
    setSelectedBook(book);
  };

  useEffect(
    () => {
      let mounted = true;
      getBooks()
        .then((response) => {
          if (mounted) setBooks(response);
        })
        .catch((e) => console.log('e', e));
      return () => (mounted = false);
    },
    [
      // This effect runs only once on first component render
      // so we declare it as having no dependent state.
    ]
  );

  return (
    <>
      {selectedBook.title && (
        <>
          <h4>selected book</h4>
          <Book book={selectedBook} onSelect={onSelectBook} onAdd={onAdd} />
        </>
      )}

      <h2>Books</h2>
      <Books books={books} onSelect={onSelectBook} onAdd={onAdd} />
    </>
  );
};
export default BooksFeature;
