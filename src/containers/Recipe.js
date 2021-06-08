/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import { connect } from 'react-redux';

// withRouter est un HoC à l'instar de connect
// il vient donc donner au composant qu'il englobe des infos via ses props
// ici on englobe un container et on a vu qu'on peut récupérer l'objet de props
// de ceux-ci via ownProps
import { withRouter } from 'react-router-dom';
import Recipe from 'src/components/Recipe';
import { findRecipeBySlug } from 'src/selectors/recipes';

// branchement en lecture
// retourne un objet (de props)
// elle reçoit le state en params
const mapStateToProps = (state, ownProps) => {
  // le nom de la propriété (clé) correspond avec la props du composant à connecter
  // ensuite on relie la propriété du state qu'on souhaite
  // console.log('ownProps', ownProps);
  // console.log('ownProps', ownProps.match.params.slug);
  const { slug } = ownProps.match.params;
  // const recipeFound = state.recipesReducer.find((recipe) => recipe.slug === slug);
  // console.log('recipeFound', recipeFound);
  return ({
    // recipe: state.recipesReducer[0],
    recipe: findRecipeBySlug(state.recipesReducer, slug),
  });
};
const mapDispatchToProps = (dispatch) => ({});

// on passe les 2 fonctions à connect
// connect renvoie une fonction (closure)
const componentToConnect = connect(mapStateToProps, mapDispatchToProps);
// on utilise componentToConnect pour connecter le composant stateless
// elle nous renvoie un composant connecté au state, ou enrichi de props
const connectedComponent = componentToConnect(Recipe);

// ici withRouter injecte dans les props du container, les objets history, match et location
// <Container history={...history} location={...location} match={...match} />
// les props du container pourront être récupérer avec ownProps
export default withRouter(connectedComponent);
