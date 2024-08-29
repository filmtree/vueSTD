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
  el.style.transition = 'height .3s ease'
  el.style.height = 0
}

// el.offsetHeight를 호출함으로써 브라우저는 이전 스타일을 적용한 후,
// 다음 스타일을 적용하기 전에 레이아웃을 다시 계산하게 됩니다.
// 이렇게 하면 브라우저는 두 상태(높이 0과 실제 높이) 간의 변화를 인식하고,
// CSS 전환 효과를 적용할 수 있습니다.

function onEnter(el, done) {
  el.offsetHeight // trigger reflow
  el.style.height = el.scrollHeight + 'px'
  el.addEventListener('transitionend', done)
}

// function onAfterEnter(el) {}

// function onEnterCancelled(el) {}

function onBeforeLeave(el) {
  el.style.transition = 'height .3s ease'
  el.style.height = el.scrollHeight + 'px'
}

function onLeave(el, done) {
  el.style.height = 0
  el.addEventListener('transitionend', done)
}

// function onAfterLeave(el) {}

// function onLeaveCancelled(el) {}
</script>

<style>
.container {
  overflow: hidden; 
}

/* 

.transition-enter-active, .transition-leave-active {
  transition: height 0.3s ease-in-out;
}

.transition-enter, .transition-leave-to {
  height: 0; 
} 

*/
</style>
