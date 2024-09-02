<!-- CustomInput.vue -->
<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: String // 명시적으로 타입을 정의
})
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <input
    :value="props.modelValue"
    @input="emit('update:modelValue', $event.target.value)" />
</template>

<!-- Parent.vue -->
<template>
  <div>
    <h1>v-model을 사용하는 커스텀 입력</h1>
    <CustomInput v-model="searchText" />
    <p>입력 값: {{ searchText }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const searchText = ref('')
</script>
