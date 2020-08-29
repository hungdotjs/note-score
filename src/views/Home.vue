<template>
  <div class="home">
    <div class="content">
      <transition-group name="flip-list">
        <Person
          v-for="(person, index) in data"
          :key="person.id"
          :person="person"
          :hasCrown="person.id === top1"
          @change="handleChange"
          @remove="remove(index)"
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
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: {
    Person,
    BottomBar,
  },

  data() {
    return {};
  },

  computed: {
    ...mapGetters({
      data: 'person',
    }),

    top1() {
      return this.data[0].id || 0;
    },
  },

  methods: {
    addPerson(person) {
      const input = {
        id: this.data.length,
        ...person,
      };
      this.data.push(input);
      this.$store.dispatch('updatePerson', this.data);
    },

    handleChange(payload) {
      this.$store.dispatch('adjustScore', payload);
    },

    remove(index) {
      this.data.splice(index, 1);
      this.$store.dispatch('updatePerson', this.data);
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
  padding: 16px 32px;
}

.bottom {
  position: fixed;
  bottom: 16px;
  top: auto;
  left: auto;
  right: 16px;
}

.flip-list-move {
  transition: transform 1s;
}
</style>
