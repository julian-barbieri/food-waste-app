import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  client: 'fetch',
  input: 'http://localhost:3000/api-json',
  output: {
    format: 'prettier',
    path: './src/client/generated',
  },
  types: {
    enums: 'typescript',
  },
  schemas: false,
  services: {
    // operationId: false,
  },
});
