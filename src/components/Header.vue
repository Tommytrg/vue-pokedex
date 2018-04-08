<template>
  <div class="header">
    <div class="logo"><img src="@/assets/pokemon_logo.png"></div>
    <nav class="navigation">
      <nav-button :label='labels.allPokemon' :page="'Home'"></nav-button>
      <nav-button :label='labels.searchPokemon' :page="'Search'"></nav-button>
      <nav-button :label='labels.pokemonTypes' :page="'Types'"></nav-button>
      <nav-button :label='labels.myPokemons' :page="'MyPokemons'"></nav-button>
    </nav>
    <div class="login">
      <login-control></login-control>
    </div>
  </div>
</template>

<script>
import NavButton from './generic/NavButton'
import LoginControl from './generic/LoginControl'

export default {
  name: 'Header',
  components: {
    'nav-button': NavButton,
    'login-control': LoginControl
  },
  data () {
    return {
      labels: {
        allPokemon: 'Todos los pokemon',
        searchPokemon: 'Buscar pokemon',
        pokemonTypes: 'Tipos de pokemon',
        myPokemons: 'Mis pokemon'
      }
    }
  }
}
</script>

<style scoped lang="less" >
  .header{
    display: grid;
    height: 150px;
    background: #f9f9f9;
    width: 100%;
    grid-template-columns: auto 1fr 250px;
    border-bottom: solid 1px darkgrey;
    box-shadow: 1px 1px #656565;
    margin-bottom: 2rem;
  }
  .logo{
    padding: 2rem;
    align-self: center;
  }
  .navigation{
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(4, auto);
    width: 650px;
    align-self: end;
    padding: 2rem;
  }
  .login{
    text-align: right;
    padding: 1rem 2rem;
  }
</style>
