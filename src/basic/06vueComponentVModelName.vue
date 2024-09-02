<!-- 
  기본적으로 컴포넌트의 v-model은 modelValue를 프로퍼티로, 
  update:modelValue를 이벤트로 사용합니다. 
  v-model에 인자를 전달하여 이러한 이름을 수정할 수 있습니다: 
-->

<MyComponent v-model:title="bookTitle" />


<!-- 
  이 경우 자식 컴포넌트는 title 프로퍼티를 예상하고 
  부모 값을 업데이트하는 update:title 이벤트를 발생시켜야 합니다:
-->

<!-- MyComponent.vue -->
<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  title: String
})
const emit = defineEmits(['update:title'])
</script>

<template>
  <input
    type="text"
    :value="props.title"
    @input="emit('update:title', $event.target.value)"
  />
</template>