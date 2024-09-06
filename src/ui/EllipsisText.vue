<template>
  <div ref="textElement" class="ellipsis-text">
    <slot></slot>
  </div>
</template>
<script setup>
import { ref, defineProps, onMounted, watch } from 'vue'

const props = defineProps({
  lines: {
    type: Number,
    required: true
  }
})
const textElement = ref(null)

const applyEllipsis = () => {
  if (!textElement.value) return

  const element = textElement.value
  const lineHeight = parseInt(window.getComputedStyle(element).lineHeight)
  const maxHeight = lineHeight * props.lines // 사용자가 지정한 줄 수에 맞춰 maxHeight 계산

  if (element.scrollHeight > maxHeight) {
    let text = element.innerText
    while (element.scrollHeight > maxHeight) {
      text = text.slice(0, -3) // 마지막 문자 제거
      element.innerText = text
    }
    // '...'을 추가하기 전에 텍스트가 줄넘김이 발생하지 않도록 확인
    while (element.scrollHeight <= maxHeight && text.length > 0) {
      text += '...'
      element.innerText = text
    }
    // 마지막으로 '...'이 추가된 후 줄넘김이 발생하면 다시 제거
    if (element.scrollHeight > maxHeight) {
      text = text.slice(0, -5) // '...' 제거
      element.innerText = text + '...'
    }
  }
}

onMounted(applyEllipsis)
watch(() => props.lines, applyEllipsis) // props.lines가 변경될 때마다 적용
</script> 

<style scoped>
.ellipsis-text {
  margin: 20px 0;
  line-height: 1.5; /* 줄 높이 설정 */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: inherit;
  hyphens: auto; /* 자동 하이픈 추가 */
  word-break: break-all;
}
</style>