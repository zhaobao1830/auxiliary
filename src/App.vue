<template>
  <div id="app">
    <router-view></router-view>
    <hello></hello>
  </div>
</template>

<script type="text/ecmascript-6">
import HDialog from './components/Master'
import Hello from './components/Hello'
export default {
  name: 'app',
  components: {
    HDialog,
    Hello
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
