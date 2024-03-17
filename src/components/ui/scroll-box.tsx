import { Theme } from '@/src/theme';
import { createBox } from '@shopify/restyle';
import { ScrollViewProps } from 'react-native';
import Animated, { AnimatedProps } from 'react-native-reanimated';

export const ScrollBox = createBox<Theme, AnimatedProps<ScrollViewProps>>(
  Animated.ScrollView,
);
