<template>
  <div>
    <item welcome="Hello"></item>
  </div>
</template>

<script>
  module.exports = {
    el: 'scroller',
    components: {
      item: require('./bar.vue')
    }
  }
</script>
