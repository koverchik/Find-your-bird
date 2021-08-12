import React, { useEffect, useState } from 'react';
import { RootNavigation } from './src/Navigation/RootNavigation';
import SplashScreen from 'react-native-splash-screen';
import LottieView from 'lottie-react-native';
import { DEFAULT_LIGHT_THEME } from './src/Theme/DefaultLight.theme';
import { ThemeProvider } from './src/Theme/Theme.context';
import './src/Locales/i18n';
import { store } from './src/Redux/store';
import { Provider } from 'react-redux';

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
      <ThemeProvider initial={DEFAULT_LIGHT_THEME}>
        <RootNavigation />
      </ThemeProvider>
    </Provider>
  );
});

export default App;
