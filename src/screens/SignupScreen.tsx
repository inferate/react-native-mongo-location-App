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

const SignupScreen: React.FC<ISignup> = ({name}) => {
  const {state, signup, clearErrorMessage}: any = useContext(AuthContext);

  console.log(state);
  return (
    <>
      <MainBackground>
        <ScreenWrapper>
          <NavigationEvents onWillBlur={clearErrorMessage} />
          <AuthForm
            headerText="Sign Up!"
            errorMessage={state.errorMessage}
            onSubmitForm={signup}
            submitButtonText="Sign up"
            name={name}
          />
          <NavigationLink
            textLink="Already have an acconut? Sign in instead."
            routeName={INavigationRoutes.Signin}
          />
        </ScreenWrapper>
      </MainBackground>
    </>
  );
};

SignupScreen.navigationOptions = {
  header: null,
};
export default SignupScreen;
