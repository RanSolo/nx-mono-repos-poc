import React from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { BooksFeature } from '@neighborly/books/feature';
import {
  GlobalStyles,
  Header,
  Main,
  NavigationItem,
  NavigationList,
} from '@neighborly/ui';

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header>
        <h1>Bookstore</h1>
        <NavigationList>
          <NavigationItem>{<Link to="/books">Books</Link>}</NavigationItem>
          <NavigationItem>{<Link to="/auth">Login</Link>}</NavigationItem>
        </NavigationList>
      </Header>
      <Main>
        <Route path="/books" component={BooksFeature} />
        <Route exact path="/" render={() => <Redirect to="/books" />} />
      </Main>
    </BrowserRouter>
  );
};

export default App;
