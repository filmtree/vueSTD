<template>
  <div id="app">
    <ul class="wrap">
      <li
        v-for="(menu, index) in menus"
        :key="index"
        @mouseenter="show = index"
        @mouseleave="show = null"
        class="list"
      >
        <div>{{ menu.title }}</div>
        <transition @enter="enterSlideDown" @leave="leaveSlideDown">
          <ul v-show="show === index" class="subwrap">
            <li
              class="sublist"
              v-for="(submenu, subindex) in menu.submenus"
              :key="subindex"
            >
              {{ submenu }}
            </li>
          </ul>
        </transition>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const menus = ref([
  {
    title: "Menu 1",
    submenus: ["Submenu 1-1", "Submenu 1-2", "Submenu 1-3"],
  },
  {
    title: "Menu 2",
    submenus: ["Submenu 2-1", "Submenu 2-2", "Submenu 2-3"],
  },
  {
    title: "Menu 3",
    submenus: ["Submenu 3-1", "Submenu 3-2", "Submenu 3-3"],
  },
  {
    title: "Menu 4",
    submenus: ["Submenu 4-1", "Submenu 4-2", "Submenu 4-3"],
  },
]);

const show = ref(null);
const submenus = ref(null);

/* enter, leave에 done()을 넣으면 slideup이 자연스럽지 않게 됨. */
// 높이값 지정 애니메이션
function enterSlideDown(el, done) {
  el.animate([{ height: "0" }, { height: `${el.scrollHeight}px` }], {
    duration: 500,
    easing: "ease",
    fill: "forwards",
  }).finished.then(done);
}

function leaveSlideDown(el, done) {
  el.animate([{ height: `${el.scrollHeight}px` }, { height: "0" }], {
    duration: 500,
    easing: "ease",
    fill: "forwards",
  }).finished.then(done);
}
</script>

<style scoped>
ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}

.wrap {
  display: flex;
  width: 100%;
}

.list {
  cursor: pointer;
  width: 100%;
  height: 35px;
  line-height: 35px;
  border: 1px solid #dadada;
  margin-left: -1px;
}

.subwrap {
  border: 1px solid #dadada;
  transition: height 0.3s ease;
  overflow: hidden;
}
</style>

