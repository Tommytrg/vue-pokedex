<template>
  <div>
    <Search/>
    <PokemonList/>
  </div>
</template>

<script>
import PokemonList from '@/components/PokemonList.vue'
import Search from '@/components/Search.vue'

export default {
  name: 'Home',
  data () {
    return {}
  },
  components: {
    PokemonList,
    Search
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
