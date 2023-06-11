<script setup lang="ts">

</script>

<template>
  <main>
    <h1>404</h1>
    <section>
      <h2>Page not found</h2>
      <p>Sorry, this page does not exists</p>
    </section>
  </main>
</template>

<style scoped>
main {
  margin: auto;
  width: fit-content;
  display: grid;
  place-items: center;
  grid-template-columns: auto auto;
  gap: 2rem;
  height: 100vh;
}

h1 {
  color: #1aadff;
}

h1, h2 {
  font-size: 3rem;
}

section {
  border-left: 1px solid #27272a;
  padding-left: 2rem;
}
</style>