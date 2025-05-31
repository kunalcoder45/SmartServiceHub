// components/ImageSlider.jsx
import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');

const images = [
  'https://img.freepik.com/premium-photo/male-hand-touching-service-concept_220873-7591.jpg',
  'https://img.freepik.com/premium-photo/service-concept-person-hand-holding-service-icon-virtual-screen_1296497-175.jpg?semt=ais_items_boosted&w=740',
//   'https://placekitten.com/402/160',
//   'https://placekitten.com/403/160',
//   'https://placekitten.com/404/160',
//   'https://placekitten.com/405/160',
];

const ImageSlider = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ x: index * width, animated: true });
    }
    setCurrentIndex(index);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    scrollToIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    scrollToIndex(prevIndex);
  };

  // Auto scroll
  useEffect(() => {
  const interval = setInterval(() => {
    const nextIndex = (currentIndex + 1) % images.length;
    scrollToIndex(nextIndex);
  }, 3000);
  return () => clearInterval(interval);
}, [currentIndex]);

  return (
    <View className="relative h-40 rounded-xl overflow-hidden shadow-md">
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(e) => {
          const index = Math.round(e.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
      >
        {images.map((uri, index) => (
          <Image
            key={index}
            source={{ uri }}
            className="w-full h-full"
            style={{ width }}
            resizeMode="cover"
          />
        ))}
      </ScrollView>

      {/* Left Button */}
      <TouchableOpacity
        onPress={prevImage}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/70 rounded-full p-1"
      >
        <MaterialCommunityIcons name="chevron-left" size={24} color="#1E40AF" />
      </TouchableOpacity>

      {/* Right Button */}
      <TouchableOpacity
        onPress={nextImage}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/70 rounded-full p-1"
      >
        <MaterialCommunityIcons name="chevron-right" size={24} color="#1E40AF" />
      </TouchableOpacity>
    </View>
  );
};

export default ImageSlider;
