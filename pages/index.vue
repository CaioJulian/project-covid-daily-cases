<template>
  <main class="container xl:max-w-5xl p-3 m-auto">
    <header class="text-center">
      <h1 class="text-3xl font-semibold">Covid Daily Cases</h1>
    </header>
    <section class="pt-2">
      <RangeDate />
      <MapCase />
    </section>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
