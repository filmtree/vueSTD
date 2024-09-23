<!--
Modal component with customizable slots and CSS transitions.
-->

<script setup>
import Modal from "./11vueTeleportModal";
import { ref } from "vue";

const showModal = ref(false);
const modalWidth = ref("");
</script>

<template>
  <button id="show-modal" @click="showModal = true">Show Modal</button>

  <!-- body 태그로 이동하도록 지시 -->
  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <modal :show="showModal" :width="modalWidth" @close="showModal = false">
      <template #header>
        <h3>custom header</h3>
      </template>
      <template #body> </template>
      <template #footer> </template>
    </modal>
  </Teleport>
</template>