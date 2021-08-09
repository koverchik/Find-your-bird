import React, { useEffect, useState } from 'react';
import { RootNavigation } from './src/Navigation/RootNavigation';
import SplashScreen from 'react-native-splash-screen';
import LottieView from 'lottie-react-native';

const App = () => {
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
        <RootNavigation />
    );
};

export default App;
