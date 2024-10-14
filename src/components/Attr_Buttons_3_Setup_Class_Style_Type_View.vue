<template>
  <div>
    <h1>버튼 컴포넌트 사용 예시</h1>

    <Button type="submit" color="red" size="small" shape="rounded" width="100px">
      Red Small Rounded Button
    </Button>
    
    <Button type="reset" color="green" size="large" shape="square" width="300px">
      Green Large Square Button
    </Button>
    
    <Button type="button" color="blue" size="medium" shape="rounded" width="auto">
      Blue Medium Rounded Button
    </Button>

    <Button type="button" color="yellow" size="large" shape="square" width="150px">
      Yellow Large Square Button
    </Button>
  </div>
</template>

<script setup lang="ts">
  import Button from './Attr_Buttons_3_Setup_Class_Style_Type.vue'; // 버튼 컴포넌트 임포트
</script>