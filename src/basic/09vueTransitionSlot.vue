<!-- MyTransition.vue -->
<script>
// JavaScript 훅 로직...
</script>

<template>
  <!-- 빌트인 트랜지션 컴포넌트 래핑 -->
  <Transition name="my-transition" @enter="onEnter" @leave="onLeave" >
    <slot></slot>
    <!-- 슬롯 컨텐츠 전달 -->
  </Transition>
</template>

<style>
/*
  필요한 CSS 정의...
  참고: 슬롯 컨텐츠에 적용되지 않으므로,
  여기에서 <style scoped>를 사용하지 마십시오.
*/
</style>