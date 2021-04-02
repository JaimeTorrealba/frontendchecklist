import { createStore } from 'vuex';

// Create a new store instance.
const store = createStore({
  state() {
    return {
      Projects: [],
    };
  },
  mutations: {
    updateStorageMutation(state, newValue) {
      state.Projects = [...state.Projects, newValue];
    },
  },
  getters: {
    ProjectNames: (state) => state.Projects,
  },
  actions: {
    updateStoreAction({ commit }, newValue) {
      commit('updateStorageMutation', newValue);
    },
  },
});

export default store;
