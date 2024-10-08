<!-- <template>

</template> -->

<script>
import {
  ref,
  reactive,
  computed,
  watch,
  watchEffect,
  onMounted,
  onUpdated,
  onUnmounted,
  provide,
  inject,
  nextTick
} from 'vue'

export default {
  props: {
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
  emits: ['update-message'],
  setup() {
    // 반응형 데이터
    const count = ref(0)
    const user = reactive({ name: 'John Doe', age: 30 })

    // 계산된 속성
    const doubleCount = computed(() => count.value * 2)

    // 감시자
    watch(count, (newCount, oldCount) => {
      console.log(`Count changed from ${oldCount} to ${newCount}`)
    })

    watchEffect(() => {
      console.log(`User name changed to ${user.name}`)
    })

    // 생명 주기 훅
    onMounted(() => {
      console.log('Component mounted!')
    })

    onUpdated(() => {
      console.log('Component updated!')
    })

    onUnmounted(() => {
      console.log('Component unmounted!')
    })

    // 의존성 주입
    provide('theme', 'dark')
    const theme = inject('theme')

    // 템플릿 참조
    const buttonRef = ref(null)

    // 기타 옵션
    function incrementCount() {
      count.value++
    }

    function updateUserName() {
      user.name = 'Jane Doe'
    }

    nextTick(() => {
      // DOM 업데이트 이후 실행
      buttonRef.value.focus()
    })

    return {
      count,
      user,
      doubleCount,
      theme,
      buttonRef,
      incrementCount,
      updateUserName
    }
  }
}
</script>

