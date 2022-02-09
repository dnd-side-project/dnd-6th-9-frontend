const path = require('path');

module.exports = {
  babel: {
    presets: ['@emotion/babel-preset-css-prop'],
  },
  webpack: {
    // 절대경로 지정
    alias: {
      '@components': path.resolve(__dirname, 'src/presentation/components'),
      '@pages': path.resolve(__dirname, 'src/presentation/pages'),
      '@router': path.resolve(__dirname, 'src/presentation/router'),
      '@styles': path.resolve(__dirname, 'src/presentation/styles'),
      '@api': path.resolve(__dirname, 'src/infrastructure/api'),
      '@mock': path.resolve(__dirname, 'src/infrastructure/mock'),
      '@hooks': path.resolve(__dirname, 'src/application/hooks'),
      '@store': path.resolve(__dirname, 'src/application/store'),
      '@utils': path.resolve(__dirname, 'src/application/utils'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
};
