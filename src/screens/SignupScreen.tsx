import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import {NavigationParams, NavigationScreenProp} from 'react-navigation';
import {NavigationStackOptions} from 'react-navigation-stack';
import AuthForm from '../components/AuthForm';
import {Context as AuthContext} from '../context/AuthContext';
import {INavigationRoutes} from '../enums/ENavigation';
import {ScreenWrapper, TextLink, TextWrapper} from '../styled/MainStyles';

interface INavigation
  extends NavigationScreenProp<NavigationStackOptions, NavigationParams> {
  navigation: object;
  navigationOptions?: object;
}

const SignupScreen: React.FC<INavigation> = (navigation, props) => {
  const {state, signup}: any = useContext(AuthContext);
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
