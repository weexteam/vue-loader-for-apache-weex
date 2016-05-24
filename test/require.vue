<script>
  var event = require('@weex-module/event')
  event.openURL('http://localhost/')
  module.exports = {
    data: { x: 1, y: 2 },
    components: {
      item: require('./bar.vue')
    }
  }
</script>
