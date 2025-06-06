const API_BASE_URL = "https://restcountries.com/v3.1/";

class ApiError extends Error {
  constructor(public response: Response) {
    super("ApiError:" + response.status);
  }
}

export const apiCall = async <T>(
  endpoint: string,
  init?: RequestInit & { json?: unknown }
): Promise<T> => {
  let headers = init?.headers ?? {};

  if (init?.json) {
    headers = {
      "Content-Type": "application/json",
      ...headers,
    };

    init.body = JSON.stringify(init.json);
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...init,
    headers,
  });

  if (!response.ok) {
    throw new ApiError(response);
  }

  return response.json();
};
