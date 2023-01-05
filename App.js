import React, { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
// import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import OnboardingScreen from './components/OnboardingScreen';

// const Stack = createNativeStackNavigator()

function App() {

    useEffect(() => {
        setTimeout(async() => {
            await SplashScreen.hideAsync();
        }, 2000)
    }, [])
  
    return (
      <OnboardingScreen/>
    );
  }

export default App