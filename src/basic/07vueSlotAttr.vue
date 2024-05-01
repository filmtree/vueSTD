<!-- 
  자식이 데이터를 렌더링할 때 슬롯에 데이터를 전달
-->

<MyComponent v-slot="slotProps">
  {{ slotProps.text }} {{ slotProps.count }}
</MyComponent>

<template>
  <!-- <MyComponent> 템플릿 -->
<div>
  <slot :text="greetingMessage" :count="1"></slot>
</div>
</template>

<script setup>
import {} from 'vue'

</script>
