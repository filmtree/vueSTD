<template>
  <MyComponent
    v-for="(item, index) in items"
    :item="item"
    :index="index"
    :key="item.id"
  />

  <!-- 배열 리스트 렌더링 -->
  <ul>
    <li v-for="n in evenNumbers" :key="n">{{ n }}</li>
  </ul>

  <!-- 중첩배열 -->
  <ul v-for="numbers in sets" :key="numbers">
    <li v-for="n in even(numbers)" :key="n">{{ n }}</li>
  </ul>
</template>

<script setup>
import { ref, computed } from "vue";
const numbers = ref([1, 2, 3, 4, 5]);

const evenNumbers = computed(() => {
  return numbers.value.filter((n) => n % 2 === 0);

  // 계산된 속성에서 reverse()와 sort() 사용에 주의하십시오!
  // 이 두 가지 방법은 원본 배열을 수정하므로 계산된 속성의 getter 함수에서 피해야합니다.
  // 다음 메서드를 호출하기 전에 원본 배열의 복사본을 만듭니다:
  //  return numbers.reverse()
  //  return [...numbers].reverse()
});

const sets = ref([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
]);

function even(numbers) {
  return numbers.filter((number) => number % 2 === 0);
}
</script>