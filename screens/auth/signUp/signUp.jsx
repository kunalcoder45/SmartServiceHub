import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import { BACKEND_URI } from '@env';

const SignUp = ({ setIsAuthenticated }) => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const REGISTER_URL = `${BACKEND_URI}/auth/register`;

  const handleSignUp = async () => {
    if (!username || !email || !password) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(REGISTER_URL, {
        name: username,
        email,
        password,
      });

      // Store token & user data
      await AsyncStorage.setItem('userToken', res.data.token);
      await AsyncStorage.setItem('userData', JSON.stringify(res.data.user));

      Alert.alert('Success', `Welcome, ${res.data.user.name || 'User'}!`);
      setIsAuthenticated(true);
      navigation.navigate('Home');
    } catch (error) {
      console.log(error.response?.data);
      Alert.alert(
        'Signup Failed',
        error.response?.data?.message || 'Something went wrong'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = () => {
    Alert.alert('Google Sign-In', 'Google sign-in pressed');
  };

  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-1 bg-blue-600">
        <View className="flex-[3] items-center justify-center bg-blue-600">
          <Text className="text-white text-2xl font-bold">Sign Up</Text>
        </View>

        <View className="flex-[7] bg-white rounded-t-3xl shadow-lg w-full p-8 pt-14">
          <Text className="text-gray-700 mb-2 font-semibold text-lg">Username</Text>
          <TextInput
            className="border border-gray-300 rounded-full p-3 mb-4"
            placeholder="Enter username"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          />

          <Text className="text-gray-700 mb-2 font-semibold text-lg">Email</Text>
          <TextInput
            className="border border-gray-300 rounded-full p-3 mb-4"
            placeholder="Enter email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />

          <Text className="text-gray-700 mb-2 font-semibold text-lg">Password</Text>
          <TextInput
            className="border border-gray-300 rounded-full p-3 mb-6"
            placeholder="Enter password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity
            className="bg-blue-600 py-3 rounded-full shadow-lg mb-4"
            onPress={handleSignUp}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text className="text-white text-center font-semibold text-lg">
                Sign Up
              </Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text className="text-center text-blue-600 font-semibold mb-6">
              Already have an account? Log in
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleGoogleSignIn}
            className="flex-row items-center justify-center border border-gray-300 rounded-full py-3 mb-4"
          >
            <Image
              source={require('../../../assets/images/google.jpg')}
              className="w-6 h-6 mr-2"
              resizeMode="contain"
            />
            <Text className="text-gray-700 font-semibold text-lg">
              Sign Up with Google
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
