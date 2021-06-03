/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

import Menu from 'src/components/Menu';
import Home from 'src/components/Home';
// import Recipe from 'src/components/Recipe';
// import Error from 'src/components/Error';

import recipesTest from 'src/data';

import Loading from './Loading';

import './style.scss';

function App(props) {
  const recipes = {
    list: recipesTest,
  };
  if (props.loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Menu recipes={recipes.list} />
      <Home recipes={recipes.list} />
      {/* <Recipe recipe={recipesTest[0]} /> */}
      {/* <Error /> */}
    </div>
  );
}

App.propTypes = {
  loading: PropTypes.bool,
};

App.defaultProps = {
  loading: false,
};

export default App;
