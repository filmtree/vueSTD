<template>
  <button :type="type" :class="buttonClasses" :style="buttonStyle">
    <slot>버튼</slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, computed } from 'vue'

type ButtonType = 'button' | 'submit' | 'reset'
type ColorType = 'blue' | 'red' | 'green' | 'yellow'
type SizeType = 'small' | 'medium' | 'large'
type ShapeType = 'rounded' | 'square'
type StyleProperty = 'padding' | 'fontSize' | 'maxWidth'

interface Props {
  type?: ButtonType
  color?: ColorType
  size?: SizeType
  shape?: ShapeType
  width?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button' as ButtonType,
  color: 'blue' as ColorType,
  size: 'small' as SizeType,
  shape: 'rounded' as ShapeType,
  width: '100px'
})

const buttonClasses = computed(() =>
  [props.color, props.size, props.shape].join(' ')
)

const buttonStyle = computed(() => ({
  padding: getStyleValue(props.size, 'padding'),
  fontSize: getStyleValue(props.size, 'fontSize'),
  maxWidth: getStyleValue(props.size, 'maxWidth'),
  width: props.width || 'auto'
}))

function getStyleValue(size?: SizeType, property?: StyleProperty): string {
  const styles = {
    small: {
      padding: '5px 10px',
      fontSize: '14px',
      maxWidth: '60px'
    },
    medium: {
      padding: '10px 20px',
      fontSize: '16px',
      maxWidth: '200px'
    },
    large: {
      padding: '15px 30px',
      fontSize: '18px',
      maxWidth: '300px'
    }
  }

  return styles[size || 'medium'][property || 'padding']
}
</script>

<style scoped>
.blue {
  background-color: blue;
  color: white;
}
.red {
  background-color: red;
  color: white;
}
.green {
  background-color: green;
  color: white;
}
.yellow {
  background-color: yellow;
  color: white;
}
.rounded {
  border-radius: 5px;
}
.square {
  border-radius: 0;
}
button {
  border: none;
  cursor: pointer;
}
</style>
