<!-- CustomInput.vue -->
<script setup>
import { computed, defineProps, defineEmits } from "vue";

const props = defineProps({
  modelValue: String // 명시적으로 타입을 정의
})
const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <input v-model="value" />
</template>