import React, { useEffect } from 'react';
import Providers from './src/navigation/index';
import SplashScreen from "react-native-splash-screen";

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])
  return <Providers />;
}

export default App;