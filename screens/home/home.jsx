import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MainSection from '../../src/components/MainSection';
import ImageSlider from '../../src/components/ImageSlider';
import Services from '../../src/components/Services';
import { useDarkMode, themes } from '../../src/hooks/useDarkMode';

const TAB_BAR_HEIGHT = 60;

const Home = () => {
  const { isDarkMode } = useDarkMode();
  const theme = isDarkMode ? themes.dark : themes.light;

  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView className={`flex-1 ${theme.background}`}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: TAB_BAR_HEIGHT + insets.bottom,
          paddingTop: insets.top,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        }}
      >
        <MainSection />

        <View style={{ padding: 20 }}>
          <ImageSlider />
          <Services />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
