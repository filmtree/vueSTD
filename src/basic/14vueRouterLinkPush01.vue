<!-- Vue2 Options API -->
<script>
export default {
  methods: {
    navigateToHome() {
      this.$router.push('/')
    },
    replaceWithAbout() {
      this.$router.replace('/about')
    },
    goBack() {
      this.$router.go(-1)
    },
    goForward() {
      this.$router.go(1)
    }
  }
}
</script>
<template>
  <nav>
    <a href="#" @click.prevent="$router.push('/')">.push</a>
    <a href="#" @click.prevent="$router.replace('/about')">.replace</a>
    <a href="#" @click.prevent="$router.go(-1)">.go</a>
    <a href="#" @click.prevent="$router.forward">.forward</a>
    <a href="#" @click.prevent="$router.back()">.back</a>
  </nav>
</template>


<!-- Vue3 Composition API -->
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToHome = () => {
  // 문자열 경로
  router.push('/users/eduardo')

  // 경로를 가진 객체
  router.push({ path: '/users/eduardo' })

  // 라우터가 URL을 만들도록 파라미터가 있는 네임드 라우트
  router.push({ name: 'user', params: { username: 'eduardo' } })

  // 쿼리를 포함한 결과, /register?plan=private
  router.push({ path: '/register', query: { plan: 'private' } })

  // 해시를 포함한 결과, /about#team
  router.push({ path: '/about', hash: '#team' })
}

const replaceWithAbout = () => {
  router.replace('/about')
}
const go = () => {
  router.go(1)
}
const goForward = () => {
  router.forward()
}

const goBack = () => {
  router.back()
}
</script>

<template>
  <nav>
    <button @click="navigateToHome">push</button>
    <button @click="replaceWithAbout">replace</button>
    <button @click="go">go</button>
    <button @click="goForward">forward</button>
    <button @click="goBack">back</button>

    <a href="#" @click.prevent="router.push('/')">.push</a>
    <a href="#" @click.prevent="router.replace('/about')">.replace</a>
    <a href="#" @click.prevent="router.go(-1)">.go</a>
    <a href="#" @click.prevent="router.forward">.forward</a>
    <a href="#" @click.prevent="router.back()">.back</a>
  </nav>
</template>