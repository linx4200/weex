import { Store } from 'weex-x'

// root state object.
// each Weex-x instance is just a single state tree.
const state = {
  pages: {
    page1: false,
    page2: false
  }
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  route: (state, page) => {
    Object.keys(state.pages).forEach((k) => { state.pages[k] = false })
    state.pages[page] = true
  }
}

// actions are functions that causes side effects and can involve
// asynchronous operations.
const actions = {
  route: ({ commit }, payload) => commit('route', payload)
  // decrement: ({ commit }) => commit('decrement'),
  // incrementIfOdd ({ commit, state }) {
  //   if ((state.count + 1) % 2 === 0) {
  //     commit('increment')
  //   }
  // },
  // incrementAsync ({ commit }) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       commit('increment')
  //       resolve()
  //     }, 1000)
  //   })
  // }
}

// getters are functions
const getters = {
  pages: state => state.pages
}

// A Weex-x instance is created by combining the state, mutations, actions,
// and getters.
export default new Store({
  state,
  getters,
  actions,
  mutations
})
