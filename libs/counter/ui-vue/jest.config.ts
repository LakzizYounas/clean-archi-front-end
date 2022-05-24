module.exports = {
  displayName: 'counter-ui-vue',
  preset: '../../../jest.preset.ts',
  transform: {
    '^.+.vue$': 'vue3-jest',
    '.+.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'vue', 'js', 'json'],
  coverageDirectory: '../../../coverage/libs/counter/ui-vue',
  snapshotSerializers: ['jest-serializer-vue'],
  globals: {
    'ts-jest': {
      tsconfig: 'libs/counter/ui-vue/tsconfig.spec.json',
    },
    'vue-jest': {
      tsConfig: 'libs/counter/ui-vue/tsconfig.spec.json',
    },
  },
};
