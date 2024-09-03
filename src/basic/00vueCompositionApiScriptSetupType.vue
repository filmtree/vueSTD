<script setup lang="ts">
import {
  ref,
  reactive,
  computed,
  watch,
  watchEffect,
  onMounted,
  onUpdated,
  onUnmounted,
  provide,
  inject,
  nextTick
} from 'vue'
// 제너릭 타입 전달인자를 통해 순수 타입으로 props를 정의

// 제네릭 인자 < ... >
const props = defineProps<{
  foo: string
  bar?: number
}>()

// Props 정의
interface Props {
  title: string
  message?: string
}

const props = defineProps<Props>()

// 기본값
const props = withDefaults(defineProps<Props>(), {
  msg: 'hello',
  labels: () => ['one', 'two']
})

// 인터페이스 방식
interface Emits {
  (e: 'increment'): void
  (e: 'update-message', message: string): void
}

const emit = defineEmits<Emits>()

// 제네릭 인자
const emit = defineEmits<{
  (e: 'change', id: number): void
  (e: 'update', value: string): void
}>()

const handleChange = () => {
  emit('change', 1) // ID가 1인 항목의 변경
}

// 복합 Props 타입
interface Book {
  title: string
  author: string
  year: number
}

const props = defineProps<{
  book: Book
}>()

// 반응형 데이터
const count = ref<number>(0)
// const user = reactive<{ name: string; age: number }>({ name: 'John Doe', age: 30 })

interface Book {
  title: string
  year?: number
}

const book: Book = reactive({ title: 'Vue 3 Guide' })

// 계산된 속성
const doubleCount = computed(() => count.value * 2)

const double = computed<number>(() => {
  // type error if this doesn't return a number
})

// 감시자
watch(count, (newCount, oldCount) => {
  console.log(`Count changed from ${oldCount} to ${newCount}`)
})

watchEffect(() => {
  console.log(`User name changed to ${user.name}`)
})
//event handler type
function handleChange(event: Event) {
  console.log((event.target as HTMLInputElement).value)
}

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

import { provide, inject } from 'vue'
import type { InjectionKey } from 'vue'

const key = Symbol() as InjectionKey<string>

provide(key, 'foo') // 문자열이 아닌 값을 제공하면 에러가 발생합니다

const foo = inject(key) // type of foo: string | undefined
const foo = inject<string>('foo') // type: string | undefined
//undefined 타입은 기본값을 제공하여 제거할 수 있습니다:
const foo = inject<string>('foo', 'bar') // type: string
//항상 제공된다고 확신하는 경우 값을 강제로 캐스팅할 수도 있습니다.
const foo = inject('foo') as string

// 템플릿 참조
const el = ref<HTMLInputElement | null>(null)
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

import MyModal from './MyModal.vue'
const modal = ref<InstanceType<typeof MyModal> | null>(null)
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