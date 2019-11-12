import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components';

interface IIcon {
  name: string;
  color: string;
}

export const CustomIcon = styled(Icon)`
  padding: 10px;
  text-align: center;
  color: ${props =>
    props.color ? props.theme.icons.main : props.theme.icons.default};
`;

export const GetIcon = (props: IIcon) => {
  return (
    <CustomIcon
      name={props.name ? 'laptop' : 'home'}
      size={50}
      color={props.color}
    />
  );
};
export const TextWrapper = styled(View)`
  margin: 15px;
`;

export const ScreenWrapper = styled(View)`
  flex: 1;
  justify-content: center;
  margin-bottom: 12%;
  align-self: center;
  width: 80%;
`;

export const Heading = styled(Text)`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;

/* fix the strings-colors should come from the theme*/

export const TextError = styled(Text)`
  font-size:16px;
  color:#F4052B
  text-align:center;
  margin:3px
  
`;
export const TextLink = styled(Text)`
  color: ${props => props.theme.textStyle.thirdy};
  font-size: 18px;
  flex-wrap: nowrap;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
`;

export const MainBackground = styled(View)`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.backgroundStyle.primary};
`;
