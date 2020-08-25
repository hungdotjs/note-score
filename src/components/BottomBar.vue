<template>
  <div class="navbar">
    <div class="circle" @click="openCreate">
      <i class="fas fa-plus plus-icon"></i>
    </div>

    <el-dialog
      title="Create new player"
      :visible.sync="dialogVisible"
      :append-to-body="true"
      width="90%"
    >
      <el-form :model="form">
        <el-form-item label="Name">
          <el-input type="text" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="Score">
          <el-input-number v-model="form.score"></el-input-number>
        </el-form-item>
      </el-form>
      <el-button type="success" class="w-100" @click="save">Save</el-button>
    </el-dialog>
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
      this.dialogVisible = true;
    },

    save() {
      this.dialogVisible = false;
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
$backgroundColor: rgb(253, 192, 223);

.w-100 {
  width: 100%;
}

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
}

.circle .plus-icon {
  color: white;
  font-size: 22px;
  transition: opacity 0.3s, transform 0.2s;
}
</style>
