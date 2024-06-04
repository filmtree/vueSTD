<!-- Modal.vue -->
<template>
  <button @click="openModal">Open Modal</button>
  <div v-if="isModalOpen" class="modal">
    <div class="modal-content">
      <!-- <slot></slot> -->
      Modal Composable
    </div>
    <button @click="closeModal">Close Modal</button>
  </div>
</template>

<script setup lang="ts">
import { useModal } from "./useModal.ts";

const { isModalOpen, openModal, closeModal } = useModal();
</script>

<style scoped>
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 30%;
}
</style>
