import { Dispatch } from 'redux';

import { Counter } from '@clean-archi-front-end/counter/domain';

import { CounterActionTypes } from './counter.action-types';
import { getCounter, updateCounter } from './counter.service';

export const setCounterAction = (counter: Counter) => (dispatch: Dispatch) =>
  dispatch({ type: CounterActionTypes.SET_COUNTER, counter });

export const getCounterAction = () => (dispatch: Dispatch) => {
  dispatch({ type: CounterActionTypes.GET_COUNTER });

  return getCounter().then((counter) => {
    dispatch({ type: CounterActionTypes.GET_COUNTER_SUCCESS, counter });

    return counter;
  });
};

export const updateCounterAction =
  (counter: Counter) => (dispatch: Dispatch) => {
    dispatch({ type: CounterActionTypes.UPDATE_COUNTER });

    return updateCounter(counter).then((counter) => {
      dispatch({ type: CounterActionTypes.UPDATE_COUNTER_SUCCESS });

      return counter;
    });
  };
