import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const Booking = ({ route, navigation }) => {
    const { serviceName } = route.params ?? {}; // handle missing params gracefully

    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    const onChange = (event, selectedDate) => {
        if (Platform.OS === 'android' && event?.type === 'dismissed') {
            setShowDatePicker(false);
            return;
        }

        if (selectedDate) {
            setDate(selectedDate);
        }

        if (Platform.OS === 'android') {
            setShowDatePicker(false);
        }
    };

    const handleConfirmBooking = () => {
        alert(`Booking confirmed for ${serviceName} on ${date.toLocaleString()}`);
        navigation.goBack();
    };

    return (
        <View className="flex-1 justify-center items-center p-6 bg-white">
            <Text className="text-xl font-bold mb-6">
                Book Service: {serviceName || 'Unknown'}
            </Text>

            <TouchableOpacity
                onPress={() => setShowDatePicker(true)}
                className="bg-blue-600 rounded-md px-4 py-3 mb-4"
            >
                <Text className="text-white text-center font-semibold">
                    Select Date & Time
                </Text>
            </TouchableOpacity>

            <Text className="mb-6 text-gray-700">
                Selected: {date.toLocaleString()}
            </Text>

            {showDatePicker && (
                <DateTimePicker
                    value={date}
                    mode={Platform.OS === 'android' ? 'date' : 'datetime'}
                    display="default"
                    onChange={onChange}
                    minimumDate={new Date()}
                />
            )}

            <TouchableOpacity
                onPress={handleConfirmBooking}
                className="bg-green-600 rounded-md px-6 py-3"
            >
                <Text className="text-white font-semibold text-center">Confirm Booking</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Booking;
