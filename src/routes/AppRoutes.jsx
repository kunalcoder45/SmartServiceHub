import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Auth Screens
import GetStarted from '../../screens/getStartted/getStarted';
import SignIn from '../../screens/auth/signIn/signIn';
import SignUp from '../../screens/auth/signUp/signUp';

// Bottom Tab Navigator (Navbar)
import Navbar from '../components/Navbar'; // ✅ Import your bottom tab navigator

const Stack = createNativeStackNavigator();

// 👤 Auth Stack
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

// ✅ Main App Stack with Tab Navigator
const AppStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="MainTabs" component={Navbar} />
  </Stack.Navigator>
);


// 🔁 Root Navigator
const RootNavigator = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem('token');
      setIsAuthenticated(!!token);
    };
    checkAuth();
  }, []);

  const handleAuthChange = async (value) => {
    setIsAuthenticated(value);
    if (value) {
      await AsyncStorage.setItem('token', 'dummy_token');
    } else {
      await AsyncStorage.removeItem('token');
    }
  };

  if (isAuthenticated === null){
    return null;
  }

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
