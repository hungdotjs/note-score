<template>
  <div class="person disableSave">
    <div class="content">
      <img :src="image" alt="#" class="person__image" />

      <div class="person__name">
        {{ person.name }}
      </div>

      <div class="person__score">
        <img :src="scoreImage" class="person__icon mr4" alt="#" />
        {{ person.score }}
      </div>

      <button
        class="person__calc person__calc--plus "
        @click="addScore"
        v-touch:touchhold="touchHoldPlusHandler"
        v-touch:end="endTouch"
      >
        <img :src="plusImage" class="person__icon disableSave" alt="#" />
      </button>

      <button
        class="person__calc person__calc--minus "
        @click="minusScore"
        v-touch:touchhold="touchHoldMinusHandler"
        v-touch:end="endTouch"
      >
        <img :src="minusImage" class="person__icon disableSave" alt="#" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    person: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      scoreImage: require('@/assets/score.svg'),
      plusImage: require('@/assets/plus.svg'),
      minusImage: require('@/assets/minus.svg'),
      image: require('@/assets/1.png'),
      interval: null,
    };
  },

  methods: {
    addScore() {
      this.person.score += 1;
    },

    minusScore() {
      this.person.score -= 1;
    },

    touchHoldPlusHandler() {
      this.interval = setInterval(() => {
        this.addScore();
      }, 100);
    },

    touchHoldMinusHandler() {
      this.interval = setInterval(() => {
        this.minusScore();
      }, 100);
    },

    endTouch() {
      clearInterval(this.interval);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.disableSave {
  -webkit-user-select: none;
  -webkit-touch-callout: none;
}

.person {
  display: inline-block;
  position: relative;
  width: 50%;
  padding: 4px 8px;
  border-radius: 16px;
  font-size: 14px;
  overflow: hidden;

  @media (min-width: 768px) {
    font-size: 16px;
  }

  &__image {
    width: 100%;
    border-radius: 16px;
  }

  &__name {
    position: absolute;
    top: 1.5em;
    right: 1.5em;
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
    bottom: 1.5em;
    left: 1.5em;
    padding: 2px 10px;
    background: #fff;
    border-radius: 16px;
  }

  &__icon {
    width: 2em;
    height: 2em;
  }

  &__calc {
    position: absolute;
    display: flex;
    align-items: center;
    padding: 0;
    background: white;
    border-radius: 50%;
    border: 2px solid white;
    cursor: pointer;
    font-size: 1em;

    &:hover {
      transform: scale(1.2);
      transition: all 0.3s;
    }

    &--plus {
      bottom: 1.5em;
      right: 1.5em;
    }

    &--minus {
      bottom: 4.5em;
      right: 1.5em;
    }
  }
}
</style>
