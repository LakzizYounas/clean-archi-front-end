import React, { useState } from 'react';

import { Counter, CounterStore } from '@clean-archi-front-end/counter/domain';

import { getCounter, updateCounter } from '../service/counter.service';

export const useCounterStoreImplementation = (): CounterStore => {
  const [counter, setCounter] = useState<Counter | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);

  const setCounterCallback = React.useCallback(
    (counter: Counter) => setCounter(counter),
    []
  );

  const updateCounterCallback = React.useCallback(
    async (counter: Counter) => {
      setIsUpdating(true);

      const res = updateCounter(counter);
      setIsUpdating(false);

      return res;
    },

    []
  );

  const loadInitialCounter = React.useCallback(async () => {
    setIsLoading(true);

    const res = await getCounter();
    setCounter(res);
    setIsLoading(false);

    return res;
  }, []);

  return {
    counter,
    isLoading,
    isUpdating,
    setCounter: setCounterCallback,
    loadInitialCounter,
    updateCounter: updateCounterCallback,
  };
};
