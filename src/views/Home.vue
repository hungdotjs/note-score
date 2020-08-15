<template>
  <div class="home">
    <div class="content">
      <Person v-for="i in 8" :key="i"></Person>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Person from '@/components/Person.vue';

export default {
  name: 'Home',
  components: {
    Person,
  },
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
}
</style>
