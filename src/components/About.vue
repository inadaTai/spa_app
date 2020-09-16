<template>
  <div class="about-section">
    <h1 class="about_title"><font-awesome-icon icon="coffee" style="padding-right: 10px" />About</h1>
        <p class="about-discription">このページにて、私の活動内容は下記となります。
        ポートフォリオ(※画像をクリックすると切り替わります。)</p>
      <div class="about">
        <div id="aboutimg">
          <img :src="imageSrc" v-on:click="changeImg()"> 
          <p class="portfolio-name">サイト名：what_service_app</p>
          <div class="portfolio-discription">説明
            このサイトはユーザー間にてサービスの話題共有を目的としたサイトです。
            何故このサービス共有なのか？という点ですが、サービスを受けた人の話題を
            1つに集約できる様なサイトを目指しています。
            人によって評価はそれぞれです、回答サンプルがあればあるほど良いサービスなのか
            見極める一つの材料になり得ると思っております。
          </div>
          <div class="portfolio-link">
            <a href="https://wsa-sns-app.herokuapp.com/">PC版はこちら</a>
            <a href="https://play.google.com/store/apps/details?id=com.wsa.what_service">スマホアプリ版（ストアURL）</a>
          </div>
        </div>
        <div id="aboutimg2">
          <img :src="imageSrc" v-on:click="changeImg()"> 
          <p class="portfolio-name">サイト名：Yama_soft</p>
          <div class="portfolio-discription">説明
            このサイトは私作成したものを載せているサイトでVue.jsに対する知見が深まったこと
            また、ライブラリを使用したり自分でjavascriptの動きを考えつつ実装する点では勉強になり
            BaasのサービスFirebaseにてデプロイしてみたりなど独学で触ったことない便利なサービスを
            実際に使うことにより様々なサービスに対する知見が広がったと思っています。
          </div>
          <div class="portfolio-link">
            <a href="https://wsa-sns-app.herokuapp.com/">PC版はこちら</a>
          </div>
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
  display: flex;
}
.about-discription{
  text-align: center;
  white-space: pre-line;
  font-weight: bold;
}
#aboutimg{
  padding: 10px 150px;
}
#aboutimg2{
  padding: 10px 150px;
}
.portfolio-name{
  font-weight: bold;
  font-size: 20px;
}
</style>