<template>
  <div>
    <CustomSelect v-model="selectedOption" :options="options" />
  </div>
</template>

<script>
import CustomSelect from '@/components/CustomSelect'

export default {
  components: {
    CustomSelect
  },
  data() {
    return {
      options: ['Option 1', 'Option 2', 'Option 3'],
      selectedOption: null
    }
  },
  watch: {
    selectedOption(newValue) {
      console.log('Selected option:', newValue)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
