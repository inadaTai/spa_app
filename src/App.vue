<template>
    <div id="app">
      <HeadComp id="header"></HeadComp>
      <vue-particles
      class="particles"
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
    <div class="nav-res">
      <div class="title-name"><vue-typer :text="['Yama_soft\n']" 
        class="top-text" :repeat='0' :preTypeDelay="1000" :typeDelay="120" :preEraseDelay="5000" :eraseDelay="2000">
      </vue-typer></div>
      <div class="right-menu">
        <a href="#" class="link-content" @click="clickSmoothScroll('#app')">
          <p class="comment">Top</p>
        </a>
        <a href="#" class="link-content" @click="clickSmoothScroll('#about')">
          <p class="comment">About</p>
        </a>
        <a href="#" class="link-content" @click="clickSmoothScroll('#skill')">
          <p class="comment">Skill</p>
        </a>
        <a href="#" class="link-content" @click="clickSmoothScroll('#contact')">
          <p class="comment">Contact</p>
        </a>
        </div>
    </div>
    <router-view/>

    <Header id="header"></Header>
    <About id="about"></About>
    <Skill id="skill"></Skill>
    <Contact id="contact"></Contact>

    <FooterComp id="footer"></FooterComp>
    </div>
</template>

<script>
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Skill from './components/Skill.vue'
import HeadComp from './components/HeadComp.vue'
import FooterComp from './components/FooterComp.vue'


export default {
  name: 'App',
  components: {
    About,
    Skill,
    Contact,
    HeadComp,
    FooterComp
  },
  methods:{
    clickSmoothScroll (x) {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector(x),
        800,
        null,
        null,
        'y'
      )
    }
  }
}
</script>

<style>
/*共通部分*/
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin: auto;
}
/*ヘッダー*/
.title-name{
  display: flex;
  font-size: 33px;
  padding-left: 10px;
  color: deeppink;
}
@media (max-width: 800px) {
.title-name{
  display: flex;
  font-size: 20px;
  padding-left: 10px;
  color: deeppink;
  font-weight: bold;
  }
}
@media (max-width: 400px) {
.title-name{
  display: flex;
  font-size: 15px;
  padding-left: 10px;
  color: deeppink;
  font-weight: bold;
  padding-right: 20px;
  }
}
.vue-typer {
  font-family: monospace;
}

.vue-typer .custom.char{
  font-style: italic;
}
.vue-typer .custom.char:first-child {
  color: deeppink;
  padding: 5px;
  font-size: 40px;
}
@media (max-width: 800px) {
  .vue-typer .custom.char:first-child {
    color: deeppink;
    padding: 5px;
    font-size: 30px;
  }
}
@media (max-width: 400px) {
  .vue-typer .custom.char:first-child {
    color: deeppink;
    padding: 5px;
    font-size: 20px;
  }
}
.vue-typer .custom.char.selected {
  background-color: white;
}
.vue-typer .custom.caret {
  width: 10px;
  background-color: white;
}
.nav-res{ 
  width: 100%;
  justify-content: space-between;
  display: flex;
  position: fixed;
  background-color: blanchedalmond;
}
.comment {
  padding-left: 25px;
  font-size: 20px;
  color: deeppink;
  font-weight: bold;
}
.right-menu{
  display: flex;
  margin-right: 160px;
  font-style: italic;
}
@media (max-width: 400px) {
  .right-menu{
    display: flex;
    margin-right: auto;
    font-style: italic;
  }
  .comment {
    padding-left: 8px;
    font-size: 15px;
    color: deeppink;
    font-weight: bold;
  }
}

/*パーティクルの背景CSS*/
.particles {
  background-color: orange;
  position: fixed;
  z-index: -1;
  width: 100%;
  height:100%;
}
</style>
