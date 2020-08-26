<template>
  <div id="app">
    <div class="navbar">
      TITEDDY
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: Arciform;
  src: url('./assets/fonts/Arciform.otf');
}

html {
  font-family: Arciform, cursive, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
}

* {
  font-weight: bold;
  box-sizing: border-box;
  outline: none;
  touch-action: manipulation;
}

#app {
  color: #2c3e50;
  overflow-x: hidden;
  min-height: 90vh;
}

.navbar {
  padding: 16px 32px;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
}

.w-100 {
  width: 100% !important;
}

.w-75 {
  width: 75% !important;
}

.mr-8 {
  margin-right: 8px;
}
</style>
