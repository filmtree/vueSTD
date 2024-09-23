<!-- 부모 컴포넌트 -->
<!-- <template>
  <div>
    <h1>부모 컴포넌트</h1>
    <ChildComponent :icons="icons" :numbers="numbers" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ChildComponent from './ChildComponent.vue'; 

const icons = ref([
  'icon1',
  'icon2',
  'icon3'
]);

const numbers = ref([100, 200, 300]);
</script> -->


<!-- 자식 컴포넌트 -->
<template>
  <div>
    <h2>자식 컴포넌트</h2>
    <ul>
      <li
        v-for="(item, index) in numbers"
        :key="index"
        :style="getStyle(index)">
        {{ item }} - {{ item + 10 }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

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

const getStyle = index => {
  return {
    backgroundImage: `url(${require(`@/assets/icons/${props.icons[index] || props.icons[0]}.png`)})`
  }
}
</script>

<style>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 10px 0;
  background-repeat: no-repeat;
  background-position: left center;
  padding-left: 40px;
  height: 50px;
  line-height: 50px;
}
</style>
