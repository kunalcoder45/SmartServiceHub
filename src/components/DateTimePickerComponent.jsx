// datetimepicker.jsx
import React, { useState } from 'react';
import { Platform, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DateTimePickerComponent = ({ visible, onClose, value, onConfirm }) => {
  const [tempDate, setTempDate] = useState(value || new Date());
  const [showTime, setShowTime] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    if (event.type === 'dismissed') {
      onClose();
      return;
    }

    setTempDate(selectedDate || tempDate);

    if (Platform.OS === 'android') {
      setShowTime(true);
    }
  };

  const handleTimeChange = (event, selectedTime) => {
    if (event.type === 'dismissed') {
      onClose();
      return;
    }

    const updatedDate = new Date(tempDate);
    updatedDate.setHours(selectedTime.getHours());
    updatedDate.setMinutes(selectedTime.getMinutes());

    onConfirm(updatedDate);
    setShowTime(false);
    onClose();
  };

  // iOS combined picker
  if (Platform.OS === 'ios' && visible) {
    return (
      <DateTimePicker
        value={tempDate}
        mode="datetime"
        display="spinner"
        onChange={(event, selectedDate) => {
          if (selectedDate) {
            onConfirm(selectedDate);
          }
          onClose();
        }}
      />
    );
  }

  return (
    <View>
      {visible && !showTime && (
        <DateTimePicker
          value={tempDate}
          mode="date"
          display="default"
          onChange={handleDateChange}
          minimumDate={new Date()}
          maximumDate={new Date(Date.now() + 90 * 24 * 60 * 60 * 1000)}
        />
      )}

      {showTime && (
        <DateTimePicker
          value={tempDate}
          mode="time"
          display="default"
          onChange={handleTimeChange}
        />
      )}
    </View>
  );
};

export default DateTimePickerComponent;
