<template>
  <div>
    <AsyncComponent />
  </div>	
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

const AsyncComponent = defineAsyncComponent({
  loader: () => import('./MyComponent.vue'),
  delay: 200, // 로딩 지연 시간 (ms)
  timeout: 3000, // 로딩 시간 초과 시간 (ms)
  errorComponent: ErrorComponent, // 에러 발생 시 표시할 컴포넌트
  loadingComponent: LoadingComponent // 로딩 중 표시할 컴포넌트
})

</script>