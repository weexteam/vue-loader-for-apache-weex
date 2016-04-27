<template>
    <text class="h1" :value="'Hello ' + who"></text>
</template>

<style>
.h1 {
    font-size: 40;
    padding-top: 20;
    padding-bottom: 20;
    text-align: center;
    background-color: #666;
    color: #FFF;
}
</style>

<script>
  module.exports = {
    el: 'div',
    data: {
        who: 'vue'
    }
  }
</script>