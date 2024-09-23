<!-- 부모 컴포넌트 -->
<!-- <template>
  <div>
    <h1>부모 컴포넌트</h1>
    <ChildComponent :icons="icons" :numbers="numbers" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ChildComponent from './ChildComponent.vue'; // 자식 컴포넌트 경로

const icons = ref([
  'icon1',
  'icon2',
  'icon3'
]);

const numbers = ref([100, 200, 300]);
</script> -->


<!-- 자식 컴포넌트 -->
<script setup>
import { defineProps } from 'vue'

// 부모 컴포넌트에서 전달받은 props 정의
const props = defineProps({
  icons: {
    type: Array,
    required: true
  },
  numbers: {
    type: Array,
    required: true
  }
})

// 아이콘을 가져오는 함수
const getIcon = index => {
  return require(`@/assets/icons/${props.icons[index] || props.icons[0]}.png`)
}
</script>


<template>
  <div>
    <h2>자식 컴포넌트</h2>
    <ul>
      <li v-for="(item, index) in numbers" :key="index">
        <img :src="getIcon(index)" alt="" />
        {{ item }} - {{ item + 10 }}
      </li>
    </ul>
  </div>
</template>

