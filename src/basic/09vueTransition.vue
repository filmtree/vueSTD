<button @click="show = !show">토글</button>
<!-- <Transition>은 슬롯 컨텐츠로 단일 엘리먼트 또는 컴포넌트만 지원합니다. 
  컨텐츠가 컴포넌트인 경우, 컴포넌트에는 단일 루트 엘리먼트만 있어야 합니다. -->
<Transition>
  <p v-if="show">안녕</p>
</Transition>

<style>
/* 이 클래스들이 무엇을 하는지 다음에 설명하겠습니다. */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>