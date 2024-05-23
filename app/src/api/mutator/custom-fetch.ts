import { useAuthStore } from '@/stores/auth';

const baseURL = 'http://localhost:3000'; // use your own URL here or environment variable

export const customFetch = async <T>(
  {
    url,
    method,
    params,
    data,
    ...rest
  }: {
    url: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    headers?: Record<string, string>;
    params?: any;
    data?: unknown;
    responseType?: string;
    signal?: AbortSignal;
  },
  options?: {
    headers?: Record<string, string>;
  },
): Promise<T> => {
  // Create the full base URL by combining the baseUrl and the relative url
  const fullUrl = new URL(url, baseURL);

  if (params) {
    // Create a URLSearchParams object from the params object
    const searchParams = convertUrlSearchParams(params);
    // Append the search parameters to the full URL
    fullUrl.search = searchParams.toString();
  }

  const token = useAuthStore.getState().token;

  const response = await fetch(fullUrl, {
    method,
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
      ...rest.headers,
      ...options?.headers,
    },
    signal: rest.signal,
  });

  const json = await response.json();

  if (!response.ok) {
    console.log({ error: json });
    const message = json.message || 'An error occurred';
    throw new Error(json.message);
  }

  return json;
};

export default customFetch;

// // In some case with react-query and swr you want to be able to override the return error type so you can also do it here like this
// export type ErrorType<Error> = Error;
// // In case you want to wrap the body type (optional)
// // (if the custom instance is processing data before sending it, like changing the case for example)
// export type BodyType<BodyData> = BodyData;

// https://stackoverflow.com/questions/59889140/different-output-from-encodeuricomponent-vs-urlsearchparams
function fixedEncodeURIComponent(str: string | number | boolean) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

function convertUrlSearchParams(params: Record<string, any>) {
  return Object.entries(params)
    .map(
      ([key, value]) =>
        `${fixedEncodeURIComponent(key)}=${fixedEncodeURIComponent(value)}`,
    )
    .join('&');
}
