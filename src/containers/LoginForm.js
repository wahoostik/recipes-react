/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import { connect } from 'react-redux';
import LoginForm from 'src/components/LoginForm';
import { changeValue, login } from 'src/actions/userActions';

const mapStateToProps = (state) => ({
  email: state.userReducer.email,
  password: state.userReducer.password,
  isLogged: state.userReducer.infos.logged,
  loggedMessage: `Bonjour ${state.userReducer.infos.pseudo}`,
});
const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    // console.log('je veux changer les valeurs de email/password', value, name);
    const action = changeValue(value, name);
    // console.log(action);
    dispatch(action);
  },
  handleLogin: () => {
    console.log('je veux me connecter');
    const action = login();
    dispatch(action);
  },
});

const componentToConnect = connect(mapStateToProps, mapDispatchToProps);

const connectedComponent = componentToConnect(LoginForm);

export default connectedComponent;
