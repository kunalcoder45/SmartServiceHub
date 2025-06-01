// import { useColorScheme } from 'react-native';
// import { useState, useEffect } from 'react';

// export const useDarkMode = () => {
//   const systemScheme = useColorScheme(); // 'dark' | 'light' | null
//   const [isDarkMode, setIsDarkMode] = useState(systemScheme === 'dark');

//   useEffect(() => {
//     setIsDarkMode(systemScheme === 'dark');
//   }, [systemScheme]);

//   const toggleDarkMode = () => {
//     setIsDarkMode(prev => !prev);
//   };

//   return { isDarkMode, toggleDarkMode };
// };

// export const themes = {
//   light: {
//     background: 'bg-white',
//     textPrimary: 'text-black',
//     textSecondary: 'text-gray-600',
//     card: 'bg-gray-100',
//     buttonPrimary: 'bg-red-600',
//     buttonText: 'text-white',
//   },
//   dark: {
//     background: 'bg-black',
//     textPrimary: 'text-white',
//     textSecondary: 'text-gray-300',
//     card: 'bg-gray-900',
//     buttonPrimary: 'bg-blue-400',
//     buttonText: 'text-black',
//   },
// };
import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};

export const themes = {
  light: {
    background: 'bg-white',
    textPrimary: 'text-black',
    textSecondary: 'text-gray-600',
    card: 'bg-gray-100',
    buttonPrimary: 'bg-red-600',
    buttonText: 'text-white',
  },
  dark: {
    background: 'bg-black',
    textPrimary: 'text-white',
    textSecondary: 'text-gray-300',
    card: 'bg-gray-900',
    buttonPrimary: 'bg-red-500',
    buttonText: 'text-black',
  },
};
