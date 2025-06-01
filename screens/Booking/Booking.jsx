// File: screens/booking/Booking.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import DateTimePicker from '../../src/components/DateTimePickerComponent';

const Booking = ({ route, navigation }) => {
    const params = route?.params || {};
    const { serviceName } = params;

    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleConfirmBooking = () => {
        Alert.alert(
            'Booking Confirmed! ✅',
            `Service: ${serviceName}\nDate: ${date.toLocaleDateString()}\nTime: ${date.toLocaleTimeString()}`,
            [
                {
                    text: 'OK',
                    onPress: () => {
                        if (navigation.canGoBack()) {
                            navigation.goBack();
                        } else {
                            navigation.navigate('MainTabs');
                        }
                    },
                },
            ]
        );
    };

    const formatDateTime = (dateObj) => {
        const options = {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        };
        return dateObj.toLocaleDateString('en-US', options);
    };

    return (
        <View className="flex-1 justify-center items-center p-6 bg-white">
            <Text className="text-xl font-bold mb-6 text-center">
                Book Service: {serviceName || 'Service'}
            </Text>

            {/* Date & Time Picker Open Button */}
            <TouchableOpacity
                onPress={() => setShowDatePicker(true)}
                className="bg-blue-600 rounded-md px-6 py-4 mb-6 w-full max-w-xs"
            >
                <Text className="text-white text-center font-semibold">
                    📅 Select Date & Time
                </Text>
            </TouchableOpacity>

            {/* Display selected date & time */}
            <View className="bg-gray-100 rounded-md p-4 mb-6 w-full max-w-xs">
                <Text className="text-gray-600 text-center text-sm mb-1">Selected:</Text>
                <Text className="text-gray-800 font-semibold text-center">
                    {formatDateTime(date)}
                </Text>
            </View>

            {/* Custom DateTime Picker */}
            <DateTimePicker
                visible={showDatePicker}
                value={date}
                onConfirm={(selectedDate) => setDate(selectedDate)}
                onClose={() => setShowDatePicker(false)}
            />

            {/* Action Buttons */}
            <View className="w-full max-w-xs space-y-3">
                <TouchableOpacity
                    onPress={handleConfirmBooking}
                    className="bg-green-600 rounded-md px-6 py-4"
                >
                    <Text className="text-white font-semibold text-center">
                        ✅ Confirm Booking
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    className="bg-gray-500 rounded-md px-6 py-3"
                >
                    <Text className="text-white text-center">
                        ❌ Cancel
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Booking;
