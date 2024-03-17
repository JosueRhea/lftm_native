import { Theme } from '@/src/theme';
import { ViewProps } from 'react-native';
import Animated, { AnimatedProps } from 'react-native-reanimated';
import { createBox } from '@shopify/restyle';

export const AnimatedBox = createBox<Theme, AnimatedProps<ViewProps>>(
  Animated.View,
);

export type AnimatedBoxProps = React.ComponentProps<typeof AnimatedBox>;
