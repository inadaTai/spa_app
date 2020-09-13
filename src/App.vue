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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
