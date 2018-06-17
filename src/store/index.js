import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  pokemons: [],
  user: null
}

const API_URL = 'https://pokeapi.co/api/v2/';

const mutations = {
  RECEIVE_POKEMONS (state, pokemons) {
    pokemons.results.forEach(pokemon => state.pokemons.push(pokemon))
  }
}

const actions = {
  FETCH_POKEMONS ({commit}, offset) {
    axios.get(`${API_URL}pokemon/?limit=24&offset=${offset}`)
      .then(response => {
        commit('RECEIVE_POKEMONS', response.data)
      })
  }
}

const getters = {
  pokemons: state => {
    return state.pokemons.map(data => {
      return {
        name: data.name,
        url: data.url
      }
    })
  },
  user: state => {
    return state.user
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store