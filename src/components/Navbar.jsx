// import React, { useState } from 'react';
// import { View, TouchableOpacity, Text } from 'react-native';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { styled } from 'nativewind';

// import Home from '../../screens/home/home';
// import Booking from '../../screens/Booking/Booking';
// import Profile from '../../screens/Profile/Profile';

// import { useDarkMode } from '../hooks/useDarkMode';  // import your hook

// const tabs = [
//   { name: 'Home', icon: 'home', component: Home },
//   { name: 'Booking', icon: 'event', component: Booking },
//   { name: 'Profile', icon: 'person', component: Profile },
// ];

// const SafeArea = styled(SafeAreaView);
// const Container = styled(View);
// const TabBar = styled(View);
// const TabButton = styled(TouchableOpacity);
// const TabText = styled(Text);

// const Navbar = ({ navigation }) => {
//   const [activeTab, setActiveTab] = useState('Home');
//   const ActiveComponent = tabs.find(tab => tab.name === activeTab)?.component || Home;

//   const { isDarkMode } = useDarkMode();

//   // Colors for light and dark mode
//   const backgroundColor = isDarkMode ? 'bg-black' : 'bg-white';
//   const safeAreaBg = isDarkMode ? 'bg-black' : 'bg-gray-50';
//   const tabBarBg = isDarkMode ? 'bg-gray-900' : 'bg-white';
//   const borderColor = isDarkMode ? 'border-gray-700' : 'border-gray-200';

//   // Colors for active/inactive icons and text
//   const activeColor = isDarkMode ? '#60A5FA' : '#2563EB';       // blue shades
//   const inactiveColor = isDarkMode ? '#6B7280' : '#9CA3AF';     // gray shades
//   const activeText = isDarkMode ? 'text-blue-400' : 'text-blue-600';
//   const inactiveText = isDarkMode ? 'text-gray-400' : 'text-gray-400';

//   return (
//     <SafeArea className={`${safeAreaBg} flex-1`} edges={['bottom']}>
//       <Container className={`flex-1 ${backgroundColor}`}>
//         <ActiveComponent navigation={navigation} />
//         <TabBar className={`flex-row h-14 ${tabBarBg} border-t ${borderColor} justify-around items-center shadow-md`}>
//           {tabs.map(tab => (
//             <TabButton
//               key={tab.name}
//               onPress={() => setActiveTab(tab.name)}
//               className="flex-1 items-center justify-center py-1"
//               activeOpacity={0.7}
//             >
//               <MaterialIcons
//                 name={tab.icon}
//                 size={26}
//                 color={activeTab === tab.name ? activeColor : inactiveColor}
//               />
//               <TabText className={`text-xs font-semibold mt-1 ${activeTab === tab.name ? activeText : inactiveText}`}>
//                 {tab.name}
//               </TabText>
//             </TabButton>
//           ))}
//         </TabBar>
//       </Container>
//     </SafeArea>
//   );
// };

// // export default Navbar;
// import React from 'react';
// import { useColorScheme } from 'react-native';
// import { createBottomTabNavigator }  from '@react-navigation/bottom-tabs';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// import Home from '../../screens/home/home';
// import Services from '../../screens/Services/Services';
// import Profile from '../../screens/Profile/Profile';

// const Tab = createBottomTabNavigator();

// const Navbar = () => {
//   const scheme = useColorScheme();
//   const isDarkMode = scheme === 'dark';

//   const activeColor = isDarkMode ? '#60A5FA' : '#2563EB'; // light blue / dark blue
//   const inactiveColor = isDarkMode ? '#6B7280' : '#9CA3AF'; // gray shades
//   const backgroundColor = isDarkMode ? '#000' : '#FFF';

//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         headerShown: false,
//         tabBarActiveTintColor: activeColor,
//         tabBarInactiveTintColor: inactiveColor,
//         tabBarStyle: {
//           backgroundColor: backgroundColor,
//           borderTopColor: isDarkMode ? '#374151' : '#E5E7EB',
//           height: 60,
//           paddingBottom: 6,
//           paddingTop: 6,
//         },
//         tabBarIcon: ({ color, size }) => {
//           let iconName;
//           if (route.name === 'Home') iconName = 'home';
//           else if (route.name === 'Services') iconName = 'build';
//           else if (route.name === 'Profile') iconName = 'person';

//           return <MaterialIcons name={iconName} size={size} color={color} />;
//         },
//         tabBarLabelStyle: {
//           fontSize: 12,
//           fontWeight: '600',
//         },
//       })}
//     >
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name="Services" component={Services} />
//       <Tab.Screen name="Profile" component={Profile} />
//     </Tab.Navigator>
//   );
// };

// export default Navbar;
// Navbar.jsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

// Screens (import your screens here)
import HomeScreen from '../../screens/home/home';
import ServicesScreen from '../../src/components/Services';
import ProfileScreen from '../../screens/Profile/Profile';

const Tab = createBottomTabNavigator();

const Navbar = ({ setIsAuthenticated }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Services') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Services" component={ServicesScreen} />
      <Tab.Screen name="Profile">
        {(props) => <ProfileScreen {...props} setIsAuthenticated={setIsAuthenticated} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default Navbar;
