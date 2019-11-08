import {NavigationParams, NavigationScreenProp} from 'react-navigation';

// interface ISignup
//   extends NavigationScreenProp<NavigationStackOptions, NavigationParams> {
//   navigation: object;
//   navigationOptions?: object;
// }

interface ISignup {
  navigation: NavigationScreenProp<NavigationParams>;
  name: string;
}
