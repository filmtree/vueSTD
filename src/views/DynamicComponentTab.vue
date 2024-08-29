<template>
  <div>
    <div class="tabs">
      <button v-for="tab in tabs" :key="tab.name" @click="selectTab(tab)">
        {{ tab.label }}
      </button>
    </div>
    <component :is="selectedTab.component"></component>
  </div>
</template>

<script>
import Tab1 from '@/components/dyTab1.vue'
import Tab2 from '@/components/dyTab2.vue'

export default {
  components: {
    Tab1,
    Tab2
  },
  data() {
    return {
      tabs: [
        { name: 'tab1', label: '탭 1', component: Tab1 },
        { name: 'tab2', label: '탭 2', component: Tab2 }
      ],
      selectedTab: { name: 'tab1', component: Tab1 }
    }
  },
  methods: {
    selectTab(tab) {
      this.selectedTab = tab
    }
  }
}
</script>

<style>
.tabs {
  display: flex;
  margin-bottom: 10px;
}
.tabs button {
  margin-right: 5px;
}
</style>
