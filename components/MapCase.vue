<template>
  <div>
    <div id="world-map" style="width: 600px; height: 400px"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.worldMap()
  },
  methods: {
    worldMap() {
      if (process.client) {
        const $ = window.jQuery
        $('#world-map').vectorMap({ map: 'world_mill_en' })
      }
    },
  },
}
</script>
