<template>
  <div class="person disableSave">
    <div class="content">
      <img :src="getPic(image)" alt="#" class="person__image" />

      <div class="person__name">
        {{ person.name }}
      </div>

      <div class="person__score">
        <!-- <i class="fas fa-dragon mr-8"></i> -->
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

    image: {
      type: Number,
      default: 1,
    },
  },

  data() {
    return {
      scoreImage: require('@/assets/score.svg'),
      plusImage: require('@/assets/plus.svg'),
      minusImage: require('@/assets/minus.svg'),
      interval: null,
    };
  },

  methods: {
    getPic(image) {
      // eslint-disable-next-line import/no-dynamic-require
      return require(`@/assets/img/${image}.gif`);
    },

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

.content {
  width: 100%;
  height: 100%;
}

.person {
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 16px;
  font-size: 16px;
  margin-bottom: 16px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

  @media (min-width: 768px) {
    font-size: 18px;
  }

  &__image {
    position: relative;
    width: 100%;
    height: auto;
    max-height: 100%;
    object-fit: none;
    border-radius: 16px;
  }

  &__name {
    font-size: 1.2em;
    text-transform: uppercase;
    position: absolute;
    top: 1em;
    right: 1em;
    display: flex;
    align-items: center;
    padding: 2px 12px;
    background: #000;
    color: white;
    border: 3px solid white;
    border-radius: 16px;
  }

  &__score {
    position: absolute;
    display: flex;
    align-items: center;
    bottom: 1em;
    left: 1em;
    top: auto;
    right: auto;
    font-size: 1.2em;
    padding: 2px 12px;
    background: #000;
    color: white;
    border: 3px solid white;
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
    border-radius: 50%;
    background: white;
    border: 2px solid white;
    cursor: pointer;
    font-size: 1em;

    &:hover {
      transform: scale(1.2);
      transition: all 0.3s;
    }

    &--plus {
      bottom: 1em;
      right: 1em;
    }

    &--minus {
      bottom: 4em;
      right: 1em;
    }
  }
}
</style>
