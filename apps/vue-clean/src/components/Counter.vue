<template>
  <button @click="decrementCounter">-</button>
  <span>{{ counter }}</span>
  <button @click="incrementCounter">+</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Counter',
  data: function () {
    return {
      counter: 0,
    };
  },
  methods: {
    incrementCounter: function () {
      this.counter += 1;
    },
    decrementCounter: function () {
      this.counter -= 1;
    },
  },
});
</script>
