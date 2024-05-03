<Transition
  :css="false"
  @before-enter="onBeforeEnter"
  @enter="onEnter"
  @after-enter="onAfterEnter"
  @enter-cancelled="onEnterCancelled"
  @before-leave="onBeforeLeave"
  @leave="onLeave"
  @after-leave="onAfterLeave"
  @leave-cancelled="onLeaveCancelled"
>
  <!-- ... -->
</Transition>

<script>
// 엘리먼트가 DOM에 삽입되기 전에 호출됩니다.
// 이것을 사용하여 엘리먼트의 "enter-from" 상태를 설정합니다.
function onBeforeEnter(el) {}

// 엘리먼트가 삽입되고 1 프레임 후 호출됩니다.
// 진입 애니메이션을 시작하는 데 사용합니다.
function onEnter(el, done) {
  // CSS와 함께 사용되는 경우, 선택적으로
  // 트랜지션 종료를 나타내기 위해 done 콜백을 호출합니다.
  done();
}

// 진입 트랜지션이 완료되면 호출됩니다.
function onAfterEnter(el) {}
function onEnterCancelled(el) {}

// 진출 훅 전에 호출됩니다.
// 대부분의 경우 그냥 진출 훅을 사용해야 합니다.
function onBeforeLeave(el) {}

// 진출 트랜지션이 시작될 때 호출됩니다.
// 진출 애니메이션을 시작하는 데 사용합니다.
function onLeave(el, done) {
  // CSS와 함께 사용되는 경우, 선택적으로
  // 트랜지션 종료를 나타내기 위해 done 콜백을 호출합니다.
  done();
}

// 진출 트랜지션이 완료되고,
// 엘리먼트가 DOM에서 제거된 후 호출됩니다.
function onAfterLeave(el) {}

// v-show 트랜지션에서만 사용 가능합니다.
function onLeaveCancelled(el) {}
</script>