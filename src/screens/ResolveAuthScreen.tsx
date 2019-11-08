import {useContext, useEffect} from 'react';
import {Context as AuthContext} from '../context/AuthContext';

export const ResolveAuthScreen = () => {
  const {checkIsSignedIn}: any = useContext(AuthContext);
  useEffect(() => {
    checkIsSignedIn();
  }, []);
  return null;
};
