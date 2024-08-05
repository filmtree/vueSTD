<template>
  <div>
    <h1>{{ value }}</h1>
    <h2>{{ year }}</h2>
    <button @click="increment">Increment</button>
  </div>
</template>

<script lang="ts" setup>

import { ref } from 'vue';
import type { Ref } from 'vue'

// 숫자 또는 문자열을 허용하는 ref 정의
const value = ref<number | string>(0);

// 타입을 명확하게 하고 싶을때
const year: Ref<string | number> = ref('2024');

// 숫자 증가 함수 정의
const increment = () => {
  value.value = Number(value.value) + 1; // 숫자로 변환하여 증가
  year.value = Number(year.value) + 1
};

</script>

<style scoped>
/* 스타일 추가 */
</style>