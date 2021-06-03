import React from 'react';
import ReactDom from 'react-dom';

import App from 'src/components/App';

const rootReactElement = (
  <App />
);

const target = document.getElementById('root');

ReactDom.render(rootReactElement, target);
