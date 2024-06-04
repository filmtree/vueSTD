<!-- <script setup>
import { defineEmits, emit } from "vue";

defineEmits(["my-event"]);

const handleClick = () => {
  emit("my-event", { data: "Hello from child" });
};
</script> -->

<!-- 또는 -->

<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["my-event"]);

const handleClick = () => {
  emit("my-event", { data: "Hello from child" });
};
</script>

<template>
  <div @click="handleClick"></div>
</template>