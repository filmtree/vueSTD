<script setup lang="ts">
import { defineProps } from 'vue'

interface Book {
  title: string
  author: string
  year: number
}

const props = defineProps<{
  book: Book
}>()
</script>

<template>
  {{ props.title }}
</template>