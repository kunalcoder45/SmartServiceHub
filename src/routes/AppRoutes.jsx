import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import GetStarted from '../../screens/getStartted/getStarted';
import SignIn from '../../screens/auth/signIn/signIn';
import SignUp from '../../screens/auth/signUp/signUp';
import Home from '../../screens/home/home';

const Stack = createNativeStackNavigator();

const AuthStack = ({ setIsAuthenticated }) => (
  <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SignIn">
    <Stack.Screen name="GetStarted">
      {props => <GetStarted {...props} setIsAuthenticated={setIsAuthenticated} />}
    </Stack.Screen>
    <Stack.Screen name="SignIn">
      {props => <SignIn {...props} setIsAuthenticated={setIsAuthenticated} />}
    </Stack.Screen>
    <Stack.Screen name="SignUp">
      {props => <SignUp {...props} setIsAuthenticated={setIsAuthenticated} />}
    </Stack.Screen>
  </Stack.Navigator>
);

const AppStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

const RootNavigator = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null = loading state

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem('token');
      setIsAuthenticated(!!token); // true if token exists
    };
    checkAuth();
  }, []);

  const handleAuthChange = async (value) => {
    setIsAuthenticated(value);
    if (value) {
      await AsyncStorage.setItem('token', 'dummy_token'); // You can use real token
    } else {
      await AsyncStorage.removeItem('token');
    }
  };

  if (isAuthenticated === null) return null; // Or a loading spinner

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <AppStack />
      ) : (
        <AuthStack setIsAuthenticated={handleAuthChange} />
      )}
    </NavigationContainer>
  );
};

export default RootNavigator;
