<template>
  <div>
    <h2>Calculations</h2>
    <div>
      <input type="text" v-model="num1" />
      <span>+</span>
      <input type="text" v-model="num2" />
      <span>=</span>
      <span>{{ result }}</span>
    </div>
  </div>
</template>

<!-- Composition API 상태값을 외부 파일에서 가져오기 -->
<script>
// compFunc.js
// import {reactive, computed, toRefs} from 'vue';

// function compFunc(){
//   const state = reactive({
//     num1:0,
//     num2:0,
//     result: computed(()=>parseInt(state.num1) + parseInt(state.num2))
//   });
//   return toRefs(state)
// }
// export default compFunc;

import { compFunc } from './compFunc.js'

export default {
  setup() {
    let { num1, num2, result } = compFunc()
    return {
      num1,
      num2,
      result
    }
  }
}
</script>