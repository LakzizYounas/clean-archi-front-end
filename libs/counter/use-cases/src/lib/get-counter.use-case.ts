import type { CounterStore } from '@clean-archi-front-end/counter/domain';

type GetCounterStore = Pick<CounterStore, 'loadInitialCounter'>;

export const getCounterUseCase = (store: GetCounterStore) => {
  store.loadInitialCounter();
};
