<script setup lang="ts">
import { ref, reactive, computed, watch, watchEffect, onMounted, onUpdated, onUnmounted, provide, inject, nextTick } from 'vue'

// Props 정의
interface Props {
  title: string
  message?: string
}

const props = defineProps<Props>()

// Emits 정의
interface Emits {
  (e: 'increment'): void
  (e: 'update-message', message: string): void
}

// 반응형 데이터
const count = ref<number>(0)
const user = reactive<{ name: string; age: number }>({ name: 'John Doe', age: 30 })

// 계산된 속성
const doubleCount = computed(() => count.value * 2)

// 감시자
watch(count, (newCount, oldCount) => {
  console.log(`Count changed from ${oldCount} to ${newCount}`)
})

watchEffect(() => {
  console.log(`User name changed to ${user.name}`)
})

// 생명 주기 훅
onMounted(() => {
  console.log('Component mounted!')
})

onUpdated(() => {
  console.log('Component updated!')
})

onUnmounted(() => {
  console.log('Component unmounted!')
})

// 의존성 주입
provide('theme', 'dark')
const theme = inject<string>('theme')

// 템플릿 참조
const buttonRef = ref<HTMLButtonElement | null>(null)

// 기타 옵션
function incrementCount() {
  count.value++
}

function updateUserName() {
  user.name = 'Jane Doe'
}

nextTick(() => {
  // DOM 업데이트 이후 실행
  buttonRef.value?.focus()
})
</script>

<template>
  <div>
    <h1>Composition API with <script setup> and TypeScript</h1>
    <p>Count: {{ count }}</p>
    <p>Double Count: {{ doubleCount }}</p>
    <p>User: {{ user.name }} ({{ user.age }})</p>
    <p>Theme: {{ theme }}</p>
    <button @click="incrementCount">Increment</button>
    <button @click="updateUserName">Update User Name</button>
    <button ref="buttonRef">Focus me</button>
  </div>
</template>