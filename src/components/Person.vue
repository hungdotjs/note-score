<template>
  <div class="person disableSave">
    <div class="content">
      <img :src="getPic(person.id)" alt="#" class="person__image" />

      <img :src="crownImage" alt="#" class="person__crown" v-if="hasCrown" />

      <div class="person__name">
        {{ person.name }}
      </div>

      <div class="person__score">
        {{ person.score }}
      </div>

      <button class="person__calc person__calc--plus " @click="addScore">
        <img :src="plusImage" class="person__icon disableSave" alt="#" />
      </button>

      <button class="person__calc person__calc--minus " @click="remove">
        <img :src="minusImage" class="person__icon disableSave" alt="#" />
      </button>
    </div>
  </div>
</template>

<script>
import { MessageBox } from 'element-ui';

export default {
  props: {
    person: {
      type: Object,
      required: true,
    },

    hasCrown: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      plusImage: require('@/assets/plus.svg'),
      minusImage: require('@/assets/minus.svg'),
      crownImage: require('@/assets/medal.svg'),

      interval: null,
      avatar: '',
    };
  },

  methods: {
    getPic(image) {
      if (image > 5) return require('@/assets/img/0.jpg');
      // eslint-disable-next-line import/no-dynamic-require
      return require(`@/assets/img/${image}.jpg`);
    },

    remove() {
      this.$confirm('This will permanently delete. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
      }).then(() => {
        this.$message({
          type: 'success',
          message: 'Delete completed',
        });
        this.$emit('remove');
      });
    },

    addScore() {
      MessageBox.prompt('Plus/Minus score', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        customClass: 'w-75',
        inputValidator(value) {
          return !!value && true;
        },
        inputErrorMessage: 'Score cannot be blank',
      }).then(({ value }) => {
        this.person.score += parseFloat(value);
        this.$emit('change', this.person);
      });
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
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

  @media (min-width: 768px) {
    font-size: 18px;
  }

  &__crown {
    position: absolute;
    top: -10px;
    left: -20px;
    width: 64px;
    height: 64px;
  }

  &__image {
    position: relative;
    width: 100%;
    height: auto;
    max-height: 100%;
    object-fit: cover;
    border-radius: 16px;
  }

  &__name {
    font-size: 1.3em;
    text-transform: uppercase;
    position: absolute;
    bottom: 3.5em;
    right: 1em;
    display: flex;
    align-items: center;
    padding: 2px 16px;
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
      top: 1em;
      right: 1em;
    }
  }
}
</style>
