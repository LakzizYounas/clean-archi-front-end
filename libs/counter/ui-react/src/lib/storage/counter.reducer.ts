import { CounterStore } from '@clean-archi-front-end/counter/domain';
import { Reducer } from '@reduxjs/toolkit';

import { CounterActionTypes, CounterAction } from './counter.action-types';

export type CounterStoreState = Omit<
  CounterStore,
  'loadInitialCounter' | 'setCounter' | 'updateCounter'
>;

const INITIAL_STATE: CounterStoreState = {
  counter: undefined,
  isLoading: false,
  isUpdating: false,
};

export const counterReducer: Reducer = (
  state: CounterStoreState = INITIAL_STATE,
  action: CounterAction
) => {
  switch (action.type) {
    case CounterActionTypes.SET_COUNTER:
      return { ...state, counter: action.counter };
    case CounterActionTypes.GET_COUNTER:
      return { ...state, isLoading: true };
    case CounterActionTypes.GET_COUNTER_SUCCESS:
      return { ...state, isLoading: false, counter: action.counter };
    case CounterActionTypes.UPDATE_COUNTER:
      return { ...state, isUpdating: true };
    case CounterActionTypes.UPDATE_COUNTER_SUCCESS:
      return { ...state, isUpdating: false };
    default:
      return state;
  }
};
