import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StarNavigation from './routes/Stacks';
import { SafeAreaView } from 'react-native';

export default function App() {
  return (
    <React.Fragment>
      <SafeAreaView>
        <StatusBar style="light" />
      </SafeAreaView>
      <NavigationContainer>
        <StarNavigation />
      </NavigationContainer>
    </React.Fragment>
  );
}

