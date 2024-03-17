import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ReactNode, Fragment } from 'react';
import { useTheme } from '../hooks/use-theme';

interface Props {
  children: ReactNode;
}

export function ScreenWrapper({ children }: Props) {
  const { colors, isDark } = useTheme();
  return (
    <Fragment>
      <StatusBar
        backgroundColor={colors.$background}
        barStyle={isDark ? 'light-content' : 'dark-content'}
      />
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.$background }}>
        {children}
      </SafeAreaView>
    </Fragment>
  );
}
