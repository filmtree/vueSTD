<template>
  <Transition
    :css="true"
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @after-enter="onAfterEnter"
    @enter-cancelled="onEnterCancelled"
    @before-leave="onBeforeLeave"
    @leave="onLeave"
    @after-leave="onAfterLeave"
    @leave-cancelled="onLeaveCancelled">
    <div class="container">...</div>
  </Transition>
</template>

<script setup>
function onBeforeEnter(el) {
  el.style.height = 0
}

function onEnter(el, done) {
  el.offsetHeight // trigger reflow
  el.style.height = el.scrollHeight + 'px'
  done()
}

function onAfterEnter(el) {}

function onEnterCancelled(el) {}

function onBeforeLeave(el) {
  el.style.height = el.scrollHeight + 'px'
}

function onLeave(el, done) {
  el.style.height = 0
  done()
}

function onAfterLeave(el) {}

function onLeaveCancelled(el) {}
</script>

<style>
.container {
  overflow: hidden; /* 내용이 잘리지 않도록 overflow hidden 추가 */
}

.transition-enter-active,
.transition-leave-active {
  transition: height 0.3s ease-in-out;
}

.transition-enter,
.transition-leave-to {
  height: 0; /* enter 시 초기 높이와 leave 시 최종 높이 */
}
</style>