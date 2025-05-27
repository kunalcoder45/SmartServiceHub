import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './src/routes/AppRoutes';
import { SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </SafeAreaView>
  );
}
