import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    Alert.alert('Success', `Email: ${email}`);
  };

  const handleGoogleSignIn = () => {
    Alert.alert('Google Sign-In', 'Google sign-in pressed');
  };

  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-1 bg-blue-600">
        <View className="flex-[3] items-center justify-center bg-blue-600">
          <Text className="text-white text-2xl font-bold">Sign In</Text>
        </View>

        <View className="flex-[7] bg-white rounded-t-3xl shadow-lg w-full p-8 pt-14">

          {/* Email input */}
          <Text className="text-gray-700 mb-2 font-semibold text-lg">Email</Text>
          <TextInput
            className="border border-gray-300 rounded-full p-3 mb-4"
            placeholder="Enter email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />

          {/* Password input */}
          <Text className="text-gray-700 mb-2 font-semibold text-lg">Password</Text>
          <TextInput
            className="border border-gray-300 rounded-full p-3 mb-6"
            placeholder="Enter password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />

          {/* Submit Button */}
          <TouchableOpacity
            className="bg-blue-600 py-3 rounded-full shadow-lg mb-4"
            onPress={handleSignUp}
          >
            <Text className="text-white text-center font-semibold text-lg">
              Sign Up
            </Text>
          </TouchableOpacity>

          {/* Already have account */}
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text className="text-center text-blue-600 font-semibold mb-6">
              Don't have an account? Sing Up
            </Text>
          </TouchableOpacity>

          {/* Google sign-in button */}
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
              Sign in with Google
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
