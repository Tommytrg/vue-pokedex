<template>
  <div>
    <div v-if="arePokemons()">
      <div v-for="pokemon in pokemons" :key="pokemon.name">
        {{pokemon.name}}
      </div>
    </div>
    <div v-else>
        LOADING POKEMONS...
    </div>
  </div>
</template>

<script>
export default {
  name: 'PokemonList',
  data () {
    return {}
  },
  methods: {
    arePokemons: function () {
      return this.$store.getters.pokemons.length
    }
  },
  computed: {
    pokemons: function () {
      return this.$store.getters.pokemons
    }
  },
  created: function () {
    this.$store.dispatch('FETCH_POKEMONS')
  }
}
</script>

<style>

</style>
