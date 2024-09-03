<template>
  <div>
    <input
      type="text"
      v-model="inputValue"
      @input="emitUpdate"
      placeholder="Type something..." />
    <button @click="emitChange">Change</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from 'vue'

// 인터페이스 방식
// interface Emits {
//   (e: 'increment'): void
//   (e: 'update-message', message: string): void
// }

// const emit = defineEmits<Emits>()

// 제네릭 인자
const emit = defineEmits<{
  (e: 'change', id: number): void
  (e: 'update', value: string): void
}>()

const handleChange = () => {
  emit('change', 1) // ID가 1인 항목의 변경
}

const inputValue = ref<string>('')

// input 필드의 값을 emit하는 함수
const emitUpdate = () => {
  emit('update', inputValue.value) // 'update' 이벤트 발생
}

// 버튼 클릭 시 id와 함께 'change' 이벤트 발생
const emitChange = () => {
  const id = 1 // 예시 ID
  emit('change', id) // 'change' 이벤트 발생
}
</script>

<style scoped>
/* 스타일 추가 */
</style>