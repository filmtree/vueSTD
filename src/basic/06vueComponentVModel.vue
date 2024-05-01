<!-- CustomInput.vue -->
<script setup>
import { defineProps, defineEmits } from "vue";

defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<!-- Parent.vue -->
<CustomInput v-model="searchText" />