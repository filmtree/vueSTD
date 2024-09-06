//=======================================================================================
//                                                                                       
//  ##   ##   ####  #####         ####   ####  #####     #####   ##      ##            
//  ##   ##  ##     ##           ##     ##     ##  ##   ##   ##  ##      ##            
//  ##   ##   ###   #####         ###   ##     #####    ##   ##  ##      ##            
//  ##   ##     ##  ##              ##  ##     ##  ##   ##   ##  ##      ##            
//   #####   ####   #####        ####    ####  ##   ##   #####   ######  ######        
//                                                                                       
//=======================================================================================



// useScroll.ts
import { ref, onMounted, onUnmounted, Ref } from 'vue';

export function useScroll(scrollElement: Ref<HTMLElement | null>) {
  const scrollY = ref<number>(0);
  const elHeight = ref<number>(0); // 헤더 높이를 저장할 변수
  
  const handleScroll = () => {
    scrollY.value = Math.min(window.scrollY, elHeight.value); // 헤더 높이 이상으로 스크롤이 가지 않도록 제한
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);

    // 헤더의 높이를 측정합니다.
    if (scrollElement.value) {
      elHeight.value = scrollElement.value.offsetHeight; // 헤더의 높이를 저장
    }
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  return {
    scrollY,
  };
}
