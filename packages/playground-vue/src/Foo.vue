<template>
  <div>props: {{ props.value }}</div>
</template>

<script setup lang="ts">
const props = defineProps<{
  value: string;
}>();
</script>
