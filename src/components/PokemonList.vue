<template>
  <div>
    <div v-if="arePokemons()">
      <div class="grid">
        <div v-for="pokemon in pokemons" :key="pokemon.name">
          <PokemonItem
            :name="pokemon.name"
            :id="pokemon.id"
            :url="pokemon.url"
          />
        </div>
      </div>
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
    return {
      bottom: false,
      offset: 0
    }
  },
  methods: {
    arePokemons: function () {
      return this.$store.getters.pokemons.length;
    },
    bottomVisible: function () {
      const scrollY = window.scrollY;
      const visible = document.documentElement.clientHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const bottomOfPage = visible + scrollY >= pageHeight
      return bottomOfPage || pageHeight < visible
    },
  },
  watch: {
    bottom(bottom) {
      if(bottom) {
        this.offset = this.$store.getters.pokemons.length;
        this.$store.dispatch('FETCH_POKEMONS', this.offset)
      }
    }
  },
  computed: {
    pokemons: function () {
      return this.$store.getters.pokemons
    }
  },
  created: function () {
    this.$store.dispatch('FETCH_POKEMONS', this.offset)
    window.addEventListener('scroll', () => {
      this.bottom = this.bottomVisible()
    })
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
