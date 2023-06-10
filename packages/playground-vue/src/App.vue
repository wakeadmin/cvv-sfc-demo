<script setup lang="ts">
import { Hello, Counter, Input } from 'components';

import { ref } from 'vue';

const value = ref('hello');
</script>

<template>
  <Hello />
  <Counter />
  <Input v-model="value" />
  value: {{ value }}
</template>
