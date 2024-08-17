<template>
  <ul>
    <li>word</li>
    <li>word</li>
    <li>word</li>
  </ul>
</template>

<!-- Composition API  상태값을 내부 setup() 함수에서 사용 -->
<script>
import { ref, reactive, computed } from 'vue'

export default {
  setup() {
    const count = ref(0)

    const state = reactive({
      num1: 0,
      num2: 0,
      result: computed(() => parseInt(state.num1) + parseInt(state.num2))
    })

    const arr = reactive([
      { id: 1, text: '1번 아이템' },
      { id: 2, text: '2번 아이템' },
      { id: 3, text: '3번 아이템' }
    ])

    const item = computed(() => {
      return arr.filter(i => i.id < 3)
    })

    return {
      count,
      state,
      item
    }
  }
}
</script>