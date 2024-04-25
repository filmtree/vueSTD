<template>
  <div>
    <!-- Label 있는 v-model -->
    <label>
      <input
        type="text"
        :value="firstName"
        @input="$emit('update:first-name', $event.target.value)"
      />
      <input
        type="text"
        :value="lastName"
        @input="$emit('update:last-name', $event.target.value)"
      />
    </label>
    <!-- Label 없는 v-model -->
    <label>
      name :
      <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </label>
  </div>
</template>

<script>
export default {
  props: {
    firstName: {
      default: "",
    },
    lastName: {
      default: "",
    },
  },
  methods: {
    onInputFirstName(e) {
      this.$emit("update:first-name", e.target.value);
    },
    onInputLastName(e) {
      this.$emit("update:last-name", e.target.value);
    },
  },
};
</script>