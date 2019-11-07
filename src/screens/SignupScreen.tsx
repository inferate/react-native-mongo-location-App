import React, {useContext, useState} from 'react';
import {Button, Input} from 'react-native-elements';
import {
  NavigationScreenComponent,
  NavigationScreenProp,
} from 'react-navigation';
import {Context as AuthContext} from '../context/AuthProvider';
import {ThemeContext} from '../context/ThemeContext';
import {
  GetIcon,
  Heading,
  ScreenWrapper,
  TextError,
  TextWrapper,
} from '../styled/MainStyles';

interface INavigation extends NavigationScreenProp<{}> {
  navigation: {};
  navigationOptions: {};
}

const SignupScreen: NavigationScreenComponent<{}, INavigation> = (
  props,
  {navigation},
) => {
  const {state, signup}: any = useContext(AuthContext);
  const themeContext = useContext(ThemeContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <ScreenWrapper>
        <TextWrapper>
          <Heading>Sign Up</Heading>
          <GetIcon name={props.name} color={themeContext.icons.main} />
        </TextWrapper>
        <Input
          label="email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}></Input>
        <Input
          secureTextEntry
          label="password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}></Input>
        {state.errorMessage ? (
          <TextError>{state.errorMessage}</TextError>
        ) : null}
        <Button title="Sign Up!" onPress={() => signup({email, password})} />
      </ScreenWrapper>
    </>
  );
};

SignupScreen.navigationOptions = {
  header: null,
};
export default SignupScreen;
