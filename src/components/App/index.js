/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import Menu from 'src/components/Menu';
import Home from 'src/components/Home';
import Recipe from 'src/components/Recipe';
import Error from 'src/components/Error';

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
      <Switch>
        <Route path="/" exact>
          <Home recipes={recipes.list} />
        </Route>
        <Route path="/recipe/:slug" exact>
          <Recipe recipe={recipesTest[0]} />
        </Route>
        <Route>
          {/* On veut que le composant Error s'affiche quand aucun des composants Home ou Recipe s'affiche.
        On ne met donc pas de props path */}
          <Error />
        </Route>
      </Switch>
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
