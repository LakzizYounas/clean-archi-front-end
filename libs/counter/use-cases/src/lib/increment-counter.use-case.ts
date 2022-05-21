import { increment } from '@clean-archi-front-end/counter/domain';

import {
  UpdateCounterStore,
  updateCounterUseCase,
} from './update-counter.use-case';

export const incrementCounterUseCase = (store: UpdateCounterStore) => {
  return updateCounterUseCase(store, increment);
};
