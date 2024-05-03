<Transition name="slide-fade">
  <p v-if="show">안녕</p>
</Transition>

<style>
/*
  진입/진출 애니메이션은 다른 지속 시간과
  타이밍 함수를 사용할 수 있습니다.
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
