<template>
  <div id="app">
    <h-dialog ref="hDialog"></h-dialog>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import HDialog from './components/Master'

export default {
  name: 'app',
  components: {
    HDialog
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
