import { Counter, CounterStore } from '@clean-archi-front-end/counter/domain';

export type UpdateCounterStore = Pick<
  CounterStore,
  'counter' | 'updateCounter' | 'setCounter'
>;

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
  return store.updateCounter(updatedCounter);
};
