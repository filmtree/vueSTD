<template>
  <ul class="skip-links" tabindex="0">
    <li>
      <a href="#main" ref="skipLink">Skip to main content</a>
    </li>
  </ul>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/button">Buttons</router-link> |
    <router-link to="/cselect">CSelect</router-link> |
    <router-link to="/dycomp">dyComp</router-link> |
    <router-link to="/elTree">ElTree</router-link> |
  </nav>
  <router-view/>
</template>

<style>
.skip-links {
  white-space: nowrap;
  margin: 1em auto;
  top: 0;
  position: fixed;
  left: 50%;
  margin-left: -72px;
  opacity: 0;
}
.skip-links:focus {
  opacity: 1;
  background-color: white;
  padding: 0.5em;
  border: 1px solid black;
}
</style>
