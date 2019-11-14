import {Dispatch} from 'react';
import {IGetCurrentLocation} from '../actions';
import {EActionTypes} from '../enums/EActionTypes';
import {DataContext} from './dataContext';

type TLocationReducer = IGetCurrentLocation;

const locationReducer = (state: any, action: TLocationReducer) => {
  switch (action.type) {
    case EActionTypes.ADD_CURRENT_LOCATION:
      return {...state, currentLocation: action.payload};
    default:
      return state;
  }
};
const startRec = (dispatch: Dispatch<TLocationReducer>) => async () => {};
const stopRec = (dispatch: Dispatch<TLocationReducer>) => async () => {};
const addLocation = (dispatch: Dispatch<TLocationReducer>) => (
  location: object,
) => {
  dispatch({type: EActionTypes.ADD_CURRENT_LOCATION, payload: location});
};

export const {Context, Provider} = DataContext(
  locationReducer,
  {startRec, stopRec, addLocation},
  {rec: false, locations: [], currentLocation: null},
);
