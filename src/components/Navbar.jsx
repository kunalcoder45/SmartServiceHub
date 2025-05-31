import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styled } from 'nativewind';

import Home from '../../screens/home/home';
import Booking from '../../screens/Booking/Booking';
import Profile from '../../screens/Profile/Profile';

const tabs = [
  { name: 'Home', icon: 'home', component: Home },
  { name: 'Booking', icon: 'event', component: Booking },
  { name: 'Profile', icon: 'person', component: Profile },
];

// Styled components for nativewind
const SafeArea = styled(SafeAreaView);
const Container = styled(View);
const TabBar = styled(View);
const TabButton = styled(TouchableOpacity);
const TabText = styled(Text);

const Navbar = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Home');

  const ActiveComponent = tabs.find(tab => tab.name === activeTab)?.component || Home;

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <SafeArea className="flex-1 bg-gray-50" edges={['bottom']}>
      {/* Screen content */}
      <Container className="flex-1 bg-black">
        <ActiveComponent navigation={navigation} />

        {/* Bottom tab bar */}
        <TabBar className="flex-row h-14 bg-white border-t border-gray-200 justify-around items-center shadow-md">
          {tabs.map(tab => (
            <TabButton
              key={tab.name}
              onPress={() => handleTabPress(tab.name)}
              className="flex-1 items-center justify-center py-1"
              activeOpacity={0.7}
            >
              <MaterialIcons
                name={tab.icon}
                size={26}
                color={activeTab === tab.name ? '#2563EB' : '#9CA3AF'}
              />
              <TabText
                className={`text-xs font-semibold mt-1 ${activeTab === tab.name ? 'text-blue-600' : 'text-gray-400'
                  }`}
              >
                {tab.name}
              </TabText>
            </TabButton>
          ))}
        </TabBar>
      </Container>
    </SafeArea>
  );

};

export default Navbar;
