import React, {useContext, useState} from 'react';
import {Button} from 'react-native';
import {Input} from 'react-native-elements';
import {ThemeContext} from '../context/ThemeContext';
import {IAuthFormProps} from '../models/IAuthForm';
import {GetIcon, Heading, TextError, TextWrapper} from '../styled';

const AuthForm: React.FC<IAuthFormProps> = ({
  headerText,
  errorMessage,
  onSubmitForm,
  name,
  submitButtonText,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const themeContext = useContext(ThemeContext);

  return (
    <>
      <TextWrapper>
        <Heading>{headerText}</Heading>
        <GetIcon name={name} color={themeContext.icons.main} />
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
      {errorMessage ? <TextError>{errorMessage}</TextError> : null}
      <Button
        title={submitButtonText}
        onPress={() => onSubmitForm({email, password})}
      />
    </>
  );
};

export default AuthForm;
