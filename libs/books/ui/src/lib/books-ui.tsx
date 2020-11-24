import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface BooksUiProps {}

const StyledBooksUi = styled.div`
  color: pink;
`;

export function BooksUi(props: BooksUiProps) {
  return (
    <StyledBooksUi>
      <h1>Welcome to books-ui!</h1>
    </StyledBooksUi>
  );
}

export default BooksUi;
