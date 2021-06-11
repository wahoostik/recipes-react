import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './style.scss';

const Menu = ({ recipes, logged }) => (
  <nav className="menu">
    <NavLink
      className="menu-link"
      to="/"
      activeClassName="menu-link--active" // actif quand je suis sur cet url
      exact // si on veux que le lien actif réponde, il ne faut pas oublier "exact"
    >
      Accueil
    </NavLink>
    {logged && (
    <NavLink
      className="menu-link"
      to="/favorites"
      activeClassName="menu-link--active" // actif quand je suis sur cet url
      exact
    >
      Mes recettes préférées
    </NavLink>
    )}
    {recipes.map((recipe) => (
      <NavLink
        key={recipe.id}
        className="menu-link"
        to={`/recipe/${recipe.slug}`}
        activeClassName="menu-link--active"
        exact
      >
        {recipe.title}
      </NavLink>
    ))}
  </nav>
);

Menu.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }),
  ).isRequired,
  logged: PropTypes.bool.isRequired,
};

export default Menu;
