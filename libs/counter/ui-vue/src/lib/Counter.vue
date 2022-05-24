<template>
  <button @click="state.setCounter(state.counter - 1)">-</button>
  <span>{{ state.counter }}</span>
  <button @click="state.setCounter(state.counter + 1)">+</button>
</template>

<script lang="ts">
import { reactive } from 'vue';
import type { CounterStore } from '@clean-archi-front-end/counter/domain';
import { getCounterUseCase } from '@clean-archi-front-end/counter/use-cases';
import { state } from './state';
// const store: any = {};
// const { getCounter } = useCounterViewModel(store);

export default {
  name: 'Counter',
  data: () => ({ state }),
  // methods: {
  //   incrementCounter: function () {
  //     this.counter += 1;
  //   },
  //   decrementCounter: function () {
  //     this.counter -= 1;
  //   },
  // },
};

function useCounterStoreImplementation(): Partial<CounterStore> {
  return {};
}

function useCounterViewModel(store: CounterStore) {
  const getCounter = function () {
    getCounterUseCase({
      loadInitialCounter: store.loadInitialCounter,
    });
  };

  return { getCounter };
}
</script>
