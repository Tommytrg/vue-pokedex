<template>
  <div class="item">
    <p>{{name}}</p>
    <img :src="pokemonImg" alt="">
    <p>{{pokemonTypes}}</p>
  </div>
</template>

<script>
export default {
  name: 'PokemonItem',
  props: [
    'name',
    'id',
    'types'
  ],
  computed: {
    pokemonImg: function () {
      let index = `${this.id}`
      while (index.length < 3) index = 0 + index
      return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${index}.png`
    },
    pokemonTypes: function () {
      return this.types.map(item => item.type.name)
    }
  }
}
</script>

<style>
.item {
  float: left;
  margin: 3em;
  display: flex;
  flex-direction: column;
}

img {
  width: 200px;
}
</style>
