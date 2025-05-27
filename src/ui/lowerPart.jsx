import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

const LowerPart = ({ navigation }) => {
    return (
        <View className="flex-[7] justify-center items-center bg-white rounded-t-3xl shadow-lg w-full mt-[10px]">
            <Image
                source={require('../../assets/images/get.jpg')}
                className="w-80 h-80 mb-4"
                resizeMode="contain"
            />
            <Text className="text-sm font-bold text-center mt-2">
                Connecting You With Trusted Local Services
            </Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('SignUp')}
                className="bg-blue-500 px-6 py-3 rounded-full mt-4 w-96"
            >
                <Text className="text-white text-lg font-bold text-center">Get Started</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LowerPart;
