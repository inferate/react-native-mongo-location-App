import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

interface IDefaultButtonProps {
  backgroundColor: string;
  onPress: () => void;
}

interface IDefaultButtonText {
  title?: string;
}
const ButtonContainer = styled(TouchableOpacity)<IDefaultButtonProps>`
  width: 80%;
  height: 40px;
  align-self: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${props =>
    props.backgroundColor ? props.theme.icons.main : props.theme.icons.main};
`;

const ButtonText = styled(Text)<IDefaultButtonText>`
  font-size: 18px;
  text-align: center;
`;

export const CustomButton: React.FC<
  IDefaultButtonProps & IDefaultButtonText
> = props => (
  <ButtonContainer
    backgroundColor={props.backgroundColor}
    onPress={props.onPress}>
    <ButtonText>{props.title}</ButtonText>
  </ButtonContainer>
);
