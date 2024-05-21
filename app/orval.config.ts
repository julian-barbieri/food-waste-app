import { defineConfig } from 'orval';

export default defineConfig({
  client: {
    input: 'http://localhost:3000/api-json',
    output: {
      client: 'react-query',
      mode: 'tags-split',
      workspace: 'src/api',
      target: './generated/api',
      schemas: './generated/model',
      mock: false,
      prettier: true,
      override: {
        query: {
          signal: true,
          usePrefetch: true,
          // useInfiniteQueryParam: "page",
          // useInfinite: true,
          useSuspenseQuery: true,
          // useSuspenseInfiniteQuery: true,
        },
        mutator: {
          path: './mutator/custom-fetch.ts',
          name: 'customFetch',
        },
      },
    },
    hooks: {
      afterAllFilesWrite: 'prettier --write .',
    },
  },
});
