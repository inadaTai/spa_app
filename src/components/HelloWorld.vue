<template>
  <div class="hello">
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
  
  <div class="site-top">
  <vue-typer :text="['こんにちは、ようこそ！！ \nこのサイトでは私の趣味的な話題に触れつつ書いていきます。 \n\n\n\n↓\n']" 
    class="top-text" :repeat='0' :preTypeDelay="1000" :typeDelay="120" :preEraseDelay="5000" :eraseDelay="2000">
  </vue-typer>
  </div>
    <h1>{{ msg }}</h1>
  </div>
</template>
        <a href="#" class="link-content" @click="clickSmoothScroll('#app')">
          <p class="comment">Top</p>
        </a>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '下記が実績'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
/* vueのパーティクル部分 */
div.site-top {
  font-size: 30px;
}
.particles {
  background-color: orange;
  position: fixed;
  z-index: -1;
  width: 100%;
  height:100%;
}
</style>
