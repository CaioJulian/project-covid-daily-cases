<template>
  <div
    class="flex flex-col max-w-screen-md pb-5 pt-14 mt-6 w-full mx-auto relative"
  >
    <div class="absolute top-0" :style="`left:calc(${value_range}% - 50px);`">
      <div class="card_popover flex justify-center items-center p-2 rounded-xl">
        <p class="text-sm">01/01/2020</p>
      </div>
    </div>
    <input
      v-model="value_range"
      type="range"
      class="w-full bg-gray-800 appearance-none h-2"
      min="0"
      max="100"
    />
    <div class="pt-4">
      <ul class="w-full flex justify-between text-gray-900 text-xs">
        <li>jan/2020</li>
        <li>jul/2020</li>
        <li>jan/2021</li>
        <li>jul/2021</li>
        <li>jan/2022</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value_range: 50,
    }
  },
}
</script>
<style lang="postcss" scoped>
.card_popover {
  width: 110px;
  height: 40px;
  border: 2px solid #0a0a0a;
}

@media screen and (-webkit-min-device-pixel-ratio: 0) {
  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    cursor: ew-resize;
    background: #fff;
    border: 1px solid #0a0a0a;
    border-radius: 50%;
  }
}
</style>
