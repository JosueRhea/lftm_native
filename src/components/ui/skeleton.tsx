import { LayoutProps } from '@shopify/restyle';
import { Theme } from '@/src/theme';
import { AnimatedBox, AnimatedBoxProps } from './animated-box';
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

type RestyleProps = LayoutProps<Theme>;

type Props = AnimatedBoxProps & {
  skeletonStyle: RestyleProps;
};

export const Skeleton = ({ skeletonStyle, ...rest }: Props) => {
  const opacity = useSharedValue(1);

  // Set the opacity value to animate between 0 and 1
  opacity.value = withRepeat(
    withTiming(0.4, { duration: 500, easing: Easing.ease }),
    -1,
    true,
  );

  const animatedStyle = useAnimatedStyle(
    () => ({ opacity: opacity.value }),
    [],
  );

  return (
    <AnimatedBox
      width="100%"
      backgroundColor="$muted"
      borderRadius="xss"
      style={skeletonStyle ? [skeletonStyle, animatedStyle] : animatedStyle}
      {...rest}
    />
  );
};
