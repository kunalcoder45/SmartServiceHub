// src/components/Services.jsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { services } from '../data/servicesData';

const Services = () => {
  const navigation = useNavigation();

  return (
    <View className="mt-8 px-2">
      <Text className="text-lg font-semibold text-gray-800 mb-4">Services We Offer</Text>
      <View className="flex-row flex-wrap justify-between">
        {services.map(({ icon, label, bgColor, iconColor, route }, index) => (
          <TouchableOpacity
            key={index}
            className="items-center mb-6 w-[30%]"
            onPress={() => navigation.navigate(route, { serviceName: label })}
            activeOpacity={0.7}
          >
            <View className={`${bgColor} rounded-full p-5 items-center justify-center w-20 h-20`}>
              <MaterialCommunityIcons name={icon} size={32} color={iconColor} />
            </View>
            <Text className="text-center mt-2 font-semibold text-gray-800">{label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Services;
