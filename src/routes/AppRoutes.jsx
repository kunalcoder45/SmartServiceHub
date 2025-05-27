import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GetStarted from '../../screens/getStartted/getStarted';
import SignIn from '../../screens/auth/signIn/signIn';
import SignUp from '../../screens/auth/signUp/signUp';

const Stack = createNativeStackNavigator();

const AppRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="GetStarted" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default AppRoutes;
