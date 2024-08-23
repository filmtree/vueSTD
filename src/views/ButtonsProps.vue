<template>
  <div>
    <Button color="red" size="small" shape="rounded" width="100px">Red Small Rounded Button</Button>
    <Button color="green" size="large" shape="square" width="300px">Green Large Square Button</Button>
    <Button color="blue" size="medium" shape="rounded" width="auto">Blue Medium Rounded Button</Button>
    <br><br>
    <div>
      <pre>
        <code>
          
&lt;template&gt;
  &lt;button :class=&quot;buttonClasses&quot; :style=&quot;buttonStyle&quot;&gt;
    &lt;slot&gt;&lt;/slot&gt;
  &lt;/button&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { defineProps } from &#39;vue&#39;

// props 정의
const props = defineProps({
  color: {
    type: String,
    default: &#39;blue&#39;, // 기본 색상
    validator: value =&gt; {
      return [&#39;blue&#39;, &#39;red&#39;, &#39;green&#39;, &#39;yellow&#39;].includes(value)
    }
  },
  size: {
    type: String,
    default: &#39;medium&#39;, // 기본 크기
    validator: value =&gt; {
      return [&#39;small&#39;, &#39;medium&#39;, &#39;large&#39;].includes(value)
    }
  },
  shape: {
    type: String,
    default: &#39;rounded&#39;, // 기본 모양
    validator: value =&gt; {
      return [&#39;rounded&#39;, &#39;square&#39;].includes(value)
    }
  },
  width: {
    type: String,
    default: &#39;auto&#39; // 기본 width
  }
})

// 버튼 클래스 결정
const buttonClasses = [props.color, props.size, props.shape]

// 버튼 스타일 결정
const buttonStyle = {
  padding: getPadding(props.size),
  fontSize: getFontSize(props.size),
  width: props.width // width 추가
}

// 크기에 따른 패딩 및 폰트 사이즈를 반환하는 함수
function getPadding(size) {
  switch (size) {
    case &#39;small&#39;:
      return &#39;5px 10px&#39;
    case &#39;medium&#39;:
      return &#39;10px 20px&#39;
    case &#39;large&#39;:
      return &#39;15px 30px&#39;
    default:
      return &#39;10px 20px&#39; // 기본값
  }
}

function getFontSize(size) {
  switch (size) {
    case &#39;small&#39;:
      return &#39;14px&#39;
    case &#39;medium&#39;:
      return &#39;16px&#39;
    case &#39;large&#39;:
      return &#39;18px&#39;
    default:
      return &#39;16px&#39; // 기본값
  }
}
&lt;/script&gt;

&lt;style scoped&gt;
.blue {
  background-color: blue;
  color: white;
}

.red {
  background-color: red;
  color: white;
}

.green {
  background-color: green;
  color: white;
}

.yellow {
  background-color: yellow;
  color: white;
}

.rounded {
  border-radius: 5px;
}

.square {
  border-radius: 0;
}

button {
  border: none;
  cursor: pointer;
}
&lt;/style&gt;

        </code>
      </pre>
    </div>
  </div>
</template>

<script setup>
import Button from '@/components/Attr_Buttons_3_Setup_Class_Style.vue'
</script>
