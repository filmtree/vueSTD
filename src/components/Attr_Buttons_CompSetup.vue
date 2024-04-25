<template>
    <button
      v-bind="$attrs"
      :type="type"
      :class="classes"
      ref="button"
      @click="type === 'switch' ? onClick() : null"
    >
      <slot></slot>
    </button>
  </template>
  
  <script setup>
  import { ref, onMounted, computed, defineProps, defineEmits, useAttrs } from 'vue';
  
  const props = defineProps({
    type: {
      type: String,
      default: 'button',
      validator: (value) => ['button', 'submit', 'reset', 'switch'].includes(value),
    },
    sm: Boolean,
    md: {
      type: Boolean,
      default: true,
    },
    lg: Boolean,
    pill: Boolean,
    active: {
      type: Boolean,
      default: true,
    },
  });
  
  const emit = defineEmits(['update:active']);
  
  const classes = computed(() => {
    const result = [];
    if (props.sm) result.push('sm');
    else if (props.lg) result.push('lg');
    else result.push('md');
    if (props.pill) result.push('pill');
    if (props.type === 'switch' && !props.active) result.push('deactive');
    return result;
  });
  
  const button = ref(null);
  
  const onClick = () => {
    emit('update:active', !props.active);
  };
  
  const attrs = useAttrs();
  
  onMounted(() => {
    Object.keys(attrs).forEach((attr) => {
      if (attr.startsWith('text-')) {
        button.value.style.color = attrs[attr];
      }
      if (attr.startsWith('background-')) {
        button.value.style.backgroundColor = attrs[attr];
      }
    });
  });
  </script>
  
  <style scoped>
  button {
    outline: none;
  }
  
  .sm {
    height: 20px;
    font-size: 13px;
  }
  
  .md {
    height: 30px;
    font-size: 22px;
  }
  
  .lg {
    height: 40px;
    font-size: 31px;
  }
  
  .pill {
    border-radius: 16px;
  }
  
  .deactive {
    filter: brightness(50%);
  }
  </style>
  