// AppTabs.js (naya file bana le ya RootNavigator me daal de)
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from '../../screens/home/home';
import ServicesScreen from '../../src/components/Services';
import ProfileScreen from '../../screens/Profile/Profile';

const Tab = createBottomTabNavigator();

const AppTabs = ({ setIsAuthenticated }) => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: '#007AFF',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    height: 90,
                    paddingBottom: 90,  // thoda bada padding
                    paddingTop: 5,
                },
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

export default AppTabs;
