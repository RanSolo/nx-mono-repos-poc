import React from 'react';
import { render } from '@testing-library/react';

import Book from './book';
import { getBook } from '@neighborly/books/data-access';
const book = getBook(1);
describe('Book', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Book book={book} onAdd={(book) => alert(`Added ${book.title}`)} />
    );
    expect(baseElement).toBeTruthy();
  });
});
