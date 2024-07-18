<template>
  <div id="app">
    <Main>
      <router-view></router-view>
      <router-view name="sidebar"></router-view>
    </Main>
  </div>
</template>

<script setup>
import Main from './layout/layoutMain.vue'
</script>