import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001;

export const getLocation = (increment: any) => {
  return {
    timestamp: 1000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude: 45.1098 + increment * tenMetersWithDegrees,
      latitude: 7.6412 + increment * tenMetersWithDegrees,
    },
  };
};
let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit('Expo.locationChanged', {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter),
  });
  counter++;
  // console.log(getLocation(counter));
}, 1000);
