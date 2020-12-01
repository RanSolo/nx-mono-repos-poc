import React from 'react';
import styled from 'styled-components';
import { Book } from '../book/book';
import { IBook } from '@neighborly/shared-models';

export interface BooksProps {
  books: IBook[];
  onAdd: (book: IBook) => void;
  onSelect: (book: IBook) => void;
}

const StyledBooks = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Books = ({ books, onAdd, onSelect }: BooksProps) => {
  return (
    <StyledBooks>
      {books?.map((book) => (
        // Pass down new callback prop
        <Book key={book.id} book={book} onSelect={onSelect} onAdd={onAdd} />
      ))}
    </StyledBooks>
  );
};

export default Books;
