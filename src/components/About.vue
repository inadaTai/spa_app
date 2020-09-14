<template>
  <div class="about-section">
    <h1 class="about_title"><font-awesome-icon icon="coffee" />About</h1>
      <div class="about">
        このページにて、私の活動内容は下記となります。
        ポートフォリオ(※画像をクリックすると切り替わります。)
        <div id="aboutimg">
           <img :src="imageSrc" v-on:click="changeImg()"> 
        </div>
        <p class="portfolio_name">サイト名：what_service_app</p>
      <div class="portfolio_link">
        <a href="https://wsa-sns-app.herokuapp.com/">PC版はこちら</a>
        <a href="https://play.google.com/store/apps/details?id=com.wsa.what_service">スマホアプリ版（ストアURL）</a>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'About',
    data () {
      return {
        imageSrc: require("@/assets/sitetop.png")
      }
    },
  methods: {
    changeImg () {
      if(this.imageSrc == require("@/assets/kizi.png")) return this.imageSrc = require("@/assets/sitetop.png");
      this.imageSrc = require("@/assets/kizi.png")
    }
  }
}
</script>

<style>
.about-section{
  background-color: floralwhite;
  padding: 30px;
}
.about{
  white-space: pre-line;
}
.portfolio_name{
  font-weight: bold;
  font-size: 20px;
}
</style>