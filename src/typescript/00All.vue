<script setup lang="ts">
import { ref, reactive, computed, provide, inject } from 'vue'
// 제너릭 타입 전달인자를 통해 순수 타입으로 props를 정의

// 제네릭 인자 < ... >
const props = defineProps<{
  foo: string
  bar?: number
}>()

// Props 인터페이스 방식 정의
interface Props {
  title: string
  message?: string
}

const props = defineProps<Props>()

// Props 인터페이스 방식 기본값
const props = withDefaults(defineProps<Props>(), {
  msg: 'hello',
  labels: () => ['one', 'two']
})

// Emit 인터페이스 방식
interface Emits {
  (e: 'increment'): void
  (e: 'update-message', message: string): void
}

const emit = defineEmits<Emits>()

// Emit 제네릭 인자
const emit = defineEmits<{
  (e: 'change', id: number): void
  (e: 'update', value: string): void
}>()

const handleChange = () => {
  emit('change', 1) // ID가 1인 항목의 변경
}

// Props 복합 타입
interface Book {
  title: string
  author: string
  year: number
}

const props = defineProps<{
  book: Book
}>()

// 반응형 데이터. 제네릭 인자
const count = ref<number>(0)

// 반응형 객체
// reactive는 제네릭이 아닌 interface 방식으로 해야 함.
// const user = reactive<{ name: string; age: number }>({ name: 'John Doe', age: 30 })
interface Book {
  title: string
  year?: number
}
const book: Book = reactive({ title: 'Vue 3 Guide' })

// 계산된 속성 제네릭 인자.
const double = computed<number>(() => {
  // type error if this doesn't return a number
})

//event handler type
function handleChange(event: Event) {
  console.log((event.target as HTMLInputElement).value)
}

// 의존성 주입
import type { InjectionKey } from 'vue'

// Symbol() 사용하여 고유한 문자열 값 설정.
const key = Symbol() as InjectionKey<string>

// 문자열이 아닌 값을 제공하면 에러가 발생합니다
provide(key, 'foo')

const foo = inject<string>('foo') // type: string | undefined

//undefined 타입은 기본값을 제공하여 제거할 수 있습니다:
const foo = inject<string>('foo', 'bar') // type: string

//항상 제공된다고 확신하는 경우 값을 강제로 캐스팅할 수도 있습니다.
const foo = inject('foo') as string

// 템플릿 Ref 참조
const el = ref<HTMLInputElement | null>(null)
const buttonRef = ref<HTMLButtonElement | null>(null)

// 컴포넌트 타입설정
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