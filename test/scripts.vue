<script>
  module.exports = {
    data: { x: 1, y: 2 }
  }
</script>

<script>
  module.exports.components = {
    item: require('./bar.vue')
  }
</script>
