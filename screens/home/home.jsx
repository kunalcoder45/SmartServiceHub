// src/screens/Home.jsx

import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, View } from 'react-native';
import MainSection from '../../src/components/MainSection';
import ImageSlider from '../../src/components/ImageSlider';
import Services from '../../src/components/Services';
// import Navbar from '../../src/components/Navbar';

const Home = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* Top Blue Header Section */}
        <MainSection />

        {/* Body Section */}
        <View className="p-5">
          <ImageSlider />
          <Services />
          {/* <Navbar /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
