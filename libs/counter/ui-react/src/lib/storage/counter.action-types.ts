import { Counter } from '@clean-archi-front-end/counter/domain';
import { Action } from 'redux';

export enum CounterActionTypes {
  SET_COUNTER = 'SET_COUTER',
  GET_COUNTER = 'GET_COUNTER',
  GET_COUNTER_SUCCESS = 'GET_COUNTER_SUCESS',
  UPDATE_COUNTER = 'UPDATE_COUNTER',
  UPDATE_COUNTER_SUCCESS = 'UPDATE_COUNTER_SUCCESS',
}

export type CounterAction = Action<CounterActionTypes> & {
  counter?: Counter['value'];
};
