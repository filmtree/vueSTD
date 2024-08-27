<template>
  <div ref="textElement" class="ellipsis-text">
    <slot></slot>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue'

export default {
  props: {
    lines: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const textElement = ref(null)

    const applyEllipsis = () => {
      if (!textElement.value) return

      const element = textElement.value
      const lineHeight = parseInt(window.getComputedStyle(element).lineHeight)
      const maxHeight = lineHeight * props.lines

      if (element.scrollHeight > maxHeight) {
        while (element.scrollHeight > maxHeight) {
          const text = element.innerText
          element.innerText = text.slice(0, -1)
        }
        element.innerText += '...'
      }
    }

    onMounted(applyEllipsis)
    watch(textElement, applyEllipsis) // 요소가 변경될 때마다 적용

    return { textElement }
  }
}
</script>

<style>
.ellipsis-text {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--line-clamp);
  font-size: 12px;
}
</style>
