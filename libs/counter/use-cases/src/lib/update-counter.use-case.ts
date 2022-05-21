import { Counter, CounterStore } from '@clean-archi-front-end/counter/domain';

export type UpdateCounterStore = Pick<
  CounterStore,
  'counter' | 'updateCounter' | 'setCounter'
>;

const debounce = <F extends (...args: any[]) => any>(
  func: F,
  waitFor: number
) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  const debounced = (...args: Parameters<F>) => {
    if (timeout !== null) {
      clearTimeout(timeout);
      timeout = null;
    }
    timeout = setTimeout(() => func(...args), waitFor);
  };

  return debounced as (...args: Parameters<F>) => ReturnType<F>;
};

const debouncedTask = debounce((task) => Promise.resolve(task()), 500);

export const updateCounterUseCase = (
  store: UpdateCounterStore,
  updateBy: (counter: Counter) => Counter
) => {
  const updatedCounter = store.counter
    ? updateBy(store.counter)
    : store.counter;

  if (!updatedCounter) {
    return;
  }

  store.setCounter(updatedCounter);
  return debouncedTask(() => store.updateCounter(updatedCounter));
};
