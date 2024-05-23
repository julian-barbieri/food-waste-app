/**
 * Generated by orval v6.29.1 🍺
 * Do not edit manually.
 * Food Waste App
 * The Food Waste App API description
 * OpenAPI spec version: 1.0.0
 */
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import type {
  QueryClient,
  QueryFunction,
  QueryKey,
  UseQueryOptions,
  UseQueryResult,
  UseSuspenseQueryOptions,
  UseSuspenseQueryResult,
} from '@tanstack/react-query';

import { customFetch } from '../../../mutator/custom-fetch';
import type {
  AppControllerFindAllParams,
  AppControllerFreisParams,
  AppControllerTestParams,
  FreisEntity,
  PaginationQuery,
} from '../../model';

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

export const appControllerGetHello = (
  options?: SecondParameter<typeof customFetch>,
  signal?: AbortSignal,
) => {
  return customFetch<void>({ url: `/`, method: 'GET', signal }, options);
};

export const getAppControllerGetHelloQueryKey = () => {
  return [`/`] as const;
};

export const getAppControllerGetHelloQueryOptions = <
  TData = Awaited<ReturnType<typeof appControllerGetHello>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof appControllerGetHello>>,
      TError,
      TData
    >
  >;
  request?: SecondParameter<typeof customFetch>;
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getAppControllerGetHelloQueryKey();

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof appControllerGetHello>>
  > = ({ signal }) => appControllerGetHello(requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof appControllerGetHello>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type AppControllerGetHelloQueryResult = NonNullable<
  Awaited<ReturnType<typeof appControllerGetHello>>
>;
export type AppControllerGetHelloQueryError = unknown;

export const useAppControllerGetHello = <
  TData = Awaited<ReturnType<typeof appControllerGetHello>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof appControllerGetHello>>,
      TError,
      TData
    >
  >;
  request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getAppControllerGetHelloQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const prefetchAppControllerGetHello = async <
  TData = Awaited<ReturnType<typeof appControllerGetHello>>,
  TError = unknown,
>(
  queryClient: QueryClient,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof appControllerGetHello>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof customFetch>;
  },
): Promise<QueryClient> => {
  const queryOptions = getAppControllerGetHelloQueryOptions(options);

  await queryClient.prefetchQuery(queryOptions);

  return queryClient;
};

export const getAppControllerGetHelloSuspenseQueryOptions = <
  TData = Awaited<ReturnType<typeof appControllerGetHello>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseSuspenseQueryOptions<
      Awaited<ReturnType<typeof appControllerGetHello>>,
      TError,
      TData
    >
  >;
  request?: SecondParameter<typeof customFetch>;
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getAppControllerGetHelloQueryKey();

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof appControllerGetHello>>
  > = ({ signal }) => appControllerGetHello(requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseSuspenseQueryOptions<
    Awaited<ReturnType<typeof appControllerGetHello>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type AppControllerGetHelloSuspenseQueryResult = NonNullable<
  Awaited<ReturnType<typeof appControllerGetHello>>
>;
export type AppControllerGetHelloSuspenseQueryError = unknown;

export const useAppControllerGetHelloSuspense = <
  TData = Awaited<ReturnType<typeof appControllerGetHello>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseSuspenseQueryOptions<
      Awaited<ReturnType<typeof appControllerGetHello>>,
      TError,
      TData
    >
  >;
  request?: SecondParameter<typeof customFetch>;
}): UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getAppControllerGetHelloSuspenseQueryOptions(options);

  const query = useSuspenseQuery(queryOptions) as UseSuspenseQueryResult<
    TData,
    TError
  > & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const appControllerFindAll = (
  params: AppControllerFindAllParams,
  options?: SecondParameter<typeof customFetch>,
  signal?: AbortSignal,
) => {
  return customFetch<PaginationQuery>(
    { url: `/paginationQueryTest`, method: 'GET', params, signal },
    options,
  );
};

export const getAppControllerFindAllQueryKey = (
  params: AppControllerFindAllParams,
) => {
  return [`/paginationQueryTest`, ...(params ? [params] : [])] as const;
};

export const getAppControllerFindAllQueryOptions = <
  TData = Awaited<ReturnType<typeof appControllerFindAll>>,
  TError = unknown,
>(
  params: AppControllerFindAllParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof appControllerFindAll>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof customFetch>;
  },
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getAppControllerFindAllQueryKey(params);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof appControllerFindAll>>
  > = ({ signal }) => appControllerFindAll(params, requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof appControllerFindAll>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type AppControllerFindAllQueryResult = NonNullable<
  Awaited<ReturnType<typeof appControllerFindAll>>
>;
export type AppControllerFindAllQueryError = unknown;

export const useAppControllerFindAll = <
  TData = Awaited<ReturnType<typeof appControllerFindAll>>,
  TError = unknown,
>(
  params: AppControllerFindAllParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof appControllerFindAll>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof customFetch>;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getAppControllerFindAllQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const prefetchAppControllerFindAll = async <
  TData = Awaited<ReturnType<typeof appControllerFindAll>>,
  TError = unknown,
>(
  queryClient: QueryClient,
  params: AppControllerFindAllParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof appControllerFindAll>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof customFetch>;
  },
): Promise<QueryClient> => {
  const queryOptions = getAppControllerFindAllQueryOptions(params, options);

  await queryClient.prefetchQuery(queryOptions);

  return queryClient;
};

export const getAppControllerFindAllSuspenseQueryOptions = <
  TData = Awaited<ReturnType<typeof appControllerFindAll>>,
  TError = unknown,
>(
  params: AppControllerFindAllParams,
  options?: {
    query?: Partial<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof appControllerFindAll>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof customFetch>;
  },
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getAppControllerFindAllQueryKey(params);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof appControllerFindAll>>
  > = ({ signal }) => appControllerFindAll(params, requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseSuspenseQueryOptions<
    Awaited<ReturnType<typeof appControllerFindAll>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type AppControllerFindAllSuspenseQueryResult = NonNullable<
  Awaited<ReturnType<typeof appControllerFindAll>>
>;
export type AppControllerFindAllSuspenseQueryError = unknown;

export const useAppControllerFindAllSuspense = <
  TData = Awaited<ReturnType<typeof appControllerFindAll>>,
  TError = unknown,
>(
  params: AppControllerFindAllParams,
  options?: {
    query?: Partial<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof appControllerFindAll>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof customFetch>;
  },
): UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getAppControllerFindAllSuspenseQueryOptions(
    params,
    options,
  );

  const query = useSuspenseQuery(queryOptions) as UseSuspenseQueryResult<
    TData,
    TError
  > & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const appControllerTest = (
  params: AppControllerTestParams,
  options?: SecondParameter<typeof customFetch>,
  signal?: AbortSignal,
) => {
  return customFetch<void>(
    { url: `/test`, method: 'GET', params, signal },
    options,
  );
};

export const getAppControllerTestQueryKey = (
  params: AppControllerTestParams,
) => {
  return [`/test`, ...(params ? [params] : [])] as const;
};

export const getAppControllerTestQueryOptions = <
  TData = Awaited<ReturnType<typeof appControllerTest>>,
  TError = unknown,
>(
  params: AppControllerTestParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof appControllerTest>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof customFetch>;
  },
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getAppControllerTestQueryKey(params);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof appControllerTest>>
  > = ({ signal }) => appControllerTest(params, requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof appControllerTest>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type AppControllerTestQueryResult = NonNullable<
  Awaited<ReturnType<typeof appControllerTest>>
>;
export type AppControllerTestQueryError = unknown;

export const useAppControllerTest = <
  TData = Awaited<ReturnType<typeof appControllerTest>>,
  TError = unknown,
>(
  params: AppControllerTestParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof appControllerTest>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof customFetch>;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getAppControllerTestQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const prefetchAppControllerTest = async <
  TData = Awaited<ReturnType<typeof appControllerTest>>,
  TError = unknown,
>(
  queryClient: QueryClient,
  params: AppControllerTestParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof appControllerTest>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof customFetch>;
  },
): Promise<QueryClient> => {
  const queryOptions = getAppControllerTestQueryOptions(params, options);

  await queryClient.prefetchQuery(queryOptions);

  return queryClient;
};

export const getAppControllerTestSuspenseQueryOptions = <
  TData = Awaited<ReturnType<typeof appControllerTest>>,
  TError = unknown,
>(
  params: AppControllerTestParams,
  options?: {
    query?: Partial<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof appControllerTest>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof customFetch>;
  },
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getAppControllerTestQueryKey(params);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof appControllerTest>>
  > = ({ signal }) => appControllerTest(params, requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseSuspenseQueryOptions<
    Awaited<ReturnType<typeof appControllerTest>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type AppControllerTestSuspenseQueryResult = NonNullable<
  Awaited<ReturnType<typeof appControllerTest>>
>;
export type AppControllerTestSuspenseQueryError = unknown;

export const useAppControllerTestSuspense = <
  TData = Awaited<ReturnType<typeof appControllerTest>>,
  TError = unknown,
>(
  params: AppControllerTestParams,
  options?: {
    query?: Partial<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof appControllerTest>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof customFetch>;
  },
): UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getAppControllerTestSuspenseQueryOptions(
    params,
    options,
  );

  const query = useSuspenseQuery(queryOptions) as UseSuspenseQueryResult<
    TData,
    TError
  > & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const appControllerFreis = (
  id: string,
  name: string,
  params: AppControllerFreisParams,
  options?: SecondParameter<typeof customFetch>,
  signal?: AbortSignal,
) => {
  return customFetch<FreisEntity>(
    {
      url: `/freis/${encodeURIComponent(String(id))}/${encodeURIComponent(String(name))}`,
      method: 'GET',
      params,
      signal,
    },
    options,
  );
};

export const getAppControllerFreisQueryKey = (
  id: string,
  name: string,
  params: AppControllerFreisParams,
) => {
  return [`/freis/${id}/${name}`, ...(params ? [params] : [])] as const;
};

export const getAppControllerFreisQueryOptions = <
  TData = Awaited<ReturnType<typeof appControllerFreis>>,
  TError = unknown,
>(
  id: string,
  name: string,
  params: AppControllerFreisParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof appControllerFreis>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof customFetch>;
  },
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getAppControllerFreisQueryKey(id, name, params);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof appControllerFreis>>
  > = ({ signal }) =>
    appControllerFreis(id, name, params, requestOptions, signal);

  return {
    queryKey,
    queryFn,
    enabled: !!(id && name),
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof appControllerFreis>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type AppControllerFreisQueryResult = NonNullable<
  Awaited<ReturnType<typeof appControllerFreis>>
>;
export type AppControllerFreisQueryError = unknown;

export const useAppControllerFreis = <
  TData = Awaited<ReturnType<typeof appControllerFreis>>,
  TError = unknown,
>(
  id: string,
  name: string,
  params: AppControllerFreisParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof appControllerFreis>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof customFetch>;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getAppControllerFreisQueryOptions(
    id,
    name,
    params,
    options,
  );

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const prefetchAppControllerFreis = async <
  TData = Awaited<ReturnType<typeof appControllerFreis>>,
  TError = unknown,
>(
  queryClient: QueryClient,
  id: string,
  name: string,
  params: AppControllerFreisParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof appControllerFreis>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof customFetch>;
  },
): Promise<QueryClient> => {
  const queryOptions = getAppControllerFreisQueryOptions(
    id,
    name,
    params,
    options,
  );

  await queryClient.prefetchQuery(queryOptions);

  return queryClient;
};

export const getAppControllerFreisSuspenseQueryOptions = <
  TData = Awaited<ReturnType<typeof appControllerFreis>>,
  TError = unknown,
>(
  id: string,
  name: string,
  params: AppControllerFreisParams,
  options?: {
    query?: Partial<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof appControllerFreis>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof customFetch>;
  },
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getAppControllerFreisQueryKey(id, name, params);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof appControllerFreis>>
  > = ({ signal }) =>
    appControllerFreis(id, name, params, requestOptions, signal);

  return {
    queryKey,
    queryFn,
    enabled: !!(id && name),
    ...queryOptions,
  } as UseSuspenseQueryOptions<
    Awaited<ReturnType<typeof appControllerFreis>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type AppControllerFreisSuspenseQueryResult = NonNullable<
  Awaited<ReturnType<typeof appControllerFreis>>
>;
export type AppControllerFreisSuspenseQueryError = unknown;

export const useAppControllerFreisSuspense = <
  TData = Awaited<ReturnType<typeof appControllerFreis>>,
  TError = unknown,
>(
  id: string,
  name: string,
  params: AppControllerFreisParams,
  options?: {
    query?: Partial<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof appControllerFreis>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof customFetch>;
  },
): UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getAppControllerFreisSuspenseQueryOptions(
    id,
    name,
    params,
    options,
  );

  const query = useSuspenseQuery(queryOptions) as UseSuspenseQueryResult<
    TData,
    TError
  > & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};
