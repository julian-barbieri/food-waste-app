const baseURL = 'http://localhost:3000'; // use your own URL here or environment variable

export const customFetch = async <T>({
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
}): Promise<T> => {
  // Create the full base URL by combining the baseUrl and the relative url
  const fullUrl = new URL(url, baseURL);

  // Create a URLSearchParams object from the params object
  const searchParams = new URLSearchParams(params);

  // Append the search parameters to the full URL
  fullUrl.search = searchParams.toString();

  const response = await fetch(fullUrl, {
    method,
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      'Content-Type': 'application/json',
      ...rest.headers,
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
