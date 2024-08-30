import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
const router = createRouter({
  // 클래스 변경 필요시 linkActiveClass: 'custom-active',
  // 클래스 변경 필요시 linkExactActiveClass: 'custom-exact-active',
  history: createWebHistory(),
  routes: [
    // 기본 형태
    {
      path: '',
      name: 'home',
      component: HomeView,
    },
    // 동적 임포트
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    // meta tag
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      // 브라우저 탭 이름 변경
      meta: {
        title: 'About Vue'
      }
    },
    // Path에 동적 세그먼트 사용
    {
      path: '/user/:id',
      name: 'user',
      component: () => import('../views/UserView.vue'),
    },
    // 이름이 있는 <Routerview name="TheHeader"></Routerview> 를 통해서 여러 컴포넌트 적용
    {
      path: '/user/:id',
      name: 'user',
      components: {
        header: () => import('../views/TheHeader.vue'),
        default: () => import('../views/UserView.vue'),
        footer: () => import('../views/TheFooter.vue'),
      },
      props: { header: true, default: false, footer: false },
    },
    // 중첩 사용 - 자식을 품고 있는 router는 name 을 사용할 수 없다.
    {
      path: '/user',
      // name: 'user - 사용불가
      component: () => import('../views/UserView.vue'),
      children: [
        {
          path: 'info',
          name: 'user-info',
          component: () => import('../views/UserInfo.vue'),
        },
        {
          path: 'profile',
          name: 'user-profile',
          component: () => import('../views/UserProfile.vue'),
        },
      ],
    },
    // redirect 
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/UserView.vue'),
      redirect: '/', // 또는 { name: 'home' }
    },
    // redirect 동적 세그먼트 사용시 함수형 사용 
    {
      path: '/user/:id',
      name: 'user-id',
      redirect: (to) => {
        return { name: 'person-id', params: { id: to.params.id } };
      },
    },
    // 별칭 사용 - 별칭 한개 사용
    {
      path: '',
      name: 'home',
      component: HomeView,
      // alias: '/home',
      alias: ['home', 'root'],
    },
    // 별칭 사용 -별칭 여러개 사용시
    {
      path: '/user/:id',
      name: 'user-id',
      component: () => import('../views/UserDetail.vue'),
      alias: ['/:id', '/u/:id'],
      props: true,
    },
    // 아무 것이나 다 매치되며, 값은 `$route.params.pathMatch`에 할당됨
    { 
      path: '/:pathMatch(.*)*', 
      name: 'NotFound', 
      component: NotFound 
    },
    // `/user-`로 시작하는 모든 것과 일치하고, 값은 `$route.params.afterUser`에 할당됨
    { 
      path: '/user-:afterUser(.*)', 
      component: UserGeneric 
    },
  ],

  /* 
  scrollBehavior() 함수는 매개변수 
  첫 번째는 이동하려는 대상의 라우트 객체(to), 
  두 번째는 현재 라우트 객체(from), 
  세 번째는 웹 브라우저의 앞/뒤로 가기 버튼을 사용할 때 저장된 스크롤 위치에 대한 객체
  
  세 번째 값은 브라우저 앞/뒤로 가기 버튼을 눌렀을 때만 사용, 
  일반적인 라우트 전환에서는 undefined 값을 가짐 
  */

  // 브라우저 앞뒤 버튼에서는 스크롤 위치 저장, 그 외에는 항상 맨위 스크롤을 원할 경우
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition)
      return savedPosition; // 스크롤 위치가 같기 때문에 behavior 옵션 필요 없음
    else
      return { top: 0 }
      // 또는 위치값을 지정하려면 ID 활용
      // top값도 동시 적용 가능
      // return { el: '#top', top: 10, behavior: 'smooth'}
  },

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    else if (to.hash) return { el: to.hash, behavior: 'smooth' }; // 앵커(#)가 있다면 해당 위치로 이동
    else
    // 스크롤 지연 시키기
      return new Promise((resolve, reject) => {
        // 500ms 기다린 후 스크롤
        setTimeout(() => {
          resolve({ left: 0, top: 0, behavior: 'smooth' });
        }, 500);
      });
  },

});

// 메타 태그로 웹 브라우저 탭 타이틀 변경하기
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});


export default router;
