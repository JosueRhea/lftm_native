import { Theme } from '@/src/theme';
import { AllProps, createRestyleComponent } from '@shopify/restyle';
import { ImageProps, Image as RnImage } from 'react-native';

type RestyleProps = AllProps<Theme> & ImageProps;

export const Image = createRestyleComponent<RestyleProps, Theme>([], RnImage);
