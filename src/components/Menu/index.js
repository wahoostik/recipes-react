import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Menu = ({ recipes }) => (
  <nav className="menu">
    <a
      className="menu-link menu-link--active"
      href="/"
    >
      Accueil
    </a>
    {recipes.map((recipe) => (
      <a
        key={recipe.id}
        className="menu-link"
        href={`/recipe/${recipe.slug}`}
      >
        {recipe.title}
      </a>
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
};

export default Menu;
