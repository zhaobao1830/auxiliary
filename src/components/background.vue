<template>
  <div class="dialog-background" :class="className" v-show="show" :style="{zIndex: zIndex}"></div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'dialog-background',
  data () {
    return {
      show: false
    }
  },
  props: {
    'className': {
      type: String,
      default: null
    },
    'zIndex': {
      type: Number,
      default: 19861015
    }
  },
  methods: {
    open: function () {
      this.show = true
    },
    close: function () {
      this.show = false
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .dialog-background {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: red;
    opacity: .5;
  }
</style>
