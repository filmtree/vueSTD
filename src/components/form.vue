<template>
  <input type="text" v-model="greet"/>
  <textarea v-model="messasg"></textarea>
  <select v-model="city">
    <option value="02">서울</option>
    <option value="064">제주</option>
  </select>
  <label>
    <!-- true, false값 대신 yes, no를 넘기기 위해 true-valu와 false-value를 작성 -->
    <input type="checkbox" v-model="checked" true-value="yes" false-value="no" />
    {{checked}}
  </label>
  <!-- <div>
    <label><input type="checkbox" v-model="checked" value="서울" />서울</label>
    <label><input type="checkbox" v-model="checked" value="제주" />제주</label>
    <span>체크한 지역: {{ checked }}</span>
  </div> -->
    <!-- <label><input type="radio" v-model="picked" /></label> -->
  <div>
    <label><input type="radio" v-model="checked" :value="rval1" />서울</label>
    <label><input type="radio" v-model="checked" :value="rval2" />제주</label>
    <span>선택 지역: {{ picked }}</span>
  </div>
  <!-- 버튼 -->
  <input type="text" v-model="greet" />
  <button type="button" :disabled="greet===''">내용 없으면 비활성</button>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      greet: "Hello",
      message: "world",
      city: "064", // value값으로 양방향 데이터 바인딩
      checked: true,
      //checked: [] // 여러개,
      picked:'',
      rval1:'서울',
      rval2:'제주'
    }
  }
}
</script>