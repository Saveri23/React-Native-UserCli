import { useColorScheme } from 'react-native';

export const useTheme = () => {
  const mode = useColorScheme();

  return {
    background: mode === 'dark' ? '#0F172A' : '#FFFFFF',
    card: mode === 'dark' ? '#1E293B' : '#F8FAFC',
    text: mode === 'dark' ? '#F8FAFC' : '#0F172A',
  };
};
