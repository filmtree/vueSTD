<template>
  <div>
    <!-- <ul>
      <li v-for="item in menu" :key="item.name" @click="companyName = item.link">{{item.name}}</li>
    </ul> -->
    <d-menu @select-comp="chooseComp" />
    <component :is="companyName"/>
  </div>
</template>

<script>
import dMenu from '../components/dyCompMenu'
import companyName from "../components/companyName.vue"
import homeName from "../components/homeName.vue"
import storeName from "../components/storeName.vue"
export default {
  components: {dMenu,companyName,homeName,storeName},
  data() {
    return {
      companyName:"companyName",
      // menu:[
      //   {
      //     name:"company",
      //     link:"companyName"
      //   },
      //   {
      //     name:"home",
      //     link:"homeName"
      //   },
      //   {
      //     name:"store",
      //     link:"storeName"
      //   },
      // ],
    }
  },
  methods:{
    chooseComp(value){ // 매개변수는 emit에서 보내온 데이터, 메서드명은 아무거나 상관없음.
      this.companyName = value // 컴포넌트 선택자 companyName에 보내온 데이터를 대입
    }
  }
}
</script>

<style lang="scss" scoped>

</style>