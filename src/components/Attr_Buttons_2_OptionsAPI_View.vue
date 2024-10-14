<template>
  <div>
    <h1>버튼 컴포넌트 사용 예시</h1>

    <Button type="submit" sm>
      Submit Small Button
    </Button>

    <Button type="reset" lg>
      Reset Large Button
    </Button>

    <Button type="button" md>
      Normal Medium Button
    </Button>

    <!-- $event는 자식 컴포넌트의 this.$emit('update:active', this.isActive)의 this.isActive를 의미 -->
    <Button type="switch" :active="isSwitchActive" @update:active="isSwitchActive = $event" pill>
      {{ isSwitchActive ? 'Active' : 'Inactive' }} Switch Button
    </Button>

    <Button type="switch" :active="isAnotherSwitchActive" @update:active="isAnotherSwitchActive = $event" sm>
      {{ isAnotherSwitchActive ? 'Active' : 'Inactive' }} Small Switch Button
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
