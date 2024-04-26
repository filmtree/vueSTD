<script setup>
import { ref, reactive, computed } from "vue";

const author = reactive({
  name: "John Doe",
  books: [
    "Vue 2 - Advanced Guide",
    "Vue 3 - Basic Guide",
    "Vue 4 - The Mystery",
  ],
});

//computed() 함수에는 getter로 사용될 함수가 전달돼야 하며, 반환되는 값은 computed ref입니다.
//일반 ref와 유사하게 계산된 결과를 publishedBooksMessage.value로 접근할 수 있습니다.
//계산된 ref는 템플릿에서 자동으로 언래핑되므로, 템플릿 표현식에서 .value 없이 참조할 수 있습니다.

// 계산된 ref
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? "Yes" : "No";
});

// 계산된 속성은 기본적으로 getter 전용입니다. 계산된 속성에 새 값을 할당하려고 하면 런타임 에러가 발생합니다.
// 드물게 "수정 가능한" 계산된 속성이 필요한 경우, getter와 setter를 모두 제공하여 속성을 만들 수 있습니다.

const firstName = ref("John");
const lastName = ref("Doe");

const fullName = computed({
  // getter
  get() {
    return firstName.value + " " + lastName.value;
  },
  // setter
  set(newValue) {
    // 참고: 분해 할당 문법을 사용함.
    [firstName.value, lastName.value] = newValue.split(" ");
  },
});

fullName.value = "John Doe";
</script>

<template>
  <p>책을 가지고 있다:</p>
  <span>{{ publishedBooksMessage }}</span>
  <span>{{ fullName }}</span>
</template>
