<template>
  <div class="hello">
  <div class="site-top" id="top">
    <vue-typer :text="['\n\n\nようこそ\nこのサイトでは私の作成したものや \nスキルについて書いていきます。 \n\n\n\n\n']" 
      class="top-text" :repeat='0' :preTypeDelay="1000" :typeDelay="120" :preEraseDelay="5000" :eraseDelay="2000">
    </vue-typer>
  </div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

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
@media (max-width: 650px) {
  div.site-top {
    font-size: 23px;
  }
}
</style>
