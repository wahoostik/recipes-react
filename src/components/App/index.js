/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

import Menu from 'src/containers/Menu';
import Home from 'src/containers/Home';
import Favorites from 'src/containers/Favorites';
import Recipe from 'src/containers/Recipe';
import Error from 'src/components/Error';

import Loading from './Loading';

import './style.scss';

function App({
  loading, fetchData, logged, onClickDarkMode, darkMode,
}) {
  useEffect(() => {
    // console.log('au 1er rendu, je veux charger les données');
    fetchData();
  }, []);

  // chargement des favoris depuis App
  // useEffect(() => {
  //   if (logged) {
  //     fetchFavorites();
  //   }
  // }, [logged]);

  const handleOnClick = () => {
    onClickDarkMode();
  };

  if (loading) {
    return <Loading />;
  }
  const classnames = darkMode ? 'app app--dark-mode' : 'app';

  return (
    <div className={classnames}>
      <button type="button" onClick={handleOnClick}>Dark mode</button>
      <Menu />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        {logged ? (
          <Route path="/favorites" exact>
            <Favorites />
          </Route>
        ) : (
          <Redirect from="/favorites" to="/" />
        )}
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
  fetchData: PropTypes.func.isRequired,
  logged: PropTypes.bool.isRequired,
  onClickDarkMode: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
};

App.defaultProps = {
  loading: false,
};

export default App;
