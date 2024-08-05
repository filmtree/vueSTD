<!-- Modal.vue -->
<template>
  <div v-if="isVisible" class="modal-overlay">
    <div class="modal">
      <h2>모달 제목</h2>
      <p>모달 내용입니다.</p>
      <button @click="closeModal">닫기</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineExpose } from 'vue';

// 모달의 가시성 상태 정의
const isVisible = ref(false);

// 모달을 열기 위한 함수
const openModal = () => {
  isVisible.value = true;
};

// 모달을 닫기 위한 함수
const closeModal = () => {
  isVisible.value = false;
};

// 부모 컴포넌트에서 사용할 수 있도록 함수 노출
defineExpose({
  openModal,
});
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  background: white;
  padding: 20px;
  border-radius: 5px;
}
</style>
