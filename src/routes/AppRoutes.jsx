// import React, { useState, useEffect } from 'react';
// import { View, ActivityIndicator } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { DarkModeProvider } from '../context/DarkModeContext';

// // Auth Screens
// import GetStarted from '../../screens/getStartted/getStarted';
// import SignIn from '../../screens/auth/signIn/signIn';
// import SignUp from '../../screens/auth/signUp/signUp';

// // Main Screens
// import HomeScreen from '../../screens/home/home';
// import ServicesScreen from '../../src/components/Services';
// import ProfileScreen from '../../screens/Profile/Profile';
// import BookingScreen from '../../screens/Booking/Booking';

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// // Loading Component
// const LoadingScreen = () => (
//   <View className="flex-1 justify-center items-center bg-white">
//     <ActivityIndicator size="large" color="#0000ff" />
//   </View>
// );

// // Bottom Tab Navigator
// const renderTabBarIcon = ({ route }) => ({ focused, color, size }) => {
//   let iconName;

//   if (route.name === 'Home') {
//     iconName = focused ? 'home' : 'home-outline';
//   } else if (route.name === 'Services') {
//     iconName = focused ? 'list' : 'list-outline';
//   } else if (route.name === 'Profile') {
//     iconName = focused ? 'person' : 'person-outline';
//   }

//   return <Icon name={iconName} size={size} color={color} />;
// };

// // *** IMPORTANT: setIsAuthenticated is passed as prop here ***
// const TabNavigator = ({ setIsAuthenticated }) => {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: renderTabBarIcon({ route }),
//         tabBarActiveTintColor: '#007AFF',
//         tabBarInactiveTintColor: 'gray',
//         headerShown: false,
//       })}
//     >
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Services" component={ServicesScreen} />
//       <Tab.Screen name="Profile">
//         {(props) => (
//           <ProfileScreen {...props} setIsAuthenticated={setIsAuthenticated} />
//         )}
//       </Tab.Screen>
//     </Tab.Navigator>
//   );
// };

// // Auth Stack Navigator
// const AuthStack = ({ setIsAuthenticated }) => (
//   <Stack.Navigator
//     screenOptions={{ headerShown: false }}
//     initialRouteName="GetStarted"
//   >
//     <Stack.Screen name="GetStarted">
//       {(props) => (
//         <GetStarted {...props} setIsAuthenticated={setIsAuthenticated} />
//       )}
//     </Stack.Screen>
//     <Stack.Screen name="SignIn">
//       {(props) => (
//         <SignIn {...props} setIsAuthenticated={setIsAuthenticated} />
//       )}
//     </Stack.Screen>
//     <Stack.Screen name="SignUp">
//       {(props) => (
//         <SignUp {...props} setIsAuthenticated={setIsAuthenticated} />
//       )}
//     </Stack.Screen>
//   </Stack.Navigator>
// );

// // Main App Stack Navigator
// // *** Accept setIsAuthenticated as prop and pass to TabNavigator ***
// const AppStack = ({ setIsAuthenticated }) => (
//   <Stack.Navigator screenOptions={{ headerShown: false }}>
//     <Stack.Screen name="MainTabs" options={{ headerShown: false }}>
//       {(props) => (
//         <TabNavigator {...props} setIsAuthenticated={setIsAuthenticated} />
//       )}
//     </Stack.Screen>

//     <Stack.Screen
//       name="Booking"
//       component={BookingScreen}
//       options={{
//         presentation: 'modal',
//         headerShown: true,
//         title: 'Book Service',
//         headerStyle: { backgroundColor: '#f8f9fa' },
//         headerTintColor: '#000',
//       }}
//     />
//   </Stack.Navigator>
// );

// // Root Navigator
// const RootNavigator = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(null);

//   useEffect(() => {
//     checkAuthStatus();
//   }, []);

//   const checkAuthStatus = async () => {
//     try {
//       const token = await AsyncStorage.getItem('userToken');
//       setIsAuthenticated(!!token);
//     } catch (error) {
//       console.error('Error checking auth status:', error);
//       setIsAuthenticated(false);
//     }
//   };

//   const handleAuthChange = async (value) => {
//     try {
//       setIsAuthenticated(value);
//       if (value) {
//         await AsyncStorage.setItem('userToken', 'authenticated_user_token');
//       } else {
//         await AsyncStorage.removeItem('userToken');
//       }
//     } catch (error) {
//       console.error('Error handling auth change:', error);
//     }
//   };

//   if (isAuthenticated === null) {
//     return <LoadingScreen />;
//   }

//   return (
//     <DarkModeProvider>
//       <NavigationContainer>
//         {isAuthenticated ? (
//           // *** Pass setIsAuthenticated prop here ***
//           <AppStack setIsAuthenticated={handleAuthChange} />
//         ) : (
//           <AuthStack setIsAuthenticated={handleAuthChange} />
//         )}
//       </NavigationContainer>
//     </DarkModeProvider>
//   );
// };

// export default RootNavigator;
import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DarkModeProvider } from '../context/DarkModeContext';

import GetStarted from '../../screens/getStartted/getStarted';
import SignIn from '../../screens/auth/signIn/signIn';
import SignUp from '../../screens/auth/signUp/signUp';
import ProfileScreen from '../../screens/Profile/Profile';
import BookingScreen from '../../screens/Booking/Booking';

import AppTabs from './AppTabs';  // Jo upar banaya

const Stack = createNativeStackNavigator();

const LoadingScreen = () => (
  <View className="flex-1 justify-center items-center bg-white">
    <ActivityIndicator size="large" color="#0000ff" />
  </View>
);

// Auth stack
const AuthStack = ({ setIsAuthenticated }) => (
  <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="GetStarted">
    <Stack.Screen name="GetStarted">
      {(props) => <GetStarted {...props} setIsAuthenticated={setIsAuthenticated} />}
    </Stack.Screen>
    <Stack.Screen name="SignIn">
      {(props) => <SignIn {...props} setIsAuthenticated={setIsAuthenticated} />}
    </Stack.Screen>
    <Stack.Screen name="SignUp">
      {(props) => <SignUp {...props} setIsAuthenticated={setIsAuthenticated} />}
    </Stack.Screen>
  </Stack.Navigator>
);

// Root navigator
const RootNavigator = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      setIsAuthenticated(!!token);
    } catch (error) {
      console.error('Error checking auth status:', error);
      setIsAuthenticated(false);
    }
  };

  const handleAuthChange = async (value) => {
    try {
      setIsAuthenticated(value);
      if (value) {
        await AsyncStorage.setItem('userToken', 'authenticated_user_token');
      } else {
        await AsyncStorage.removeItem('userToken');
      }
    } catch (error) {
      console.error('Error handling auth change:', error);
    }
  };

  if (isAuthenticated === null) {
    return <LoadingScreen />;
  }

  return (
    <DarkModeProvider>
      <NavigationContainer>
        {isAuthenticated ? (
          <AppTabs setIsAuthenticated={handleAuthChange} />
        ) : (
          <AuthStack setIsAuthenticated={handleAuthChange} />
        )}
      </NavigationContainer>
    </DarkModeProvider>
  );
};

export default RootNavigator;
