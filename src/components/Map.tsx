import React, {useContext} from 'react';
import {ActivityIndicator} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Context as LocationContext} from '../context/LocationContext';

const Map: React.FC = () => {
  const {
    state: {currentLocation},
  }: any = useContext(LocationContext);

  console.log({...currentLocation});
  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{marginTop: 200}} />;
  }

  return (
    <>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{height: 300}}
        initialRegion={{
          ...currentLocation.coords,
          ...currentLocation.coords,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
        region={{
          ...currentLocation.coords,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
      />
    </>
  );
};

export default Map;
