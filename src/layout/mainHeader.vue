<template>
  <ul class="skip-links" tabindex="0">
    <li>
      <a href="#main" ref="skipLink">Skip to main content</a>
    </li>
  </ul>
  <nav>
    <!-- <Routerlink to="..."></Routerlink> .파스칼 케이스로 사용시-->
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/button">Buttons</router-link> |
    <router-link to="/button2">Buttons2</router-link> |
    <router-link to="/cselect">CSelect</router-link> |
    <router-link to="/dycomp">dyComp</router-link> |
    <router-link to="/draglist">DragList</router-link> |
    <router-link to="/tooltip">Tooltip</router-link> |
    <!-- class 바꿀 경우 -->
    <router-link to="/elTree" activeClass="border-indigo-500" exactActiveClass="border-indigo-700" >ElTree</router-link>
  </nav>
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