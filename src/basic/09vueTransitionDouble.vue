<script setup>
import { ref } from "vue";

const show = ref(true);
</script>

<template>
  <button @click="show = !show">토글</button>

  <Transition :duration="{ enter: 500, leave: 800 }">...</Transition>
  <Transition duration="550" name="nested">
    <div v-if="show" class="outer">
      <div class="inner">  
        중첩 트랜지션을 사용하면 모든 내부 엘리먼트의 트랜지션이 완료될 때까지 원하는 동작이 대기해야 합니다.
        이러한 경우 <transition> 컴포넌트의 duration prop을 사용하여 명시적 트랜지션 지속 시간(밀리초 단위)을 지정할 수 있습니다. 
        총 지속 시간은 딜레이에 내부 엘리먼트의 트랜지션 지속 시간을 더한 값과 일치해야 합니다: 
      </div>
    </div>
  </Transition>
</template>

<style>
.outer,
.inner {
  background: #eee;
  padding: 30px;
  min-height: 100px;
}

.inner {
  background: #ccc;
}

.nested-enter-active,
.nested-leave-active {
  transition: all 0.3s ease-in-out;
}
/* 부모 엘리먼트의 지연된 진출 */
.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

/* 중첩 셀렉터를 사용하여 중첩(자식) 엘리먼트를 트랜지션할 수도 있습니다. */
.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.3s ease-in-out;
}
/* 중첩된(자식) 엘리먼트의 지연된 진입 */
.nested-enter-active .inner {
  transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  /*
    중첩된 불투명도 트랜지션을 처리할 때 Chrome 96 버그 해결 핵.
    버그가 수정된 다른 브라우저나 Chrome 99+에서는 필요하지 않습니다.
  */
  opacity: 0.001;
}
</style>