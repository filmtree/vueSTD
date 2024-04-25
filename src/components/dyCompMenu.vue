<!-- Emit Basic -->
<template>
  <ul>
    <!-- $emit에 데이터 item.link를 실어 부모 컴포넌트에 올려보낸다. 
      부모에서는 보낸 값을 매개변수(변수명은 아무거나 상관없음)로 사용하여 메서드를 만들어 적용 -->
    <li v-for="item in menu" :key="item.name" @click="$emit('select-comp', item.link)">{{item.name}}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      menu:[
        {
          name:"company",
          link:"companyName"
        },
        {
          name:"home",
          link:"homeName"
        },
        {
          name:"store",
          link:"storeName"
        },
      ]
    }
  }
}
</script>