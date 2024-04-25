<template>
  <div class="about">
    
    <VModelSingle v-model="name" />
    <VModelDouble v-model:first-name="name" v-model:last-name="lastName" />
    <div class="result">
      name : {{name}}{{lastName}}
    </div>

    <VueSelect v-model="selected" ref="section" />
    <span>선택{{selected}}</span>

    <button type="button" @click="change">Text</button>
    <button type="button" @click="changes">Text2</button>
  </div>
</template>

<script>
  import {ref, onMounted} from 'vue'
  import VModelSingle from '@/components/VModelSingle.vue'
  import VModelDouble from '@/components/VModelDouble.vue'
  import VueSelect from '@/components/VueSelect.vue'

  export default {
    components: {VModelSingle,VModelDouble,VueSelect},
    data() {
      return {
        name: '',
        lastName:'',
        selected:'',
      }
    },
    methods:{
      change(){
        this.$refs.section.selected = "C" //vue2방식으로 ref를 통해 컴포넌트 내부 연동
      }
    },
    setup() { // vue3 setup 함수
      const section = ref(null) // vue3방식 ref 생성
      const changes = function(){
        section.value.selected = 'B' // vue3방식으로 ref를 통해 컴포넌트 내부 연동
      }
      onMounted(()=>{
        section.value.selected = 'A' // select 초기값
      })
      return {
        section,
        changes
      }
    }
  }
</script>