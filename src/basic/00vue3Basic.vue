<template>
  <HelloWorld></HelloWorld>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'compTemp',
  components: {
    HelloWorld
  },
  mixins: [],
  props: {
    // 기본 타입 체크 (`null`과 `undefined`는 모든 타입 유효성 검사를 통과합니다.)
    propA: Number,
    // 여러 타입 허용
    propB: [String, Number],
    // 문자열 필수
    propC: {
      type: String,
      required: true
    },
    // 기본 값을 갖는 숫자형
    propD: {
      type: Number,
      default: 100
    },
    // 기본 값을 갖는 객체 타입
    propE: {
      type: Object,
      // 객체나 배열의 기본 값은 항상 팩토리 함수로부터 반환되어야 합니다.
      default: function () {
        return { message: 'hello' }
      }
    },
    // 커스텀 유효성 검사 함수
    propF: {
      validator: function (value) {
        // 값이 꼭 아래 세 문자열 중 하나와 일치해야 합니다.
        return ['success', 'warning', 'danger'].includes(value)
      }
    },
    // 기본 값을 갖는 함수
    propG: {
      type: Function,
      // 객체나 배열과 달리 아래 표현은 팩토리 함수가 아닙니다. 기본 값으로 사용되는 함수입니다.
      default: function () {
        return 'Default function'
      }
    }
  },
  provide: {
    user: 'John Doe'
  },
  inject: ['user'],
  setup() {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>