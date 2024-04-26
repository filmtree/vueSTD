<template>
  <div class="layout">
    <header>
      <Header />
    </header>

    <main>
      <slot></slot>
    </main>

    <footer>
      <Footer>
        <template #footer>Footer</template>
      </Footer>
    </footer>
  </div>
</template>

<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue'
</script>