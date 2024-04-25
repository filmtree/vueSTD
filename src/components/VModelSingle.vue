<template>
  <label>
    name :
    <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
  </label>
</template>

<script>
  export default {
    props: {
      modelValue: {
        default: ""
      },
    },
    methods: {
      // myChange($event) {
      //   this.$emit('update:modelValue', $event.target.value);
      // },
    },
  }
</script>