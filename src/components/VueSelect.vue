<template>
    <select v-model="selected" :value="modelValue" @input="$emit('update:modelValue',$event.target.value)">
      <option v-for="option in options" :value="option.value" :key="option">
        {{ option.text }}
      </option>
    </select>
    <!-- <span>Selected: {{ selected }}</span> -->
</template>

<script>
import {ref, reactive} from 'vue'

export default {
  props:{
    modelValue: {
      default:""
    }
  },
  setup(){
    let selected = ref("A")
    let options = reactive([
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ])
    return {
      selected,
      options
    }
  }
  }
</script>

<style lang="scss" scoped>

</style>