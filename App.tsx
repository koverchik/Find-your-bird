import React, { useEffect, useState } from 'react';
import SplashScreen from 'react-native-splash-screen';
import LottieView from 'lottie-react-native';
import './src/Locales/i18n';
import { store, persistor } from './src/Redux/store';
import { Provider } from 'react-redux';
import { WrapperRootNavigation } from './src/Screen/WrapperRootNavigation';
import { PersistGate } from 'redux-persist/integration/react';

const App = React.memo(() => {
  const [isSplashAnimation, setIsSplashAnimation] = useState(false);

  useEffect(() => {
    SplashScreen.hide();
    setIsSplashAnimation(true);
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
      <PersistGate persistor={persistor}>
        <WrapperRootNavigation />
      </PersistGate>
    </Provider>
  );
});

export default App;
