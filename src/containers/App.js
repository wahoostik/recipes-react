/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import { connect } from 'react-redux';
import App from 'src/components/App';
import { fetchRecipes } from 'src/actions/recipesActions';

// branchement en lecture
// retourne un objet (de props)
// elle reçoit le state en params
const mapStateToProps = (state) => ({
// le nom de la propriété (clé) correspond avec la props du composant à connecter
// ensuite on relie la propriété du state qu'on souhaite
});
const mapDispatchToProps = (dispatch) => ({
  fetchData: () => {
    console.log('container app');
    dispatch(fetchRecipes());
  },
});

// on passe les 2 fonctions à connect
// connect renvoie une fonction (closure)
const componentToConnect = connect(mapStateToProps, mapDispatchToProps);
// on utilise componentToConnect pour connecter le composant stateless
// elle nous renvoie un composant connecté au state, ou enrichi de props
const connectedComponent = componentToConnect(App);

export default connectedComponent;
