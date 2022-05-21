import { decrement } from '@clean-archi-front-end/counter/domain';

import {
  UpdateCounterStore,
  updateCounterUseCase,
} from './update-counter.use-case';

export const decrementCounterUsecase = (store: UpdateCounterStore) => {
  return updateCounterUseCase(store, decrement);
};
