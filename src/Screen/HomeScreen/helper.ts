import { PermissionsAndroid } from 'react-native';

export const requestLocationPermission = async () => {
  try {
    await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION);
  } catch (err) {
    console.warn(err);
  }
};
