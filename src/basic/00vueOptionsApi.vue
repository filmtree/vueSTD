<script>
export default {
  // 데이터 옵션
  data() {
    return {
      message: 'Hello, Vue.js!',
      count: 0
    }
  },

  // 프롭스 옵션
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
        // return ["success", "warning", "danger"].indexOf(value) !== -1;
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

  // 계산된 속성 옵션
  computed: {
    doubleCount() {
      return this.count * 2
    }
  },

  // 메서드 옵션
  methods: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
    updateMessage() {
      this.message = 'Updated'
      this.$nextTick(() => {
        // DOM이 업데이트된 후 실행되는 콜백 함수
        console.log('Message updated:', this.message)
      })
    }
  },

  // 감시자 옵션
  watch: {
    count(newValue, oldValue) {
      console.log(`Count changed from ${oldValue} to ${newValue}`)
    }
  },

  // 필터 옵션
  filters: {
    uppercase(value) {
      return value.toUpperCase()
    }
  },

  // 디렉티브 옵션
  directives: {
    focus: {
      mounted(el) {
        el.focus()
      }
    }
  },

  // 하위 컴포넌트 옵션
  components: {
    ChildComponent
  },

  // 믹스인 옵션
  mixins: [myMixin],

  // 제공/주입 옵션
  provide: {
    message: 'This is a provided message'
  },
  inject: ['message'],

  // 기타 옵션
  name: 'MyComponent',

  inheritAttrs: false,

  functional: true,

  model: {
    prop: 'checked',
    event: 'change'
  },

  emits: ['change']
}
</script>
