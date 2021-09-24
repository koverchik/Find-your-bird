import React, { useEffect, useState } from 'react';
import SplashScreen from 'react-native-splash-screen';
import LottieView from 'lottie-react-native';
import './src/Locales/i18n';
import { store, persist } from './src/Redux/store';
import { Provider } from 'react-redux';
import { WrapperRootNavigation } from './src/Screen/WrapperRootNavigation';
import { PersistGate } from 'redux-persist/integration/react';
import Config from 'react-native-config';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const App = React.memo(() => {
  const [isSplashAnimation, setIsSplashAnimation] = useState(false);

  useEffect(() => {
    SplashScreen.hide();
    setIsSplashAnimation(true);
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: Config.WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: false, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      hostedDomain: '', // specifies a hosted domain restriction
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      accountName: '', // [Android] specifies an account name on the device that should be used
    });
  }, []);

  return isSplashAnimation ? (
    <LottieView
      source={require('@assets/animation.json')}
      autoPlay
      loop={false}
      onAnimationFinish={() => {
        setIsSplashAnimation(false);
      }}
    />
  ) : (
    <Provider store={store}>
      <PersistGate persistor={persist}>
        <WrapperRootNavigation />
      </PersistGate>
    </Provider>
  );
});

export default App;
