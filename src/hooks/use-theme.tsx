import { Appearance } from 'react-native';
import { useEffect, useState } from 'react';
import { useTheme as useThemeSP } from '@shopify/restyle';
import { Theme } from '@/src/theme';

export function useTheme() {
  const colorScheme = Appearance.getColorScheme();
  const [theme, setTheme] = useState(colorScheme);
  const themeSp = useThemeSP<Theme>();

  useEffect(() => {
    Appearance.addChangeListener(({ colorScheme: scheme }) => setTheme(scheme));
  }, []);
  const isDark = theme === 'dark';

  return {
    isDark,
    colors: themeSp.colors,
    spacings: themeSp.spacing,
    rounded: themeSp.borderRadii,
  };
}
