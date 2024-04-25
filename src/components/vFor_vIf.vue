<template v-for="todo in todos">
  <li v-if="!todo.isComplete">
    {{ todo.name }}
  </li>
</template>



<script>
export default {};
</script>

<style lang="scss" scoped>
</style>