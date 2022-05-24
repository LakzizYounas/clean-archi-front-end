<template>
  <Counter :counter="12" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Counter } from '@clean-archi-front-end/counter/ui-vue';

export default defineComponent({
  name: 'App',

  components: {
    Counter,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
