<template>
  <div class="person">
    <div class="content">
      <img :src="image" alt="#" class="person__image" />

      <div class="person__name">
        {{ name }}
      </div>

      <div class="person__score">
        <img :src="scoreImage" alt="#" />
        {{ score }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scoreImage: require('@/assets/score.svg'),
      image: require('@/assets/1.png'),
      score: 10,
      name: 'Hung',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.content {
}

.person {
  display: inline-block;
  position: relative;
  width: 50%;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 14px;
  overflow: hidden;

  &:hover {
    transform: scale(1.1);
    transition: all 0.3s;
  }

  &__image {
    width: 100%;
    border-radius: 8px;
  }

  &__name {
    position: absolute;
    top: 16px;
    right: 16px;
    display: flex;
    align-items: center;
    padding: 4px 8px;
    background: #fff;
    border-radius: 16px;
  }

  &__score {
    position: absolute;
    display: flex;
    align-items: center;
    bottom: 16px;
    left: 16px;
    padding: 2px 6px;
    background: #fff;
    border-radius: 16px;

    img {
      width: 24px;
      height: 24px;
      margin-right: 8px;
    }
  }
}
</style>
