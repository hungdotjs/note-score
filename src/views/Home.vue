<template>
  <div class="home">
    <div class="content">
      <transition-group name="list">
        <Person
          v-for="(person, index) in persons"
          :key="person.id"
          :person="person"
          :image="index"
        ></Person>
      </transition-group>
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
  padding-bottom: 50px;
}

.home {
  position: relative;
  padding: 16px;
}

.bottom {
  position: fixed;
  bottom: 16px;
  top: auto;
  left: auto;
  right: 16px;
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.3s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
