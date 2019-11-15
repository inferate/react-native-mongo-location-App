import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {ThemeProvider} from 'styled-components';
import {Provider as AuthProvider} from './src/context/AuthContext';
import {Provider as LocationProvider} from './src/context/LocationContext';
import {setNavigator} from './src/navigation/navigationRef';
import AccountScreen from './src/screens/AccountScreen';
import CreateTrack from './src/screens/CreateTrack';
import {ResolveAuthScreen} from './src/screens/ResolveAuthScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackList from './src/screens/TrackList';
import {theme} from './src/styled/withTheme';

// interface INavigation{
//   switchNavigator:NavigationStackProp<NavigationParams, any>

// }
const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  login: createStackNavigator(
    {
      Signin: SigninScreen,
      Signup: SignupScreen,
    },
    {
      defaultNavigationOptions: {
        header: null,
      },
    },
  ),
  main: createBottomTabNavigator({
    trackFlow: createStackNavigator({
      TrackList: TrackList,
    }),
    CreateTrack: CreateTrack,
    Account: AccountScreen,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <LocationProvider>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <App
            ref={navigator => {
              setNavigator(navigator);
            }}
          />
        </ThemeProvider>
      </AuthProvider>
    </LocationProvider>
  );
};
