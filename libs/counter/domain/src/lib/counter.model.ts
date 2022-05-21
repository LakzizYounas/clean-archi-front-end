import type { Counter } from './counter.entity';

export const create = (count: Counter['value']) => ({ value: count });

export const decrement = (counter: Counter): Counter => ({
  value: Math.max(counter.value - 1, 0),
});

export const increment = (counter: Counter): Counter => ({
  value: counter.value + 1,
});
