<template>
  <div class="layout">
    <header>
      <MainHeader />
    </header>

    <main>
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