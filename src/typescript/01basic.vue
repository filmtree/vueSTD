<script setup lang="ts">
  // 올바른 런타임 코드를 생성하려면 defineProps() 의 제너릭 전달인자가 다음 중 하나여야 합니다.
  // defineProps<{ /*... */ }>() 
  
  // interface Props {/* ... */}
  // defineProps<Props>()
  
interface Props {
  foo: string
  bar?: number
}

const props = defineProps<Props>()
</script>

<template>
  <!-- 타입 확인 및 자동완성 활성화 -->
  {{ props }}
</template>

