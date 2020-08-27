const getters = {
  person: (state) => {
    const sort = [...state.person].sort((a, b) => b.score - a.score);
    return sort;
  },
};

export default getters;
