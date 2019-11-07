import React from 'react';
import {Button} from 'react-native-elements';
import {NavigationParams, NavigationScreenProp} from 'react-navigation';
import {Heading} from '../styled';

interface INavigation {
  navigation: NavigationScreenProp<NavigationParams>;
}

const SigninScreen: React.FC<INavigation> = ({navigation}) => {
  return (
    <>
      <Heading>Sign in</Heading>
      <Button title="GO To SIn" onPress={() => navigation.navigate('Signup')} />
    </>
  );
};

export default SigninScreen;
