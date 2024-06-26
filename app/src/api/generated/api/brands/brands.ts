/**
 * Generated by orval v6.29.1 🍺
 * Do not edit manually.
 * Food Waste App
 * The Food Waste App API description
 * OpenAPI spec version: 1.0.0
 */
import { useMutation, useQuery, useSuspenseQuery } from '@tanstack/react-query';
import type {
  MutationFunction,
  QueryClient,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
  UseSuspenseQueryOptions,
  UseSuspenseQueryResult,
} from '@tanstack/react-query';

import { customFetch } from '../../../mutator/custom-fetch';
import type { BrandEntity, CreateBrandDto, UpdateBrandDto } from '../../model';

export const brandControllerCreate = (createBrandDto: CreateBrandDto) => {
  return customFetch<BrandEntity>({
    url: `/brands`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: createBrandDto,
  });
};

export const getBrandControllerCreateMutationOptions = <
  TError = void,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof brandControllerCreate>>,
    TError,
    { data: CreateBrandDto },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof brandControllerCreate>>,
  TError,
  { data: CreateBrandDto },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof brandControllerCreate>>,
    { data: CreateBrandDto }
  > = (props) => {
    const { data } = props ?? {};

    return brandControllerCreate(data);
  };

  return { mutationFn, ...mutationOptions };
};

export type BrandControllerCreateMutationResult = NonNullable<
  Awaited<ReturnType<typeof brandControllerCreate>>
>;
export type BrandControllerCreateMutationBody = CreateBrandDto;
export type BrandControllerCreateMutationError = void;

export const useBrandControllerCreate = <
  TError = void,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof brandControllerCreate>>,
    TError,
    { data: CreateBrandDto },
    TContext
  >;
}): UseMutationResult<
  Awaited<ReturnType<typeof brandControllerCreate>>,
  TError,
  { data: CreateBrandDto },
  TContext
> => {
  const mutationOptions = getBrandControllerCreateMutationOptions(options);

  return useMutation(mutationOptions);
};
export const brandControllerFindAll = (signal?: AbortSignal) => {
  return customFetch<BrandEntity[]>({ url: `/brands`, method: 'GET', signal });
};

export const getBrandControllerFindAllQueryKey = () => {
  return [`/brands`] as const;
};

export const getBrandControllerFindAllQueryOptions = <
  TData = Awaited<ReturnType<typeof brandControllerFindAll>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof brandControllerFindAll>>,
      TError,
      TData
    >
  >;
}) => {
  const { query: queryOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getBrandControllerFindAllQueryKey();

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof brandControllerFindAll>>
  > = ({ signal }) => brandControllerFindAll(signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof brandControllerFindAll>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type BrandControllerFindAllQueryResult = NonNullable<
  Awaited<ReturnType<typeof brandControllerFindAll>>
>;
export type BrandControllerFindAllQueryError = unknown;

export const useBrandControllerFindAll = <
  TData = Awaited<ReturnType<typeof brandControllerFindAll>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof brandControllerFindAll>>,
      TError,
      TData
    >
  >;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getBrandControllerFindAllQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const prefetchBrandControllerFindAll = async <
  TData = Awaited<ReturnType<typeof brandControllerFindAll>>,
  TError = unknown,
>(
  queryClient: QueryClient,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof brandControllerFindAll>>,
        TError,
        TData
      >
    >;
  },
): Promise<QueryClient> => {
  const queryOptions = getBrandControllerFindAllQueryOptions(options);

  await queryClient.prefetchQuery(queryOptions);

  return queryClient;
};

export const getBrandControllerFindAllSuspenseQueryOptions = <
  TData = Awaited<ReturnType<typeof brandControllerFindAll>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseSuspenseQueryOptions<
      Awaited<ReturnType<typeof brandControllerFindAll>>,
      TError,
      TData
    >
  >;
}) => {
  const { query: queryOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getBrandControllerFindAllQueryKey();

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof brandControllerFindAll>>
  > = ({ signal }) => brandControllerFindAll(signal);

  return { queryKey, queryFn, ...queryOptions } as UseSuspenseQueryOptions<
    Awaited<ReturnType<typeof brandControllerFindAll>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type BrandControllerFindAllSuspenseQueryResult = NonNullable<
  Awaited<ReturnType<typeof brandControllerFindAll>>
>;
export type BrandControllerFindAllSuspenseQueryError = unknown;

export const useBrandControllerFindAllSuspense = <
  TData = Awaited<ReturnType<typeof brandControllerFindAll>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseSuspenseQueryOptions<
      Awaited<ReturnType<typeof brandControllerFindAll>>,
      TError,
      TData
    >
  >;
}): UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getBrandControllerFindAllSuspenseQueryOptions(options);

  const query = useSuspenseQuery(queryOptions) as UseSuspenseQueryResult<
    TData,
    TError
  > & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const brandControllerFindOne = (id: string, signal?: AbortSignal) => {
  return customFetch<BrandEntity>({
    url: `/brands/${id}`,
    method: 'GET',
    signal,
  });
};

export const getBrandControllerFindOneQueryKey = (id: string) => {
  return [`/brands/${id}`] as const;
};

export const getBrandControllerFindOneQueryOptions = <
  TData = Awaited<ReturnType<typeof brandControllerFindOne>>,
  TError = void,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof brandControllerFindOne>>,
        TError,
        TData
      >
    >;
  },
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getBrandControllerFindOneQueryKey(id);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof brandControllerFindOne>>
  > = ({ signal }) => brandControllerFindOne(id, signal);

  return {
    queryKey,
    queryFn,
    enabled: !!id,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof brandControllerFindOne>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type BrandControllerFindOneQueryResult = NonNullable<
  Awaited<ReturnType<typeof brandControllerFindOne>>
>;
export type BrandControllerFindOneQueryError = void;

export const useBrandControllerFindOne = <
  TData = Awaited<ReturnType<typeof brandControllerFindOne>>,
  TError = void,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof brandControllerFindOne>>,
        TError,
        TData
      >
    >;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getBrandControllerFindOneQueryOptions(id, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const prefetchBrandControllerFindOne = async <
  TData = Awaited<ReturnType<typeof brandControllerFindOne>>,
  TError = void,
>(
  queryClient: QueryClient,
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof brandControllerFindOne>>,
        TError,
        TData
      >
    >;
  },
): Promise<QueryClient> => {
  const queryOptions = getBrandControllerFindOneQueryOptions(id, options);

  await queryClient.prefetchQuery(queryOptions);

  return queryClient;
};

export const getBrandControllerFindOneSuspenseQueryOptions = <
  TData = Awaited<ReturnType<typeof brandControllerFindOne>>,
  TError = void,
>(
  id: string,
  options?: {
    query?: Partial<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof brandControllerFindOne>>,
        TError,
        TData
      >
    >;
  },
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getBrandControllerFindOneQueryKey(id);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof brandControllerFindOne>>
  > = ({ signal }) => brandControllerFindOne(id, signal);

  return {
    queryKey,
    queryFn,
    enabled: !!id,
    ...queryOptions,
  } as UseSuspenseQueryOptions<
    Awaited<ReturnType<typeof brandControllerFindOne>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type BrandControllerFindOneSuspenseQueryResult = NonNullable<
  Awaited<ReturnType<typeof brandControllerFindOne>>
>;
export type BrandControllerFindOneSuspenseQueryError = void;

export const useBrandControllerFindOneSuspense = <
  TData = Awaited<ReturnType<typeof brandControllerFindOne>>,
  TError = void,
>(
  id: string,
  options?: {
    query?: Partial<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof brandControllerFindOne>>,
        TError,
        TData
      >
    >;
  },
): UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getBrandControllerFindOneSuspenseQueryOptions(
    id,
    options,
  );

  const query = useSuspenseQuery(queryOptions) as UseSuspenseQueryResult<
    TData,
    TError
  > & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const brandControllerUpdate = (
  id: string,
  updateBrandDto: UpdateBrandDto,
) => {
  return customFetch<BrandEntity>({
    url: `/brands/${id}`,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    data: updateBrandDto,
  });
};

export const getBrandControllerUpdateMutationOptions = <
  TError = void,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof brandControllerUpdate>>,
    TError,
    { id: string; data: UpdateBrandDto },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof brandControllerUpdate>>,
  TError,
  { id: string; data: UpdateBrandDto },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof brandControllerUpdate>>,
    { id: string; data: UpdateBrandDto }
  > = (props) => {
    const { id, data } = props ?? {};

    return brandControllerUpdate(id, data);
  };

  return { mutationFn, ...mutationOptions };
};

export type BrandControllerUpdateMutationResult = NonNullable<
  Awaited<ReturnType<typeof brandControllerUpdate>>
>;
export type BrandControllerUpdateMutationBody = UpdateBrandDto;
export type BrandControllerUpdateMutationError = void;

export const useBrandControllerUpdate = <
  TError = void,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof brandControllerUpdate>>,
    TError,
    { id: string; data: UpdateBrandDto },
    TContext
  >;
}): UseMutationResult<
  Awaited<ReturnType<typeof brandControllerUpdate>>,
  TError,
  { id: string; data: UpdateBrandDto },
  TContext
> => {
  const mutationOptions = getBrandControllerUpdateMutationOptions(options);

  return useMutation(mutationOptions);
};
export const brandControllerRemove = (id: string) => {
  return customFetch<BrandEntity>({ url: `/brands/${id}`, method: 'DELETE' });
};

export const getBrandControllerRemoveMutationOptions = <
  TError = void,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof brandControllerRemove>>,
    TError,
    { id: string },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof brandControllerRemove>>,
  TError,
  { id: string },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof brandControllerRemove>>,
    { id: string }
  > = (props) => {
    const { id } = props ?? {};

    return brandControllerRemove(id);
  };

  return { mutationFn, ...mutationOptions };
};

export type BrandControllerRemoveMutationResult = NonNullable<
  Awaited<ReturnType<typeof brandControllerRemove>>
>;

export type BrandControllerRemoveMutationError = void;

export const useBrandControllerRemove = <
  TError = void,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof brandControllerRemove>>,
    TError,
    { id: string },
    TContext
  >;
}): UseMutationResult<
  Awaited<ReturnType<typeof brandControllerRemove>>,
  TError,
  { id: string },
  TContext
> => {
  const mutationOptions = getBrandControllerRemoveMutationOptions(options);

  return useMutation(mutationOptions);
};
