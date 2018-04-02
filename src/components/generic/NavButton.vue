<template>
  <router-link :to="{page}" :exact-active-class="_current" title="{label}">{label}</router-link>
</template>

<script>
export default {
  props: ['page', 'label']
}
</script>

<style scoped>
  a{
    background: none;
    outline: none;
    text-decoration: none;
    border: none;
    color: green;
    font-size: 12px;
  }

  a._current{
    color: red;
  }
</style>
