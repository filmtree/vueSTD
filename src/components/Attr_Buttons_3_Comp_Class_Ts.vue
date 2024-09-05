<template>
  <button
    v-bind="$attrs"
    :type="effectiveType"
    :class="classes"
    :style="buttonStyles"
    ref="button"
    @click="props.isSwitch ? onClick() : null">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import {
  ref,
  computed,
  defineProps,
  withDefaults,
  defineEmits,
  useAttrs,
  onMounted,
  watch
} from 'vue'

//// 정적 유효성 검사
type ButtonType = 'button' | 'submit' | 'reset' // Type Assertion 방식 (정적 컴파일)

interface Props {
  type: ButtonType
  sm?: boolean // optional
  md: boolean // 기본값 required: true와 같음
  lg?: boolean // optional
  pill?: boolean // optional
  active?: boolean // optional
  isSwitch?: boolean // optional
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button' as ButtonType, // Type Assertion 방식 (정적 컴파일)
  sm: false,
  md: true,
  lg: false,
  pill: false,
  active: true,
  isSwitch: false
})

//// 실시간 유효성 검사
// Validator 함수 정의
const isValidType = (value: ButtonType) => ['button', 'submit', 'reset'].includes(value)


// 마운트 시 유효성 검사
onMounted(() => {
  if (!isValidType(props.type)) {
    console.warn(`Invalid type prop value: ${props.type}`)
  }
})

// Props 변화 시 유효성 검사. 동적 컴파일
watch(
  () => props.type,
  newValue => {
    if (!isValidType(newValue)) {
      console.warn(`Invalid type prop value: ${newValue}`)
    }
  }
)

// 'type' prop을 HTML 요소에 바인딩하기 전에 'switch' 값이 아닌지 확인
const effectiveType = computed(() => {
  return props.isSwitch ? 'button' : props.type
})

const classes = computed(() => {
  const result: string[] = []
  if (props.sm) result.push('sm')
  else if (props.lg) result.push('lg')
  else result.push('md')
  if (props.pill) result.push('pill')
  if (props.isSwitch && !props.active) result.push('deactive')
  return result
})

const button = ref<HTMLElement | null>(null)

const buttonStyles = computed(() => {
  const styles: Record<string, string> = {}
  Object.keys(useAttrs()).forEach(attr => {
    if (attr.startsWith('text-')) {
      styles.color = useAttrs()[attr] as string
    }
    if (attr.startsWith('background-')) {
      styles.backgroundColor = useAttrs()[attr] as string
    }
  })
  return styles
})

const emit = defineEmits<{
  (event: 'update:active', value: boolean): void
}>()

const onClick = () => {
  emit('update:active', !props.active)
}
</script>

<style scoped>
button {
  outline: none;
}
.sm {
  height: 20px;
  font-size: 13px;
}
.md {
  height: 30px;
  font-size: 22px;
}
.lg {
  height: 40px;
  font-size: 31px;
}
.pill {
  border-radius: 16px;
}
.deactive {
  filter: brightness(50%);
}
</style>
  