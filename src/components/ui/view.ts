import { Theme } from '@/src/theme';
import { createBox, BoxProps as SpBoxProps } from '@shopify/restyle';

export type BoxProps = SpBoxProps<Theme>;
export const Box = createBox<Theme>();
