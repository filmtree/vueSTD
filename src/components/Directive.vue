<!-- Custom Directive -->
<template>
  <div>
    <p v-pin="position">컴포넌트 Custom Directive</p>
  </div>
</template>

<script>
export default {
  name: 'CustomDirective',
  directives: {
    pin : {
      mounted(el,binding) { // binding : CustomDirective에 바인딩 된 값(this.position)
        el.style.position = 'fixed';
        el.style.top = binding.value.top + 'px';
        el.style.left = binding.value.left + 'px';
      }
    }
  },
  data() {
    return {
      position: {top:50, left:50}
    }
  }
  }
  </script>