import { Theme } from '@/src/theme';
import React, { forwardRef } from 'react';
import {
  ColorProps,
  useRestyle,
  spacing,
  border,
  backgroundColor,
  BorderProps,
  BackgroundColorProps,
  composeRestyleFunctions,
  SpacingProps,
  color,
  backgroundColorShorthand,
  BackgroundColorShorthandProps,
  typography,
  TypographyProps,
  SpacingShorthandProps,
  spacingShorthand,
  LayoutProps,
  layout,
  useTheme,
  useResponsiveProp,
} from '@shopify/restyle';
import { TextInput as RNTextInput } from 'react-native';

type RestyleProps = SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  BackgroundColorShorthandProps<Theme> &
  ColorProps<Theme> &
  TypographyProps<Theme> &
  LayoutProps<Theme>;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  color,
  spacing,
  spacingShorthand,
  border,
  backgroundColor,
  backgroundColorShorthand,
  typography,
  layout,
]);

type TextInputProps = React.ComponentPropsWithRef<typeof RNTextInput> &
  RestyleProps & {
    placeholderColor?: keyof Theme['colors'];
  };

export const TextInput = forwardRef<RNTextInput, TextInputProps>(
  ({ placeholderColor, ...rest }, ref) => {
    const props = useRestyle(restyleFunctions, rest as any);
    const theme = useTheme<Theme>();
    const placeholderTextColorProp = useResponsiveProp(placeholderColor);
    const placeholderTextColorValue =
      // @ts-ignore
      placeholderTextColorProp && theme.colors[placeholderTextColorProp];
    return (
      <RNTextInput
        ref={ref}
        {...props}
        placeholderTextColor={placeholderTextColorValue}
      />
    );
  },
);
