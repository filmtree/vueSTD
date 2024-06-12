<!-- Vue2 Options API -->
<template>
  <div>
    <!-- @click 이벤트 핸들러를 사용하여 window.location.href를 변경합니다. -->
    <button @click="goToExternalSite">외부 사이트로 이동</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToExternalSite() {
      window.location.href = 'https://www.example.com';
    }
  }
}
</script>

<!-- Vue3 Composition API -->
<template>
  <div>
    <!-- @click 이벤트 핸들러를 사용하여 window.location.href를 변경합니다. -->
    <button @click="goToExternalSite">외부 사이트로 이동</button>
  </div>
</template>

<script setup>
const goToExternalSite = () => {
  window.location.href = 'https://www.example.com'
}
</script>
