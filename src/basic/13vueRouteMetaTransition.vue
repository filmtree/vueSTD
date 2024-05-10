<script>
/* Route의 meta 값으로 트랜지션을 따로 적용 */
const routes = [
  {
    path: "/custom-transition",
    component: PanelLeft,
    meta: { transition: "slide-left" },
  },
  {
    path: "/other-transition",
    component: PanelRight,
    meta: { transition: "slide-right" },
  },
];
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <!-- 커스텀 트랜지션 사용하거나 `fade`로 대체 -->
    <transition :name="route.meta.transition || 'fade'" mode="out-in">
      <component :is="Component" :key="route.path" />
      <!-- :key="route.path"를 사용해 컴포넌트 재사용으로 인해 transition이 적용되지 않는 것 방지. -->
    </transition>
  </router-view>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: opacity 1s, transform 1s;
}

.slide-left-enter-from,
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: opacity 1s, transform 1s;
}

.slide-right-enter-from,
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>