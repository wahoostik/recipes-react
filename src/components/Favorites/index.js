import React from 'react';
import PropTypes from 'prop-types';

import Page from 'src/components/Page';
import Content from 'src/components/Content';

const Favorites = ({ favoritesRecipes }) => (
  <Page>
    <Content
      title="Mes recettes préférées"
      text="Voici vos recettes favorites !"
      recipes={favoritesRecipes}
    />
  </Page>
);

Favorites.propTypes = {
  favoritesRecipes: PropTypes.array.isRequired,
};

export default Favorites;
