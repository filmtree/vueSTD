<template>
  <div>
    <h1>User Name: {{ user.name }}</h1>
    <button @click="changeName">Change Name</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// 인터페이스 방식
interface User {
  id: number
  name: string
}

// User 타입으로 ref 정의
const user = ref<User>({ id: 1, name: 'Alice' })

// 이름 변경 함수 정의
const changeName = () => {
  user.value.name = 'Bob'
}
</script>

<style scoped>
/* 스타일 추가 */
</style>