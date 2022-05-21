import type { Counter } from './counter.entity';

export interface CounterStore {
  // State
  counter: Counter | undefined;
  isLoading: boolean;
  isUpdating: boolean;

  // Actions
  loadInitialCounter(): Promise<Counter>;
  setCounter(counter: Counter): void;
  updateCounter(counter: Counter): Promise<Counter | undefined>;
}
