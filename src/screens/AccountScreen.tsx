import React, {useContext} from 'react';
import {Button} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';
import {Heading, ScreenWrapper, TextWrapper} from '../styled';

const AccountScreen: React.FC = () => {
  const {signout}: any = useContext(AuthContext);

  return (
    <ScreenWrapper>
      <Heading>Account Screen</Heading>
      <TextWrapper />
      <Button title="Sign out" onPress={signout} />
    </ScreenWrapper>
  );
};

export default AccountScreen;
