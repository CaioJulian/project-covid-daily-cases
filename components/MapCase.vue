<template>
  <div class="flex justify-center pt-2">
    <div id="world-map" class="max-w-screen-md w-full"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('caseManager', ['mapData']),
  },
  watch: {
    mapData(newValue, oldValue) {
      if (process.client && newValue) {
        const $ = window.jQuery
        $('#world-map').vectorMap('get', 'mapObject').remove()
        this.worldMap()
      }
    },
  },
  mounted() {
    this.worldMap()
  },
  methods: {
    worldMap() {
      if (process.client) {
        const mData = this.mapData
        const $ = window.jQuery
        $('#world-map').vectorMap({
          map: 'world_mill_en',
          series: {
            regions: [
              {
                scale: ['#C8EEFF', '#0071A4'],
                normalizeFunction: 'polynomial',
                values: mData,
              },
            ],
          },
          // eslint-disable-next-line object-shorthand
          onRegionTipShow: function (e, el, code) {
            const value = typeof mData[code] === 'undefined' ? 0 : mData[code]
            el.html(`${el.html()} (${code.toString()}) <br>Cases: ${value}`)
          },
        })
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
