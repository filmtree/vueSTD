<template>
  <div>
    <h1>{{ message }}</h1>
    <h2>{{ year }}</h2>
    <button @click="updateMessage">Update Message</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { Ref } from 'vue'

// ref로 반응형 변수 정의. 제네릭 인자
const message = ref<string>('Hello, Vue with TypeScript!')

// 타입을 명확하게 하고 싶을때. 제네릭 인자
const year: Ref<string> = ref('2024')

// 메시지 업데이트 함수 정의
const updateMessage = () => {
  message.value = 'Message Updated!'
  year.value = '2025'
}
</script>

<style scoped>
/* 스타일 추가 */
</style>