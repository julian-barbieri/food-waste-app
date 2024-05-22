module.exports = {
  "plugins": ["@trivago/prettier-plugin-sort-imports"],
  "singleQuote": true,
  "trailingComma": "all",
  "importOrder": ["^@nestjs/(.*)$", "<THIRD_PARTY_MODULES>", "^[./]"],
  "importOrderSeparation": true,
  "importOrderSortSpecifiers": true,
  "importOrderParserPlugins": [
    "typescript",
    "classProperties",
    "decorators-legacy"
  ]
}
