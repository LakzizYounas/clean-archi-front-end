import { reactive } from 'vue';

import { Counter } from '@clean-archi-front-end/counter/domain';
import {
  updateCounter,
  getCounter,
} from '@clean-archi-front-end/counter/ui-react';

export const state = reactive({
  counter: { value: 0 },
  isLoading: false,
  isUpdating: false,

  setCounter: (counter: Counter) => {
    return (state.counter = counter);
  },
  loadInitialCounter: async () => {
    state.isLoading = true;
    const res = await getCounter();
    state.setCounter(res);
    state.isLoading = false;
    return res;
  },
  updateCounterCallback: async (counter: Counter) => {
    state.isUpdating = true;

    const res = await updateCounter(counter);
    state.isUpdating = false;
    return res;
  },
});
