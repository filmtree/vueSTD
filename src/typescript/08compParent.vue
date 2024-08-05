<!-- ParentComponent.vue -->
<template>
  <div>
    <h1>부모 컴포넌트</h1>
    <button @click="showModal">모달 열기</button>
    <Modal ref="modalRef" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Modal from './08compChild.vue';

const modalRef = ref<InstanceType<typeof Modal> | null>(null);

// 모달을 여는 함수 정의
const showModal = () => {
  if (modalRef.value) {
    modalRef.value.openModal();
  }
};
</script>

<style scoped>
/* 스타일 추가 */
</style>
