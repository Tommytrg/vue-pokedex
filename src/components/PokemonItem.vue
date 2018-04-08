<template>
  <div class="item">
    <p class="name">{{name}}</p>
    <p class="hitpoints">HITPOINTS</p>
    <div class="type">
      <div v-for="type in pokemonTypes" :key="type">
        <i :src="typeIcon(type)">{{type}}</i>
      </div>
    </div>
    <img class="picture" :src="pokemonImg" :alt="name">
    <p></p>
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
  },

  methods: {
    typeIcon: function (type) {
      return `statics/assets/water.svg`
    }
  }
}
</script>

<style scoped>
.item {
  border: solid 5px #EACF22;
  background-color: #DD9E53;
  padding: 1rem;
  display:grid;
  grid-template-columns: 100px 1fr 100px;
  grid-template-areas: "name hitpoints type"
                       "picture picture picture"
                       "attacks attacks attacks";

  color: #242424;
}

.name{
  grid-area: name;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  margin-left: 1rem;
}

.hitpoints {
  grid-area: hitpoints;
}

.type {
  grid-area: type;
}
.picture{
  grid-area: picture;
  background-color: white;
  justify-content: center;
  margin: 1rem;
  border: solid 5px #EACF22;
  box-shadow: 5px 4px 7px -1px #775D76;
  height: 160px;
  object-fit: cover;
}

img {
  width: 200px;
}
</style>
