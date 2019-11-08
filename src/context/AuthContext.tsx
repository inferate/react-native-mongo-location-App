import AsyncStorage from '@react-native-community/async-storage';
import {Dispatch} from 'react';
import {
  IGetClearErrorAction,
  IGetErrorAction,
  IGetSignoutAction,
  IGetSignupAction,
} from '../actions';
import trackerApi from '../api/trackerApi';
import {EActionTypes} from '../enums/EActionTypes';
import {INavigationRoutes} from '../enums/ENavigation';
import {IAuthState} from '../models/IAuthState';
import {navigate} from '../navigation/navigationRef';
import {DataContext} from './dataContext';

type TLoginReducerAction =
  | IGetErrorAction
  | IGetSignupAction
  | IGetClearErrorAction
  | IGetSignoutAction;

const authReducer = (state: IAuthState, action: TLoginReducerAction) => {
  switch (action.type) {
    case EActionTypes.SIGNIN:
      return {errorMessage: '', token: action.payload};
    case EActionTypes.SET_ERROR:
      return {...state, errorMessage: action.payload};
    case EActionTypes.CLEAR_ERROR_MESSAGE:
      return {...state, errorMessage: ''};
    case EActionTypes.SIGNOUT:
      return {token: null, errorMessage: ''};
    default:
      return state;
  }
};

const checkIsSignedIn = (
  dispatch: Dispatch<TLoginReducerAction>,
) => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({type: EActionTypes.SIGNIN, payload: token});
    navigate(INavigationRoutes.TackList, {});
  } else {
    navigate(INavigationRoutes.Signup, {});
  }
};
const clearErrorMessage = (dispatch: Dispatch<TLoginReducerAction>) => () => {
  dispatch({type: EActionTypes.CLEAR_ERROR_MESSAGE});
};
const signup = (dispatch: Dispatch<TLoginReducerAction>) => async ({
  email,
  password,
}: IAuthState) => {
  try {
    const res = await trackerApi.post('./signup', {email, password});
    await AsyncStorage.setItem('token', res.data.token);
    dispatch({type: EActionTypes.SIGNIN, payload: res.data.token});
    navigate(INavigationRoutes.TackList, {});
  } catch (err) {
    dispatch({
      type: EActionTypes.SET_ERROR,
      payload: 'Something went wrong! Please check your user credentials.',
    });
  }
};

const signin = (dispatch: Dispatch<TLoginReducerAction>) => async ({
  email,
  password,
}: IAuthState) => {
  try {
    const res = await trackerApi.post('./signin', {email, password});
    await AsyncStorage.setItem('token', res.data.token);
    dispatch({type: EActionTypes.SIGNIN, payload: res.data.token});
    navigate(INavigationRoutes.TackList, {});
  } catch (err) {
    dispatch({
      type: EActionTypes.SET_ERROR,
      payload: 'Unable to sign in,please verify your credentials.',
    });
  }
};
const signout = (dispatch: Dispatch<TLoginReducerAction>) => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({type: EActionTypes.SIGNOUT});
  navigate(INavigationRoutes.Signup, {});
};

export const {Provider, Context} = DataContext(
  authReducer,
  {signin, signout, signup, clearErrorMessage, checkIsSignedIn},
  {
    token: null,
    errorMessage: '',
  },
);
