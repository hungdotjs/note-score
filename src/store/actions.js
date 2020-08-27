const actions = {
  updatePerson({ commit }, payload) {
    commit('UPDATE_PERSON', payload);
  },

  adjustScore({ commit }, payload) {
    commit('ADJUST_SCORE', payload);
  },
};

export default actions;
