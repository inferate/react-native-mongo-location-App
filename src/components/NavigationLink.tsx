import React from 'react';
import {TouchableOpacity} from 'react-native';
import {
  NavigationInjectedProps,
  NavigationScreenProp,
  withNavigation,
} from 'react-navigation';
import {TextLink, TextWrapper} from '../styled/MainStyles';

interface INavLink extends NavigationInjectedProps {
  navigation: NavigationScreenProp<any>;
  textLink: string;
  routeName: any;
}

const NavigationLink: React.FC<INavLink> = ({
  textLink,
  navigation,
  routeName,
}) => {
  // const {navigate} = props.navigation;
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <TextWrapper>
        <TextLink>{textLink}</TextLink>
      </TextWrapper>
    </TouchableOpacity>
  );
};

export default withNavigation(NavigationLink);
