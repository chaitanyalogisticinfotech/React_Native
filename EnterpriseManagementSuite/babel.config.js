module.exports = {
  presets: ['module:@react-native/babel-preset'],
    plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@src': './src',
        },
      },
    ],
    // Add any other plugins you need here
    ['react-native-reanimated/plugin'],
  ],
};
