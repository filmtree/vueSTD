<template>
  <div>
    <LoadingSpinner :isLoading="isLoading" />
    <!-- 기타 컴포넌트 내용 -->
    <div v-if="!isLoading">
      <h1>My Component</h1>
      <ul>
        <li v-for="item in data" :key="item.id">{{ item.title }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import LoadingSpinner from "./Loading.vue";

const isLoading = ref(false);

const someAsyncOperation = () => {
  console.log("someAsyncOperation");
};

async function fetchData() {
  isLoading.value = true;
  try {
    // 데이터 가져오기 로직
    await someAsyncOperation();
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
}
fetchData();
</script>

<!-- axios를 사용한 더미데이터 연결 -->
<!-- <script setup>
import { ref } from 'vue'
import axios from 'axios'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

const isLoading = ref(false)
const data = ref([])

async function fetchData() {
  isLoading.value = true
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    data.value = response.data
  } catch (error) {
    console.error(error)
  } finally {
    isLoading.value = false
  }
}

fetchData()
</script> -->


<!-- vue 2 -->
<!-- <script>
import LoadingSpinner from './Loading.vue'

export default {
  name: 'MyComponent',
  components: {
    LoadingSpinner
  },
  data() {
    return {
      isLoading: false
    }
  },
  methods: {
    async fetchData() {
      this.isLoading = true;
      try {
        // 데이터 가져오기 로직
        await this.someAsyncOperation();
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    }
  }
}
</script> -->