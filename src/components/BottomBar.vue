<template>
  <div class="navbar">
    <div class="circle" @click="openCreate">
      <i class="fas fa-plus plus-icon"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      form: {
        score: 0,
        name: '',
      },
    };
  },

  methods: {
    openCreate() {
      this.$prompt('Name', 'Create', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        customClass: 'w-75',
        inputValidator(value) {
          return !!value && true;
        },
        inputErrorMessage: 'Name cannot be blank',
      }).then(({ value }) => {
        this.form.name = value;
        this.save();
      });
    },

    save() {
      this.$emit('save', { id: Date.now(), ...this.form });
      this.form = {
        name: '',
        score: 0,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
$navbar-height: 50px;
$circle-radius: 60px;

.navbar {
  position: relative;
  height: $navbar-height;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  border-radius: 25px;
  background-color: transparent;
}

.circle {
  margin-bottom: 0;
  height: $circle-radius;
  width: $circle-radius;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #181818;
  border: 5px solid white;
  box-shadow: 0 20px 50px rgba(240, 46, 170, 0.7);
  z-index: 9;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
}

.circle .plus-icon {
  color: white;
  font-size: 22px;
  transition: opacity 0.3s, transform 0.2s;
}
</style>
