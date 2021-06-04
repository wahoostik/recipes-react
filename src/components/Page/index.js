/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from 'src/components/AppHeader';

// Les enfants qu'on va mettre dans Page, on les injecte dans la div main
const Page = ({ children }) => (
  <main className="page">
    <AppHeader />
    {children}
  </main>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
