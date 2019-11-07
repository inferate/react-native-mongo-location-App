import {EActionTypes} from '../enums/EActionTypes';
import {ITrackBaseAction} from './actionTypes';

export interface IGetSignupAction extends ITrackBaseAction {
  type: EActionTypes.SIGNUP;
  payload: string;
}

export interface IGetErrorAction extends ITrackBaseAction {
  type: EActionTypes.SET_ERROR;
  payload: string;
}
