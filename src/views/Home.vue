<template>
  <div class="home">
    <div class="navbar"></div>
    <div class="content">
      <Person v-for="person in persons" :key="person" :person="person"></Person>
    </div>
    <BottomBar class="bottom" @save="addPerson"></BottomBar>
  </div>
</template>

<script>
// @ is an alias to /src
import Person from '@/components/Person.vue';
import BottomBar from '@/components/BottomBar.vue';

export default {
  name: 'Home',
  components: {
    Person,
    BottomBar,
  },

  data() {
    return {
      persons: [],
    };
  },

  methods: {
    addPerson(person) {
      this.persons.push(person);
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
}

.home {
  position: relative;
}

.bottom {
  position: fixed;
  bottom: 0;
  top: auto;
  left: 0;
  right: 0;
}
</style>
