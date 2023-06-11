<template>
  <div>
    <span v-for="i of props.list" :key="i.id">{{ JSON.stringify(i) }}</span>
  </div>
</template>

<script setup generic="T extends {id: string | number}" lang="ts">
const props = defineProps<{ list: T[] }>();
</script>
