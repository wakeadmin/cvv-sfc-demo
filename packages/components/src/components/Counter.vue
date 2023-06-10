<template>
  <div class="counter" @click="increment">counter: {{ count }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);

const increment = () => {
  count.value++;
};
</script>

<style scoped>
.counter {
  color: red;
}
</style>
