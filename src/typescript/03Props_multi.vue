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
  {{ props.book.title }}
</template>

<!-- Component Props 전달 방법 -->
<MyComponent :book="{ title: 'Hello', year: '2000', author: 'John' }" />
