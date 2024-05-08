<template>
  <div>
    <div
      class="box"
      @mouseenter="showAnimation = true"
      @mouseleave="showAnimation = false"
    >
      <!-- 이 예제에서는 마우스를 올리면 CSS 애니메이션이 실행되고, 마우스를 내리면 CSS 트랜지션 효과가 적용됩니다. 
      <transition> 컴포넌트의 type 속성을 "animation"과 "transition"으로 각각 설정하여 이를 구현했습니다.
      이처럼 type 속성을 사용하면 요소의 상태 변화에 따른 복잡한 효과를 구현할 수 있습니다. -->

      <transition name="box-animation" type="animation">
        <div v-if="showAnimation" class="box-content">
          <h2>Animated Box</h2>
          <p>This box has a CSS animation when it appears.</p>
        </div>
      </transition>
      
      <transition name="box-hover" type="transition">
        <div v-if="!showAnimation" class="box-content">
          <h2>Hovered Box</h2>
          <p>This box has a CSS transition on hover.</p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAnimation: false,
    };
  },
};
</script>

<style>
.box {
  width: 300px;
  height: 200px;
  background-color: #f1f1f1;
  border: 1px solid #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.box-content {
  text-align: center;
}

.box-animation-enter-active,
.box-animation-leave-active {
  animation: box-animation 0.5s;
}

@keyframes box-animation {
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.box-hover-enter-active,
.box-hover-leave-active {
  transition: all 0.3s ease;
}

.box-hover-enter,
.box-hover-leave-to {
  transform: scale(0.8);
  opacity: 0;
}
</style>
