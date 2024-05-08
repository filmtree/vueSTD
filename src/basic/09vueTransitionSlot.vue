<!-- MyTransition.vue -->
<script setup>
function onEnter(el, done) {
  el.animate([{ height: "0" }, { height: `${el.scrollHeight}px` }], {
    duration: 500,
    easing: "ease",
    fill: "forwards",
  }).finished.then(done);
}

function onLeave(el, done) {
  el.animate([{ height: `${el.scrollHeight}px` }, { height: "0" }], {
    duration: 500,
    easing: "ease",
    fill: "forwards",
  }).finished.then(done);
}
</script>

<template>
  <!-- 빌트인 트랜지션 컴포넌트 래핑 -->
  <Transition name="my-transition" @enter="onEnter" @leave="onLeave">
    <slot></slot>
    <!-- 슬롯 컨텐츠 전달 -->
  </Transition>
</template>

<style>
.my-transition-enter-active,
.my-transition-leave-active {
  transition: opacity 0.5s ease;
}

.my-transition-enter-from,
.my-transition-leave-to {
  opacity: 0;
}
</style>