<template>
  <div class="layout">
    <header class="header">
      <MainHeader />
    </header>

    <main class="wrap">
      <slot></slot>
    </main>

    <footer>
      <MainFooter>
        <template #footer>Footer</template>
      </MainFooter>
    </footer>
  </div>
</template>

<script setup>
import MainHeader from './mainHeader.vue'
import MainFooter from './mainFooter.vue'
</script>


<style>
.layout {
  padding: 20px 0;
}

.header {
  padding: 20px;
}

.wrap {
  margin: 20px auto;
  padding: 20px;
  border: solid #dadada;
  border-width: 1px 0;
}
</style>