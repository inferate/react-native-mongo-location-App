import geolocation from '@react-native-community/geolocation';
import React, {useContext, useEffect, useState} from 'react';
import {Alert, PermissionsAndroid} from 'react-native';
import Map from '../components/Map';
import {Context as LocationContext} from '../context/LocationContext';
// import '../data/_mockData';
import {Heading, MainBackground, ScreenWrapper, TextError} from '../styled';

const CreateTrack: React.FC = props => {
  const [err, setErr] = useState(null);
  const {addLocation}: any = useContext(LocationContext);

  const startWatching = async () => {
    try {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      await geolocation.watchPosition(
        position => {
          addLocation(position);
        },
        err => Alert.alert(err.message),
        {
          enableHighAccuracy: true,
          timeout: 10000,
          distanceFilter: 1,
        },
      );
    } catch (err) {
      setErr(err);
    }
  };
  useEffect(() => {
    startWatching();
  }, []);

  return (
    <>
      <MainBackground>
        <Heading>Create a Track</Heading>
        <ScreenWrapper />
        <Map />
        {err ? (
          <TextError>Please enable your location services.</TextError>
        ) : null}
      </MainBackground>
    </>
  );
};

export default CreateTrack;
