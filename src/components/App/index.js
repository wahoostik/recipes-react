/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import Menu from 'src/containers/Menu';
import Home from 'src/containers/Home';
import Recipe from 'src/containers/Recipe';
import Error from 'src/components/Error';

import Loading from './Loading';

import './style.scss';

function App(props) {
  if (props.loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Menu />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/recipe/:slug" exact>
          <Recipe />
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
