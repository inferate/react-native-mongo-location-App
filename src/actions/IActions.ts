import {EActionTypes} from '../enums/EActionTypes';
import {ITrackBaseAction} from './actionTypes';

export interface IGetSignupAction extends ITrackBaseAction {
  type: EActionTypes.SIGNIN;
  payload: string;
}

export interface IGetErrorAction extends ITrackBaseAction {
  type: EActionTypes.SET_ERROR;
  payload: string;
}

export interface IGetClearErrorAction extends ITrackBaseAction {
  type: EActionTypes.CLEAR_ERROR_MESSAGE;
}

export interface IGetSignoutAction extends ITrackBaseAction {
  type: EActionTypes.SIGNOUT;
}
