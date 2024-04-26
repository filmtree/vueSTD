<template>

</template>

<script setup>
import { nextTick } from 'vue'

function increment() {
  state.count++
  nextTick(() => {
    // 업데이트된 DOM에 접근 가능
  })
}
</script>