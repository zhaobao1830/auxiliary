<template>
   <div>
     我再弹出一个层
     <button @click="openDiv">btn</button>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
  methods: {
    openDiv: function () {
      let promise = this.$root.$refs.hDialog.open({
        template: '<div>第二层了</div>'
      })
      promise.then(function (arg) {
        alert('第二层' + arg.type)
        arg.close()
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
