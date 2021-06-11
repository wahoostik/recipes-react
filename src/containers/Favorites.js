/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import { connect } from 'react-redux';
import Favorites from 'src/components/Favorites';

const mapStateToProps = (state) => ({
  favoritesRecipes: state.userReducer.infos.favoritesRecipes,
});
const mapDispatchToProps = (dispatch) => ({});

const componentToConnect = connect(mapStateToProps, mapDispatchToProps);

const connectedComponent = componentToConnect(Favorites);

export default connectedComponent;
