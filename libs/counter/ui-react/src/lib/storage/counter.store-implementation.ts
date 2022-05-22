import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Counter,
  CounterStore,
  CounterStoreState,
} from '@clean-archi-front-end/counter/domain';

import {
  getCounterAction,
  setCounterAction,
  updateCounterAction,
} from './counter.action';

export const useCounterStoreImplementation = (
  counterSelector: (state: unknown) => CounterStoreState
): CounterStore => {
  const { counter, isLoading, isUpdating } = useSelector<
    unknown,
    CounterStoreState
  >(counterSelector);
  const dispatch = useDispatch();

  const setCounter = React.useCallback(
    (counter: Counter) => setCounterAction(counter)(dispatch),
    [dispatch]
  );

  const loadInitialCounter = React.useCallback(
    () => getCounterAction()(dispatch),
    [dispatch]
  );

  const updateCounter = React.useCallback(
    (counter: Counter) => updateCounterAction(counter)(dispatch),
    [dispatch]
  );

  return {
    counter,
    isLoading,
    isUpdating,
    setCounter,
    loadInitialCounter,
    updateCounter,
  };
};
