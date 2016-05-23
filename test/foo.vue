<template>
  <div>
    <item welcome="Hello"></item>
  </div>
</template>

<script>
  module.exports = {
    components: {
      item: require('./bar.vue')
    }
  }
</script>
