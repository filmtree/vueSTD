<template>
  <h1>Home View</h1>
</template>


<script>
// vue2
export default {
  // index.js에 있는 meta tag title 값을 적용
  beforeMount() {
    document.title = this.$route.meta.title
  }
}
</script>

<script setup>
// vue3
import { onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

onBeforeMount(() => {
  document.title = route.meta.title
})

</script>