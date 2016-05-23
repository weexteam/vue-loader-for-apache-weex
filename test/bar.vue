<template>
  <div class="wrapper">
    <image
      src="http://alibaba.github.io/weex/img/weex_logo_blue@3x.png"
      style="width: 180; height: 41"
    ></image>
    <text
      class="demo-size"
    >{{welcome}}</text>
    <text v-for="(k,v) in list" v-if="k % 2" class="demo-size">{{k}}-{{v}}</text>
  </div>
</template>

<style>
  .wrapper {align-items: center; margin-top: 80;}
  .demo-size {font-size: 64}
</style>

<script>
  module.exports = {
    props: ['welcome'],
    data: function () {
      return {
        welcome: 'Hello Weex',
        list: ['a', 'b', 'c', 'd', 'e']
      }
    }
  }
</script>
