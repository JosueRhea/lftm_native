module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@': './',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
