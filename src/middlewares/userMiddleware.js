/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import axios from 'axios';
import {
  LOGIN, saveUser, fetchFav, FETCH_FAV, saveFav,
} from 'src/actions/userActions';
import { isLoading, CHANGE_MODE } from 'src/actions/appActions';

const userMiddleware = (store) => (next) => (action) => {
  // console.log('state:', store.getState());
  // console.log('action:', action);
  switch (action.type) {
    case LOGIN: {
      // console.log('case', LOGIN);
      const loginUser = async () => {
        try {
          const state = store.getState();
          store.dispatch(isLoading(true));

          const response = await axios.post('http://localhost:3001/login', {
            email: state.userReducer.email,
            password: state.userReducer.password,
          });
          console.log('reponse', response);
          // ici on va stocker les infos que nous retourne la requête dans le state
          // => modification de state => dispatch d'action
          const actionUser = saveUser(response.data);
          store.dispatch(actionUser);
          console.log('actionUser', actionUser);
          // quand on a une réponse en succès, on peut charger les favoris de l'utilisateur
          // on dispatch une action pour ça
          store.dispatch(fetchFav());
        }
        catch (error) {
          store.dispatch(isLoading(false));
          console.trace(error);
        }
      };
      loginUser();
      break;
    }
    case FETCH_FAV: {
      // console.log('case', FETCH_FAV);
      const fetchFavorites = async () => {
        try {
          const state = store.getState();
          const response = await axios.get('http://localhost:3001/favorites', {
            // pour insérer le token dans le state,
            // on a une propriété headers dans l'objet de config d'axios
            headers: {
              Authorization: `bearer ${state.userReducer.infos.token}`,
            },
          });
          console.log('reponse favorites', response);
          store.dispatch(saveFav(response.data.favorites));
        }
        catch (error) {
          console.trace(error);
        }
        finally {
          store.dispatch(isLoading(false));
        }
      };
      fetchFavorites();
      break;
    }
    case CHANGE_MODE: {
      console.log('case', CHANGE_MODE);
      const state = store.getState();
      // ici la route côté serveur n'existe pas
      // mais dans le cas contraire notre requête ressemblerait
      // à peu près à ça
      axios.post('http://localhost:3001/settings', {
        darkMode: !state.appReducer.darkMode,
      }).then((response) => {
        // traitement de la réponse
      }).catch((err) => {
        // traitement de l'erreur
      });

      // on laisse passer l'action jusqu'au reducer
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default userMiddleware;
