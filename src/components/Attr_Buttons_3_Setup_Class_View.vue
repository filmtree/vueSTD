<template>
  <div>
    <h1>버튼 컴포넌트 사용 예시</h1>

    <!-- $event는 자식 컴포넌트에서 emit된 값을 의미. 여기서는  emit('update:active', !props.active)의 !props.active 를 의미 -->
    <MyButton type="button" sm :active="isActive" @update:active="isActive = $event" text-color="red" background-color="lightgray">작은 버튼</MyButton>

    <MyButton type="switch" :active="isSwitchActive" @update:active="isSwitchActive = $event" md pill text-color="white" background-color="blue">스위치 버튼</MyButton>

    <MyButton type="submit" lg text-color="black" background-color="green">큰 제출 버튼</MyButton>

    <MyButton type="reset" md text-color="white" background-color="red">리셋 버튼</MyButton>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MyButton from './Attr_Buttons_3_Setup_Class.vue'

const isActive = ref(true)
const isSwitchActive = ref(true)
</script>

<style scoped>
h1 {
  margin-bottom: 20px;
}
</style>
