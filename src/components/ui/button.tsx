import { Theme } from '@/src/theme';
import {
  createRestyleComponent,
  createVariant,
  VariantProps,
} from '@shopify/restyle';
import Pressable, { PressableProps } from './pressable';
import { useTheme } from '@/src/hooks/use-theme';

const buttonVariant = createVariant<Theme>({ themeKey: 'buttonVariants' });

type RestyleProps = VariantProps<Theme, 'buttonVariants'> & PressableProps;

const PressableComp = createRestyleComponent<RestyleProps, Theme>(
  // @ts-ignore
  [buttonVariant],
  Pressable,
);

type Props = RestyleProps & {
  rippleColor: keyof Theme['colors'];
  borderLess?: boolean;
};

export function Button({
  rippleColor,
  variant,
  borderLess = false,
  ...rest
}: Props) {
  const { colors } = useTheme();
  const rippleColorValue = colors[rippleColor];
  const defaultVariant = 'primary';

  return (
    <PressableComp
      variant={variant ?? defaultVariant}
      android_ripple={{ color: rippleColorValue, borderless: borderLess }}
      {...rest}
    />
  );
}
