<script setup>
import { ref } from "vue";

const docState = ref("saved");
</script>

<template>
  <span style="margin-right: 20px">클릭 시 상태 변경:</span>
  <div class="btn-container">
    <!-- 진출 애니메이션이 완료된 이후에 삽입 -->
    <Transition name="slide-up" mode="out-in">
      <button v-if="docState === 'saved'" @click="docState = 'edited'">
        수정
      </button>
      <button v-else-if="docState === 'edited'" @click="docState = 'editing'">
        저장
      </button>
      <button v-else-if="docState === 'editing'" @click="docState = 'saved'">
        취소
      </button>
    </Transition>
  </div>
</template>

<style>
.btn-container {
  display: inline-block;
  position: relative;
  height: 1em;
}

button {
  position: absolute;
  white-space: pre;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>