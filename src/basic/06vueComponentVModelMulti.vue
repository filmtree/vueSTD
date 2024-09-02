<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  firstName: String,
  lastName: String
})

const emit = defineEmits(['update:firstName', 'update:lastName'])
</script>

<template>
  <input
    type="text"
    :value="props.firstName"
    @input="emit('update:firstName', $event.target.value)" />
  <input
    type="text"
    :value="props.lastName"
    @input="emit('update:lastName', $event.target.value)" />
</template>