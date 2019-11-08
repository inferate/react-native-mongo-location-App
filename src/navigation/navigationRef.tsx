import {NavigationActions} from 'react-navigation';
import {INavigationRoutes} from '../enums/ENavigation';

let navigator: any;

export const setNavigator = (nav: any) => {
  navigator = nav;
};

export const navigate = (routeName: INavigationRoutes, params: any) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
};
