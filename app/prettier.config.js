export default {
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
  singleQuote: true,
  trailingComma: 'all',
  importOrder: ['^@ionic/(.*)$', '<THIRD_PARTY_MODULES>', '^@/(.*)', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
