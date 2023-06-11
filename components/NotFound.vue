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

@media screen and (max-width: 700px) {
  main {
    grid-template-columns: auto;
    align-content: center;
    gap: 0;
  }

  section {
    border-left: none;
    border-top: 1px solid #27272a;
    padding-top: 2rem;
    padding-left: 0;
    text-align: center;
  }
}
</style>