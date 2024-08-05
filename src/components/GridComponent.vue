<!-- Parent

<template>
  <div id="app">
    <TableComponent :headers="tableHeaders" :data="tableData" />
  </div>
</template>

<script setup>
import TableComponent from './TableComponent.vue';

const tableHeaders = ['이름', '나이', '직업'];
const tableData = [
  ['홍길동', 30, '개발자'],
  ['이순신', 40, '디자이너'],
  ['강감찬', 50, 'PM'],
];
</script>

-->


<template>
  <table>
    <thead>
      <tr>
        <th v-for="header in headers" :key="header">{{ header }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in data" :key="index">
        <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  headers: {
    type: Array,
    required: true
  },
  data: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
/* 스타일을 추가할 수 있습니다. */
table {
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}
</style>
