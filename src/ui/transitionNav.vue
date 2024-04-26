<template>
  <div id="app">
    <ul class="wrap">
      <!--마우스가 메뉴에서  벗어났을 때 서브메뉴를 숨깁니다 -->
      <li
        v-for="(menu, index) in menus"
        :key="index"
        @mouseenter="show = index"
        @mouseleave="show = null"
        @click="setActive(index)"
        :class="['list', show === index ? 'active' : '']"
      >
        <div>{{ menu.title }}</div>

        <transition @enter="enterSlideDown" @leave="leaveSlideDown">
          <ul v-if="show === index" class="subwrap">
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
    <div
      class="under-bar"
      ref="underBar"
      :style="{ left: barLeft + 'px', width: barWidth + 'px' }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

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

function enterSlideDown(el, done) {
  el.style.height = "0";
  el.animate([{ height: "0" }, { height: `${el.scrollHeight}px` }], {
    duration: 500,
    easing: "ease",
    fill: "forwards",
  }).finished.then(done);
}

function leaveSlideDown(el, done) {
  el.style.height = `${el.scrollHeight}px`;
  el.animate([{ height: `${el.scrollHeight}px` }, { height: "0" }], {
    duration: 500,
    easing: "ease",
    fill: "forwards",
  }).finished.then(done);
}

const underBar = ref(null);
const barLeft = ref(0);
const barWidth = ref(0);

function updateBar(index) {
  if (index === null) return; // index가 null일 경우 함수를 종료합니다.
  const lists = document.querySelectorAll(".list")[index];
  if (lists.length > index) { // 요소가 존재하는지 확인합니다.
    const list = lists[index];
    barLeft.value = list.offsetLeft;
    barWidth.value = list.offsetWidth;
  }
}


function setActive(index) {
  show.value = index;
  updateBar(index);
}

onMounted(() => {
  setActive(0); // 초기 상태에서 첫 번째 메뉴가 활성화되도록 설정합니다.
});
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

.under-bar {
  position: absolute;
  height: 4px;
  background-color: red;
  transition: all 0.3s;
}

.active {
  color: red;
}
</style>
