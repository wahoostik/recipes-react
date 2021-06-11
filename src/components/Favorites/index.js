import React from 'react';
import PropTypes from 'prop-types';

import Page from 'src/components/Page';
import Content from 'src/components/Content';

const Favorites = ({ favoritesRecipes }) => (
  <Page>
    <Content
      title="Les recettes oRecipes"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, explicabo."
      recipes={favoritesRecipes}
    />
  </Page>
);

Favorites.propTypes = {
  favoritesRecipes: PropTypes.array.isRequired,
};

export default Favorites;
