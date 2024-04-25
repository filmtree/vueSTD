<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
    };
  },
  computed: {
    fullName: {
      // getter
      get() {
        return this.firstName + " " + this.lastName;
      },
      // setter
      set(newValue) {
        // 참고: 분해 할당 문법을 사용함.
        [this.firstName, this.lastName] = newValue.split(" ");
      },
    },
  },
};
</script>

<style lang="scss" scoped>
</style>