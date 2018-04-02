import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  pokemons: []
}

const mutations = {
  RECEIVE_POKEMON (state, { pokemon }) {
    console.log('POKEMON=>>>>', pokemon)
    state.pokemons.push(pokemon)
  }
}

const actions = {
  async FETCH_POKEMONS ({ commit }) {
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${state.pokemons.length}`
    const data = await axios.get(url)
    for (let result of data.data.results) {
      let pokemon = await axios.get(result.url)
      commit('RECEIVE_POKEMON', { pokemon: pokemon.data })
    }
  }
}

const getters = {
  pokemons: state => {
    return state.pokemons.map(data => {
      return data
    })
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
