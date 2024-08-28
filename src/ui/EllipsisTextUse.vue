<template>
  <div style="width: 400px">
    <EllipsisText :lines="2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </EllipsisText>
    <EllipsisText :lines="3">
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </EllipsisText>
  </div>
</template>

<script>
import EllipsisText from './EllipsisText.vue'

export default {
  components: {
    EllipsisText
  }
}
</script>

<style scoped>
</style>