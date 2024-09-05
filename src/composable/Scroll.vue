<template>
  <div>
    <header
      ref="scrollElement"
      :style="{ transform: `translateY(-${scrollY}px)` }"
      class="header">
      <h1>메뉴 헤더</h1>
    </header>
    <main>
      <p v-for="n in 100" :key="n">스크롤하여 헤더를 숨기세요.</p>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useScroll } from './useScroll'

const scrollElement = ref(null) // 헤더 요소에 대한 ref
const { scrollY } = useScroll(scrollElement) // ref를 전달
</script>

<style>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  transition: transform 0.3s ease;
  z-index: 1000;
}

main {
  margin-top: 60px; /* 헤더 높이만큼 여백 */
}
</style>
