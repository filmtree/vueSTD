<!--

<template>
  <div>
    <Button type="submit" color="red" size="small" shape="rounded" width="100px">Red Small Rounded Button</Button>
    <Button type="reset" color="green" size="large" shape="square" width="300px">Green Large Square Button</Button>
    <Button type="button" color="blue" size="medium" shape="rounded" width="auto">Blue Medium Rounded Button</Button>
  </div>
</template>

<script setup>
import Button from './Button.vue';
</script>

-->

<template>
  <button :type="type" :class="buttonClasses" :style="buttonStyle">
    <slot>버튼</slot>
  </button>
</template>

<script setup>
import { defineProps } from 'vue'

// props 정의
const props = defineProps({
  type: {
    type: String,
    default: 'button',
    validator: value => ['button', 'submit', 'reset'].includes(value)
  },
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
  },
  width: {
    type: String,
    default: 'auto' // 기본 width
  }
})

// 버튼 클래스 결정
const buttonClasses = [props.color, props.size, props.shape]

const buttonStyle = {
  padding: getStyleValue(props.size, 'padding'),
  fontSize: getStyleValue(props.size, 'fontSize'),
  maxWidth: getStyleValue(props.size, 'maxWidth'),
  width: props.width || 'auto'
}

function getStyleValue(size, property) {
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

  return styles[size][property]
}

// 버튼 스타일 결정
// const buttonStyle = {
//   padding: getPadding(props.size),
//   fontSize: getFontSize(props.size),
//   maxWidth: getMaxWidth(props.size),
//   width: props.width // 고정 width 추가
// }

// 크기에 따른 패딩 및 폰트 사이즈를 반환하는 함수
// function getPadding(size) {
//   switch (size) {
//     case 'small':
//       return '5px 10px'
//     case 'medium':
//       return '10px 20px'
//     case 'large':
//       return '15px 30px'
//     default:
//       return '10px 20px' // 기본값
//   }
// }

// function getMaxWidth(size) {
//   switch (size) {
//     case 'small':
//       return '60px'
//     case 'medium':
//       return '200px'
//     case 'large':
//       return '300px'
//     default:
//       return '100px' // 기본값
//   }
// }

// function getFontSize(size) {
//   switch (size) {
//     case 'small':
//       return '14px'
//     case 'medium':
//       return '16px'
//     case 'large':
//       return '18px'
//     default:
//       return '16px' // 기본값
//   }
// }
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
