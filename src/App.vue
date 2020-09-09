<template>
    <div id="app">
    <router-view/>
    
    <Header id="header"></Header>

    <div class="nav-res">
        <a href="#" class="link-content" @click="clickSmoothScroll('#app')">
          <p class="comment">Top</p>
        </a>
        <a href="#" class="link-content" @click="clickSmoothScroll('#about')">
          <p class="comment">About</p>
        </a>
    </div>
    <About id="about"></About>

    <Footer></Footer>
    </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
