<template>
  <div>
    <div v-if="arePokemons()">
      <div class="grid">
        <div v-for="pokemon in pokemons" :key="pokemon.name">
          <PokemonItem
            :name="pokemon.name"
            :id="pokemon.id"
            :types="pokemon.types"
          />
        </div>
      </div>
      <button @click="loadMorePokemons()">Load More Pokemons!</button>
    </div>
    <div v-else>
        LOADING POKEMONS...
    </div>
  </div>
</template>

<script>
import PokemonItem from '@/components/PokemonItem.vue'

export default {
  name: 'PokemonList',
  data () {
    return {}
  },
  methods: {
    arePokemons: function () {
      return this.$store.getters.pokemons.length
    },
    loadMorePokemons: function () {
      this.$store.dispatch('FETCH_POKEMONS')
    }
  },
  computed: {
    pokemons: function () {
      return this.$store.getters.pokemons
    }
  },
  created: function () {
    this.$store.dispatch('FETCH_POKEMONS')
  },
  components: {
    PokemonItem
  }
}
</script>

<style scoped lang="less">
  .grid{
    display:grid;
    grid-template-columns: repeat(auto-fit, 280px);
    grid-gap: 20px;
    margin: 0 1rem;
  }
</style>
