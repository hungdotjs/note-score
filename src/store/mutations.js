const mutations = {
  UPDATE_PERSON: (state, payload) => {
    state.person = payload;
    localStorage.setItem('person', JSON.stringify(payload));
  },

  ADJUST_SCORE: (state, { id, score }) => {
    state.person = state.person.map((item) => {
      if (item === id) {
        return { ...item, score };
      }
      return item;
    });
    localStorage.setItem('person', JSON.stringify(state.person));
  },
};

export default mutations;
