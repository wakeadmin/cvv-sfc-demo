<template>
  <input type="text" :value="props.modelValue" @input="handleChange" />
</template>

<script lang="ts">
export default {
  model: {
    prop: 'modelValue',
    event: 'update:modelValue',
  },
};
</script>

<script setup lang="ts">
const props = defineProps<{ modelValue: string }>();

const emit = defineEmits<{
  (name: 'update:modelValue', value: string): void;
}>();

const handleChange = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value);
};
</script>
