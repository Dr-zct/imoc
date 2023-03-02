<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
}
</script>

<style lang="less">
html,
body {
  width: 1920px;
  height: 1080px;
  overflow: hidden;
  transform-origin: 0 0;
  margin: 0;
}

#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  div::-webkit-scrollbar {
    width: 6px;
    // margin-right: 3px;
  }
  div::-webkit-scrollbar-thumb {
    border-radius: 30px;
    -webkit-box-shadow: inset 0 0 6px rgb(0 0 0 / 30%);
    background-color: rgba(28, 131, 250, 0.5);
  }
  div::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgb(0 0 0 / 30%);
    border-radius: 10px;
    background-color: #0e1e42;
  }
}
</style>
