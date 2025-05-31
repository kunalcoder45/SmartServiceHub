import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { launchImageLibrary } from 'react-native-image-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Profile = ({ navigation }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [imageUri, setImageUri] = useState(null);

  const user = {
    name: 'John Doe',
    email: 'john@example.com',
  };

  const handleImagePick = () => {
    launchImageLibrary({ mediaType: 'photo' }, response => {
      if (!response.didCancel && !response.errorCode && response.assets?.length > 0) {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  const handleLogout = () => {
    // clear tokens etc
    navigation.replace('SignIn');
  };

  return (
    <SafeAreaView className="flex-1 bg-white p-5">
      <View className="items-center mt-5">
        <TouchableOpacity onPress={handleImagePick}>
          {imageUri ? (
            <Image
              source={{ uri: imageUri }}
              className="w-32 h-32 rounded-full"
            />
          ) : (
            <View className="w-32 h-32 rounded-full bg-gray-300 items-center justify-center">
              <MaterialIcons name="person" size={60} color="#888" />
            </View>
          )}
        </TouchableOpacity>

        <Text className="text-xl font-bold mt-4">{user.name}</Text>
        <Text className="text-gray-600">{user.email}</Text>
      </View>

      <View className="mt-10 space-y-6">
        <View className="flex-row justify-between items-center bg-gray-100 p-4 rounded-xl">
          <Text className="text-lg font-medium">Dark Mode</Text>
          <Switch
            value={darkMode}
            onValueChange={() => setDarkMode(!darkMode)}
          />
        </View>

        <TouchableOpacity
          className="bg-red-500 p-4 rounded-xl items-center"
          onPress={handleLogout}
        >
          <Text className="text-white text-lg font-bold">Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
