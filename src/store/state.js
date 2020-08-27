const state = {
  person: JSON.parse(localStorage.getItem('person')) || [],
};

export default state;
