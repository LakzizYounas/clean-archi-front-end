import React from 'react';

import { useCounterViewModel } from '@clean-archi-front-end/counter/controller-react';
import { useCounterStoreImplementation } from '../storage/counter.store-implementation';

export const CounterView = () => {
  const store = useCounterStoreImplementation();
  const {
    count,
    canDecrement,
    isLoading,
    getCounter,
    incrementCounter,
    decrementCounter,
  } = useCounterViewModel(store);

  React.useEffect(() => {
    getCounter();
  }, [getCounter]);

  return (
    <div>
      {isLoading ? (
        <div>SPINNEEEERR</div>
      ) : (
        <>
          <button onClick={decrementCounter} disabled={!canDecrement}>
            -
          </button>
          <span>{count}</span>
          <button onClick={incrementCounter}>+</button>
        </>
      )}
    </div>
  );
};
