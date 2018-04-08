<template>
  <div>
      <router-link class="button" :to="page" title='label'>{{label}}</router-link>
  </div>

</template>

<script>
export default {
  props: ['page', 'label']
}
</script>

<style scoped>
  .button{
    background: none;
    outline: none;
    text-decoration: none;
    border: none;
    color: #242424;
    font-size: 14px;
    font-weight: 500;
    background-color: #e1e1e1;
    border: solid 1px #e1e1e1;
    min-width: 100px;
    min-height: 50px;
    padding: .5rem .75rem;
    border-radius: 3px;
  }
</style>
