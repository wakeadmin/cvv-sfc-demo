<script setup lang="ts">
import { Hello, Counter, Input, List } from 'components';
import { ref } from 'vue';

const value = ref('hello');
</script>

<template>
  <div>
    <Hello />
    <Counter />
    <Input v-model="value" />
    value: {{ value }} list: <List :list="[{ id: 1, value: 1 }]" />
  </div>
</template>
