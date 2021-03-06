import React from 'react';
import PropTypes from 'prop-types';

import Page from 'src/components/Page';
import Content from 'src/components/Content';

const Home = ({ recipes }) => (
  <Page>
    <Content
      title="Les recettes oRecipes"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, explicabo."
      recipes={recipes}
    />
  </Page>
);

Home.propTypes = {
  recipes: PropTypes.array.isRequired,
};

export default Home;
