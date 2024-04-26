<template>
  <!--아래의 "동적인 인자 값 제약 조건" 및 "동적인 인자 문법 제약 조건" 섹션에 설명된 대로,
    인자 표현식에는 몇 가지 제약 사항이 있음에 유의하십시오.-->
  <a v-bind:[attributeName]="url"> ... </a>

  <!-- 단축 문법 -->
  <a :[attributeName]="url"> ... </a>

  <a v-on:[eventName]="doSomething"> ... </a>

  <!-- 단축 문법 -->
  <a @[eventName]="doSomething"></a>

  <!-- 이렇게 하면 컴파일러 경고가 트리거됩니다. -->
  <a :['foo' + bar]="value"> ... </a>

  <!-- DOM 내 템플릿(HTML 파일에 직접 작성된 템플릿)을 사용할 때, 브라우저가 속성 이름을 소문자로 강제 변환하므로 대문자로 키 이름을 지정하는 것도 피해야 합니다: -->
  <a :[someAttr]="value"> ... </a>
</template>

<script setup type='ts'>
</script>
