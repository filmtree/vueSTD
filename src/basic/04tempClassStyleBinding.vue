<template>
  <!-- 인라인 바인딩 -->
  <div :class="{ active: isActive }"></div>

  <!-- 인라인 다중 바인딩 -->
  <div
    class="static"
    :class="{ active: isActive, 'text-danger': hasError }"
  ></div>

  <!-- 객체 바인딩 -->
  <div :class="classObject"></div>

  <!-- computed 로 바인딩 -->
  <div :class="classObjectComputed"></div>

  <!-- 배열로 바인딩 -->
  <div :class="[activeClass, errorClass]"></div>
  <!-- 배열로 바인딩 삼항 연산 -->
  <div :class="[isActive ? activeClass : '', errorClass]"></div>
  <!-- 조건부 클래스가 복잡하면 객체배열 사용 -->
  <div :class="[{ active: isActive }, errorClass]"></div>

  <!-- 부모 컴포넌트 -->
  <!-- <MyComponent class="baz" /> -->
  <!-- MyComponent 템플릿에서 $attrs 속성을 사용 -->
  <p :class="$attrs.class">안녕!</p>
  <span>반가워!</span>

  <!-- style -->
  <div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>

  <!-- :style에 사용될 CSS 속성에 해당하는 키 문자열은 camelCase가 권장되지만, kebab-cased(실제 CSS에서 사용되는 방식)도 지원합니다: 예를 들면 다음과 같습니다: -->
  <div :style="{ 'font-size': fontSize + 'px' }"></div>
  <!-- 스타일 객체 바인딩 -->
  <div :style="styleObject"></div>
  <!-- 스타일 객체 배열 다중 바인딩 -->
  <div :style="[baseStyles, overridingStyles]"></div>

  <!-- 다중값 -->
  <!-- 브라우저가 flex와 -webkit-box 속성만 지원한다면, flex라는 표준 속성 값이 있음에도 display: -webkit-box를 렌더링  -->
  <div :style="{ display: ['flex', '-webkit-box', '-ms-flexbox'] }"></div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";

// 객체에 더 많은 필드를 사용하여 여러 클래스를 토글
const isActive = ref(true);
const hasError = ref(false);

const classObject = reactive({
  active: true,
  "text-danger": false,
});

// 계산된 속성
const error = ref(null);

const classObjectComputed = computed(() => ({
  active: isActive.value && !error.value,
  "text-danger": error.value && error.value.type === "fatal",
}));

// 배열로 바인딩 하기
const activeClass = ref("active");
const errorClass = ref("text-danger");

/* Style */
/* 스타일값 */
const activeColor = ref("red");
const fontSize = ref(30);
/* 스타일 객체 바인딩 */
const styleObject = reactive({
  color: "red",
  fontSize: "13px",
});
</script>