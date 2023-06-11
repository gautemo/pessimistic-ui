<template>
  <NotFound v-if="!found"/>
  <Todo v-else/>
</template>

<script setup lang="ts">
const found = ref(false)

onMounted(() => {
  setTimeout(() => found.value = true, 3000)
})
</script>

<style>
:root {
  color-scheme: light dark;
}

html {
  font-family: "Lucida Console", Monaco, monospace;
}
</style>