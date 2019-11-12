import React, {useContext} from 'react';
import {
  NavigationEvents,
  NavigationParams,
  NavigationScreenProp,
} from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavigationLink from '../components/NavigationLink';
import {Context as AuthContext} from '../context/AuthContext';
import {INavigationRoutes} from '../enums/ENavigation';
import {MainBackground, ScreenWrapper} from '../styled/MainStyles';

interface ISignup {
  navigation: NavigationScreenProp<NavigationParams>;
  name: string;
}

const SigninScreen: React.FC<ISignup> = ({name}) => {
  const {state, signin, clearErrorMessage}: any = useContext(AuthContext);
  return (
    <>
      <MainBackground>
        <ScreenWrapper>
          <NavigationEvents onWillBlur={clearErrorMessage} />
          <AuthForm
            headerText="Sign in!"
            errorMessage={state.errorMessage}
            onSubmitForm={signin}
            submitButtonText="Sign in"
            name="laptop"
          />
          <NavigationLink
            textLink="Don`t have an acconut? Sign up instead."
            routeName={INavigationRoutes.Signup}
          />
        </ScreenWrapper>
      </MainBackground>
    </>
  );
};

SigninScreen.navigationOptions = {
  header: null,
};
export default SigninScreen;
