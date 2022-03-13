<template>
  <div class="flex justify-center pt-2">
    <div id="world-map" class="max-w-screen-md w-full"></div>
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
<style lang="postcss" scoped>
#world-map {
  height: 400px;
}
</style>
