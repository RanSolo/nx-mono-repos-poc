import React from 'react';
import styled from 'styled-components';
import { Button } from '@neighborly/ui';
import { IBook } from '@neighborly/shared-models';
export interface BookProps {
  book: IBook;
  // New prop
  onAdd: (book: any) => void;
  onSelect: (book: any) => void;
}

const StyledBook = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  &:last-child {
    border-bottom: none;
  }
  > span {
    padding: 1rem 0.5rem;
    margin-right: 0.5rem;
  }
  .title {
    flex: 1;
  }
  .rating {
    color: #999;
  }
  .price {
    color: #478d3c;
  }
`;

export const Book = ({ book, onAdd, onSelect }: BookProps) => {
  return (
    <StyledBook className={book.title} onClick={() => onSelect(book)}>
      <span className="title">
        {book.title} by <em>{book.author}</em>
      </span>
      <span className="price">${book.price}</span>
      {/* Add button to UI */}
      <span>
        <Button id={`add-book-${book.title}`} onClick={() => onAdd(book)}>
          Add to Cart
        </Button>
      </span>
    </StyledBook>
  );
};

export default Book;
