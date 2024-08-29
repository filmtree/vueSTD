<!-- AnotherComponent.vue -->
<template>
  <div>
    <Icon1 />
    <Icon2 />
    <Icon3 />
  </div>
</template>

<script>
import { Icon1, Icon2, Icon3 } from './vueImportIcons.vue';

export default {
  components: {
    Icon1,
    Icon2,
    Icon3
  }
};
</script>
