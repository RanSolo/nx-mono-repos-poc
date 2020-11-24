import React from 'react';
import { render } from '@testing-library/react';
import { getBooks } from '@neighborly/books/data-access';
import { Books, BooksProps } from './books';
//import {BookProps } from './book';
let books: any[];

beforeEach(async () => {
  books = await getBooks();
});

describe('Books', () => {
  console.log('books', books);
  it('should render successfully', () => {
    const { baseElement } = render(
      <Books books={books} onAdd={(book) => alert(`${book} added`)} />
    );
    expect(baseElement).toBeTruthy();
  });
});
