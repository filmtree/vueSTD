<template>
  <div>
    <h1>User Information</h1>
    <p>ID: {{ user.id }}</p>
    <p>Name: {{ user.name }}</p>
    <p>Email: {{ user.email }}</p>
    <button @click="updateUser">Update User</button>
  </div>
</template>

<script lang="ts" setup>
// //////// reactive()는 전달인자에서 타입을 암시적으로 추론합니다.

import { reactive } from 'vue'

// 인터페이스 방식. reactive는 제네릭 방식은 사용하지 않음.
interface User {
  id: number
  name: string
  email: string
}

const user = reactive<User>({
  id: 1,
  name: 'Alice',
  email: 'alice@example.com'
})

// 사용자 정보를 업데이트하는 함수 정의
const updateUser = () => {
  user.name = 'Bob'
  user.email = 'bob@example.com'
}
</script>

<style scoped>
/* 스타일 추가 */
</style>
