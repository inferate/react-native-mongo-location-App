import trackerApi from '../api/trackerApi';
import {DataContext} from './dataContext';

interface IAuthState {
  email: string;
  password: string;
}
interface IAction {
  type: string;
  payload: {};
}
const authReducer = (state: IAuthState, action: IAction) => {
  switch (action.type) {
    case 'set_errоr':
      return {...state, errorMessage: action.payload};
    default:
      return state;
  }
};

const signup = dispatch => async ({email, password}: IAuthState) => {
  try {
    const res = await trackerApi.post('./signup', {email, password});
    console.log(res.data);
  } catch (err) {
    dispatch({
      type: 'set_errоr',
      payload: 'Something went wrong! Please check your user credentials.',
    });
  }
};

const signin = dispatch => {
  return ({email, password}) => {};
};

const signout = dispatch => {
  return () => {};
};

export const {Provider, Context} = DataContext(
  authReducer,
  {signin, signout, signup},
  {
    isSignedIn: false,
    errorMessage: '',
  },
);
