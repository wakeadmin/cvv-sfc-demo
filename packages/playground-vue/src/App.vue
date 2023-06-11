<template>
  <Foo />
  <Hello />
  <Counter />
  <Input v-model="value" />
  value: {{ value }}
  <div>list: <List :list="[{ id: 1, value: 2 }, {id: 2, value: 2}]" /></div>
</template>

<script setup lang="ts">
import { Hello, Counter, Input, List } from 'components';
import Foo from './Foo.vue';

import { ref } from 'vue';

const value = ref('hello');
</script>
