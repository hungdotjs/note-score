<template>
  <div id="app">
    <div class="navbar">
      TiTeddy
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
  margin-top: 70px;
  // background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
  background-color: white;
  background-repeat: no-repeat;
  color: black;
}

* {
  font-weight: bold;
  box-sizing: border-box;
  outline: none;
  touch-action: manipulation;
}

#app {
  overflow-x: hidden;
  min-height: 80vh;
}

.navbar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 16px 32px;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  text-decoration: underline;
  background: #fff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  z-index: 1000;
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
