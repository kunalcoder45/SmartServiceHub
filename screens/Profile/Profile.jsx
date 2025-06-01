import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { launchImageLibrary } from 'react-native-image-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { useDarkMode, themes } from '../../src/hooks/useDarkMode';

const Profile = ({ setIsAuthenticated }) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const theme = isDarkMode ? themes.dark : themes.light;

  const [imageUri, setImageUri] = useState(null);
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('userData');
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          setUser({
            name: parsedUser.name || parsedUser.username || '',
            email: parsedUser.email || '',
          });
        }
      } catch (error) {
        console.log('Error fetching user data:', error);
      }
    };
    fetchUser();
  }, []);

  const handleImagePick = () => {
    launchImageLibrary({ mediaType: 'photo' }, response => {
      if (!response.didCancel && !response.errorCode && response.assets?.length > 0) {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <SafeAreaView className={`${theme.background} flex-1 p-5`}>
      <View className="items-center mt-5">
        <TouchableOpacity onPress={handleImagePick}>
          {imageUri ? (
            <Image source={{ uri: imageUri }} className="w-32 h-32 rounded-full" />
          ) : (
            <View className="w-32 h-32 rounded-full bg-gray-300 items-center justify-center">
              <MaterialIcons name="person" size={60} color={isDarkMode ? '#bbb' : '#888'} />
            </View>
          )}
        </TouchableOpacity>

        <Text className={`${theme.textPrimary} text-xl font-bold mt-4`}>{user.name || 'No Name'}</Text>
        <Text className={`${theme.textSecondary}`}>{user.email || 'No Email'}</Text>
      </View>

      <View className="mt-10 space-y-6">
        <View className={`${theme.card} flex-row justify-between items-center p-4 rounded-xl`}>
          <Text className={`${theme.textPrimary} text-lg font-medium`}>Dark Mode</Text>
          <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
        </View>

        <TouchableOpacity
          className={`${theme.buttonPrimary} p-4 rounded-xl items-center`}
          onPress={handleLogout}
        >
          <Text className={`${theme.buttonText} text-lg font-bold`}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
