// src/components/MainSection.jsx

import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MainSection = () => {
  const screenHeight = Dimensions.get('window').height;
  const maxBoxHeight = 200;

  return (
    <View
      className="bg-blue-600 justify-center px-6 pb-6 pt-8 rounded-b-3xl"
      style={{
        height: screenHeight * 0.32,
        maxHeight: maxBoxHeight,
      }}
    >
      <Text className="text-white text-2xl font-bold mb-1">
        What are you looking
      </Text>
      <Text className="text-white text-2xl font-bold mb-4">for today?</Text>

      {/* Search Input + Button */}
      <View className="flex-row items-center bg-blue-500 rounded-xl overflow-hidden h-10">
        <TextInput
          placeholder="Search for services..."
          placeholderTextColor="#cbd5e1"
          className="flex-1 text-white px-4 py-1 text-sm"
        />
        <TouchableOpacity className="bg-white px-3 py-3 rounded-none">
          <MaterialCommunityIcons name="magnify" size={18} color="#1E40AF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainSection;
