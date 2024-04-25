<template>
  <!-- 속성값을 data() 값으로 바인딩 -->
  <div v-bind="ObjectAttrs"></div>
</template>

<script>
export default {
  data() {
    return {
      ObjectAttrs: {
        id: "ObjectID",
        class: "ObjectClass",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>