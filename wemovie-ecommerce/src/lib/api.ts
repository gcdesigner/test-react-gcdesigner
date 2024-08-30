const baseUrl = process.env.NEXT_PUBLIC_BASE_URL_API;

export const api = async <T>(
  input: string,
  props?: RequestInit,
): Promise<T | undefined> => {
  class HTTPError extends Error {}

  await fakePromise();

  try {
    const response = await fetch(`${baseUrl}/${input}`, {
      headers: {
        "content-type": "application/json",
      },
      ...props,
    });

    if (!response.ok) {
      throw new HTTPError(`Fetch error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    const err = error as Error;
    console.error(err.message);
  }
};

// TODO: REMOVE - JUST A PROMISE SIMULATOR
const fakePromise = async () => {
  return new Promise((resolve) => setTimeout(resolve, 2000));
};
