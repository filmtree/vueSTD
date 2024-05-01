<!-- 수정자 v-model -->
<MyComponent v-model.capitalize="myText" />
<!-- 인자와 수정자 v-model -->
<MyComponent v-model:title.capitalize="myText" />
<!-- 
  컴포넌트의 modelModifiers 프로퍼티에 capitalize가 포함되어 있고 
  그 값은 v-model 바인딩 v-model.capitalize="myText"에 
  설정되어 있기 때문에 true인 것을 알 수 있습니다.
 -->

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps(
  {
    modelValue: String,
    modelModifiers: { default: () => ({}) }
  },
  ['title', 'titleModifiers']
)

const emit = defineEmits(['update:modelValue', 'update:title'])

function emitValue(e) {
  let value = e.target.value
  if (props.modelModifiers.capitalize) {
    value = value.charAt(0).toUpperCase() + value.slice(1)
  }
  emit('update:modelValue', value)
}

/* 인자와 수정자가 모두 있는 v-model 바인딩 */
// const props = defineProps(['title', 'titleModifiers'])
// defineEmits(['update:title'])

console.log(props.titleModifiers) // { capitalize: true }
</script>

<template>
  <input type="text" :value="modelValue" @input="emitValue" />
</template>