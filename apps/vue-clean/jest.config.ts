module.exports = {
  displayName: 'vue-clean',
  preset: '../../jest.preset.ts',
  transform: {
    '^.+.vue$': 'vue3-jest',
    '.+.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'vue', 'js', 'json'],
  coverageDirectory: '../../coverage/apps/vue-clean',
  snapshotSerializers: ['jest-serializer-vue'],
  globals: {
    'ts-jest': {
      tsconfig: 'apps/vue-clean/tsconfig.spec.json',
    },
    'vue-jest': {
      tsConfig: 'apps/vue-clean/tsconfig.spec.json',
    },
  },
};
