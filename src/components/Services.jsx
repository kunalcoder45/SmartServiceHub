import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { useDarkMode } from '../hooks/useDarkMode';
import { services } from '../data/servicesData';

const Services = () => {
  const navigation = useNavigation();
  const { isDarkMode } = useDarkMode();

  const theme = {
    background: isDarkMode ? 'bg-black' : 'bg-white',  // dark mode me pure black background
    text: isDarkMode ? 'text-white' : 'text-gray-800',
  };

  const handleServicePress = (service) => {
    navigation.navigate('Booking', {
      serviceName: service.label,
      serviceIcon: service.icon,
      serviceColor: service.iconColor,
    });
  };

  return (
    <View className={`mt-8 px-2 ${theme.background}`}>
      <Text className={`${theme.text} text-lg font-semibold mb-4`}>Services We Offer</Text>
      <View className="flex-row flex-wrap justify-between">
        {services.map((service, index) => (
          <TouchableOpacity
            key={index}
            className="items-center mb-6 w-[30%]"
            onPress={() => handleServicePress(service)}
            activeOpacity={0.7}
          >
            {/* service.bgColor ko dark mode me bhi waisa hi chhodo */}
            <View className={`${service.bgColor} rounded-full p-5 items-center justify-center w-20 h-20`}>
              <MaterialCommunityIcons
                name={service.icon}
                size={32}
                color={service.iconColor}
              />
            </View>
            <Text className={`${theme.text} text-center mt-2 font-semibold`}>
              {service.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Services;
