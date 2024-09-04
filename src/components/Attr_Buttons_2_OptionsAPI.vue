<template>
  <button
    :type="type"
    :class="classes"
    ref="button"
    v-on="type === 'switch' ? { click: onClick } : {}"
    v-bind="$attrs">
    <slot></slot>
  </button>
</template>
  
<script>
export default {
  props: {
    type: {
      default: 'button',
      validator: value => {
        const allowed = ['button', 'submit', 'reset', 'switch']
        return allowed.includes(value)
      }
    },
    sm: Boolean,
    md: {
      type: Boolean,
      default: true
    },
    lg: Boolean,
    pill: Boolean,
    active: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      classes: [],
      isActive: this.active
    }
  },
  computed: {
    button() {
      return this.$refs.button
    }
  },
  created() {
    if (this.sm) this.classes.push('sm')
    else if (this.lg) this.classes.push('lg')
    else this.classes.push('md')

    if (this.pill) this.classes.push('pill')

    this.changeBrightness()
  },
  mounted() {
    Object.keys(this.$attrs).forEach(attr => {
      if (attr.startsWith('text-')) {
        this.button.style.color = attr.substring(5)
      }
      if (attr.startsWith('background-')) {
        this.button.style.backgroundColor = attr.substring(11)
      }
    })
  },
  methods: {
    changeBrightness() {
      if (this.type === 'switch') {
        if (!this.isActive) {
          this.classes.push('deactive')
        } else {
          this.classes = this.classes.filter(i => i !== 'deactive')
        }
      }
    },
    onClick() {
      this.isActive = !this.isActive
      this.changeBrightness()
      this.$emit('update:active', this.isActive)
    }
  }
}
</script>
  
<style scoped>
button {
  outline: none;
}

.sm {
  height: 20px;
  font-size: 13px;
}

.md {
  height: 30px;
  font-size: 22px;
}

.lg {
  height: 40px;
  font-size: 31px;
}

.pill {
  border-radius: 16px;
}

.deactive {
  filter: brightness(50%);
}
</style>
  