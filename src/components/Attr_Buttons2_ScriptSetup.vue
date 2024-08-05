<!--

<template>
  <div>
    <Button color="red" size="small" shape="rounded">Red Small Rounded Button</Button>
    <Button color="green" size="large" shape="square">Green Large Square Button</Button>
    <Button color="blue" size="medium" shape="rounded">Blue Medium Rounded Button</Button>
  </div>
</template>

<script setup>
import Button from './Button.vue';
</script> 

-->


<template>
  <button :class="buttonClasses">
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps } from 'vue'

// props 정의
const props = defineProps({
  color: {
    type: String,
    default: 'blue', // 기본 색상
    validator: value => {
      return ['blue', 'red', 'green', 'yellow'].includes(value)
    }
  },
  size: {
    type: String,
    default: 'medium', // 기본 크기
    validator: value => {
      return ['small', 'medium', 'large'].includes(value)
    }
  },
  shape: {
    type: String,
    default: 'rounded', // 기본 모양
    validator: value => {
      return ['rounded', 'square'].includes(value)
    }
  }
})

// 버튼 클래스 결정
const buttonClasses = [
  `btn-${props.color}`,
  `btn-${props.size}`,
  `btn-${props.shape}`
]
</script>

<style scoped>
.btn-blue {
  background-color: blue;
  color: white;
}

.btn-red {
  background-color: red;
  color: white;
}

.btn-green {
  background-color: green;
  color: white;
}

.btn-yellow {
  background-color: yellow;
  color: white;
}

.btn-small {
  padding: 5px 10px;
  font-size: 14px;
}

.btn-medium {
  padding: 10px 20px;
  font-size: 16px;
}

.btn-large {
  padding: 15px 30px;
  font-size: 18px;
}

.btn-rounded {
  border-radius: 5px;
}

.btn-square {
  border-radius: 0;
}

button {
  border: none;
  cursor: pointer;
}
</style>
