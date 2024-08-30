interface AwaitProps<T> {
  promise: Promise<T>;
  children: (value: T) => JSX.Element | undefined;
}

export const Await = async <T,>({ promise, children }: AwaitProps<T>) => {
  const data = await promise;

  if (!data) return null;

  return children(data);
};
