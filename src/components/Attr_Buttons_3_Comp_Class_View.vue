<template>
  <div>
    <h1>버튼 컴포넌트 사용 예시</h1>

    <Button type="submit" sm>
      작은 제출 버튼
    </Button>

    <Button type="reset" lg pill>
      큰 리셋 버튼
    </Button>

    <Button type="button" md>
      중간 크기 버튼
    </Button>

    <!-- $event는 자식 컴포넌트에서 emit된 값을 의미. 여기서는  context.emit('update:active', active.value)의 active.value 를 의미 -->
    <Button type="switch" :active="isSwitchActive" @update:active="isSwitchActive = $event" lg>
      스위치 버튼
    </Button>

    <Button type="switch" :active="isAnotherSwitchActive" @update:active="isAnotherSwitchActive = $event" sm pill>
      작은 스위치 버튼
    </Button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from './Button.vue'; // 버튼 컴포넌트 임포트

const isSwitchActive = ref(true);
const isAnotherSwitchActive = ref(false);
</script>

<style scoped>
h1 {
  margin-bottom: 20px;
}
</style>
