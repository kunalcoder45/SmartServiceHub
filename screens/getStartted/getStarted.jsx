import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import UpperPart from '../../src/ui/upperPart';
import LowerPart from '../../src/ui/lowerPart';

const GetStarted = ({ navigation, setIsAuthenticated }) => {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-1 items-center justify-center bg-blue-600">
        {/* <Text className="text-xl">Welcome to SmartServiceHub</Text>
        <Button title="Sign In" onPress={() => navigation.navigate('SignIn')} />
        <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} /> */}
        <UpperPart />
        <LowerPart navigation={navigation} />
      </View>
      </SafeAreaView>
  );
};

export default GetStarted;
