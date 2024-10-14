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

type ButtonType = 'button' | 'submit' | 'reset'

interface Props {
  type: ButtonType
  sm?: boolean
  md?: boolean // 선택적으로 변경
  lg?: boolean
  pill?: boolean
  active?: boolean
  isSwitch?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button' as ButtonType,
  sm: false,
  md: true,
  lg: false,
  pill: false,
  active: true,
  isSwitch: false
})

// Props 변화 시 유효성 검사
const isValidType = (value: ButtonType) =>
  ['button', 'submit', 'reset'].includes(value)

onMounted(() => {
  if (!isValidType(props.type)) {
    console.warn(`Invalid type prop value: ${props.type}`)
  }
})

watch(
  () => props.type, // 항상 () => props.type처럼 getter 함수를 사용
  newValue => {
    if (!isValidType(newValue)) {
      console.warn(`Invalid type prop value: ${newValue}`)
    }
  }
)

// 'type' prop을 HTML 요소에 바인딩하기 전에 'switch' 값이 아닌지 확인
const effectiveType = computed(() => (props.isSwitch ? 'button' : props.type))

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
const attrs = useAttrs() // useAttrs를 한 번만 호출
const buttonStyles = computed(() => {
  const styles: Record<string, string> = {}
  Object.keys(attrs).forEach(attr => {
    if (attr.startsWith('text-')) {
      styles.color = attrs[attr] as string
    }
    if (attr.startsWith('background-')) {
      styles.backgroundColor = attrs[attr] as string
    }
  })
  return styles
})

const emit = defineEmits<{
  (event: 'update:active', value: boolean): void // void는 return 문이 없을 때 사용
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
