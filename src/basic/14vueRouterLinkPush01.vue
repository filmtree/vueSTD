<!-- Vue2 Options API -->
<template>
  <div>
    <!-- @click 이벤트 핸들러를 사용하여 라우터의 push 메서드를 호출합니다. -->
    <button @click="goToAbout">About 페이지로 이동</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToAbout() {
      this.$router.push('/about');
    }
  }
}
</script>


<!-- Vue3 Composition API -->
<template>
  <div>
    <!-- @click 이벤트 핸들러를 사용하여 라우터의 push 메서드를 호출합니다. -->
    <button @click="goToAbout">About 페이지로 이동</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToAbout = () => {
  router.push('/about')
}
</script>