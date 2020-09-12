<template>
  <div>
    <h1 class="about_title">About</h1>
      <div class="about">
        このページにて、私の活動内容は下記となります。
        ポートフォリオ(※クリックすると切り替わります。)
        <div id="aboutsection">
           <img :src="imageSrc" v-on:click="changeImg()"> 
        </div>
      <div class="portfolio_link">
        <a href="https://wsa-sns-app.herokuapp.com/">PC版URL</a>
        <a href="https://play.google.com/store/apps/details?id=com.wsa.what_service">スマホアプリ版URL</a>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'About',
    data () {
      return {
        imageSrc: require("@/assets/logo.png")
      }
    },
  methods: {
    changeImg () {
      this.imageSrc = require("@/assets/logo.png")
    }
  }
}
</script>

<style>
.about{
  white-space: pre-line;
}
</style>