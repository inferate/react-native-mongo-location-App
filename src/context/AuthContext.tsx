import AsyncStorage from '@react-native-community/async-storage';
import {Dispatch} from 'react';
import {IGetErrorAction, IGetSignupAction} from '../actions';
import trackerApi from '../api/trackerApi';
import {EActionTypes} from '../enums/EActionTypes';
import {INavigationRoutes} from '../enums/ENavigation';
import {IAuthState} from '../models/IAuthState';
import {navigate} from '../navigation/navigationRef';
import {DataContext} from './dataContext';

type TLoginReducerAction = IGetErrorAction | IGetSignupAction;

const authReducer = (state: IAuthState, action: TLoginReducerAction) => {
  console.log(typeof state.token);
  switch (action.type) {
    case EActionTypes.SIGNUP:
      return {errorMessage: '', token: action.payload};
    case EActionTypes.SET_ERROR:
      return {...state, errorMessage: action.payload};
    default:
      return state;
  }
};

const signup = (dispatch: Dispatch<TLoginReducerAction>) => async ({
  email,
  password,
}: IAuthState) => {
  try {
    const res = await trackerApi.post('./signup', {email, password});
    await AsyncStorage.setItem('token', res.data.token);
    navigate(INavigationRoutes.TackList, {});
  } catch (err) {
    dispatch({
      type: EActionTypes.SET_ERROR,
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
    token: null,
    errorMessage: '',
  },
);
