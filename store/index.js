import { createStore } from 'vuex';

export default createStore({
  state: {
    user: null, // Store user details here
  },
  mutations: {
    setUser(state, user) {
      state.user = user; // Update user details
    },
    clearUser(state) {
      state.user = null; // Clear user details on logout
    },
  },
  actions: {
    loginUser({ commit }, user) {
      commit('setUser', user); // Commit the user details
    },
    logoutUser({ commit }) {
      commit('clearUser'); // Clear user details
    },
  },
  getters: {
    getUser(state) {
      return state.user; // Get user details
    },
  },
});