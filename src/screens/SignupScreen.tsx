import React, {useContext, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {NavigationParams, NavigationScreenProp} from 'react-navigation';
import {NavigationStackOptions} from 'react-navigation-stack';
import AuthForm from '../components/AuthForm';
import {Context as AuthContext} from '../context/AuthContext';
import {ThemeContext} from '../context/ThemeContext';
import {INavigationRoutes} from '../enums/ENavigation';
import {ScreenWrapper, TextLink, TextWrapper} from '../styled/MainStyles';

interface INavigation
  extends NavigationScreenProp<NavigationStackOptions, NavigationParams> {
  navigation: object;
  navigationOptions?: object;
}

const SignupScreen: React.FC<INavigation> = (navigation, props) => {
  const {state, signup}: any = useContext(AuthContext);
  const check = state.token;
  const themeContext = useContext(ThemeContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(typeof navigation);
  return (
    <>
      <ScreenWrapper>
        <AuthForm
          headerText="Sign Up!"
          errorMessage={state.errorMessage}
          onSubmitForm={signup}
          submitButtonText="Sign up"
          name={props.name}
        />
        {/* <TextWrapper>
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
        <Button title="Sign Up!" onPress={() => signup({email, password})} /> */}
        <TouchableOpacity
          onPress={() => navigation.navigate(INavigationRoutes.Signin)}>
          <TextWrapper>
            <TextLink>Already have an account Sign in intstead.</TextLink>
          </TextWrapper>
        </TouchableOpacity>
      </ScreenWrapper>
    </>
  );
};

SignupScreen.navigationOptions = {
  header: null,
};
export default SignupScreen;
