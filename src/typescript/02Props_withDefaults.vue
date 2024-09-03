<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'

export interface Props {
  msg?: string
  labels?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  msg: 'hello',
  labels: () => ['one', 'two']
})
</script>

<template>
  {{ props.msg }}
</template>