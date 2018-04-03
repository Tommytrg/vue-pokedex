import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  pokemons: []
}

const mutations = {
  RECEIVE_POKEMON (state, { pokemon }) {
    state.pokemons.push(pokemon)
  }
}

const actions = {
  async FETCH_POKEMONS ({ commit }) {
    const size = state.pokemons.length
    const url = `https://pokeapi.co/api/v2/pokemon`
    for (let i = 1; i < 5; i += 1) {
      let pokemon = await axios.get(`${url}/${size + i}`)
      commit('RECEIVE_POKEMON', { pokemon: pokemon.data })
    }
  }
}

const getters = {
  pokemons: state => {
    return state.pokemons.map(data => {
      return {
        name: data.name,
        id: data.id,
        types: data.types
      }
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
