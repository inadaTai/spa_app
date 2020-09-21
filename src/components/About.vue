<template>
  <div class="about-section">
    <h1 class="about_title"><font-awesome-icon icon="coffee" style="padding-right: 10px" />About</h1>
        <p class="about-discription">このページにて、私の活動内容は下記となります。
        ポートフォリオ(※画像をクリックすると切り替わります。)</p>
      <div class="about">
        <div id="aboutimg">
          <img :src="imageSrc" v-on:click="changeImg()"> 
          <p class="portfolio-name">サイト名：what_service_app</p>
          <div class="portfolio-discription">【説明】
            このサイトはユーザー間にてサービスの話題共有を目的としたサイトです。
            何故このサービス共有なのか？という点ですが、サービスを受けた人の話題を1つに集約できる様なサイトを目指しています。
            人によって評価はそれぞれです、しかし回答サンプルがあればあるほどそのサービスは良いサービスなのか見極める一つの材料になり得ると思っております。
            ※このポートフォリオではフレームワークRailsを使用しており開発環境はDockerを使用しコンテナ開発環境やCircle.ciを利用しpush時にテストを走らせるなどモダンな開発環境を採用しました。
          </div>
          <div class="portfolio-link">
            <a href="https://wsa-sns-app.herokuapp.com/">● PC版はこちら</a>
            <a href="https://play.google.com/store/apps/details?id=com.wsa.what_service">● スマホアプリ版（ストアURL）</a>
          </div>
        </div>
        <div id="aboutimg2">
          <img :src="imageSrc2" v-on:click="changeImg2()"> 
          <p class="portfolio-name">サイト名：Yama_soft</p>
          <div class="portfolio-discription">【説明】
            このサイトは私作成したものを載せているを紹介するサイトで作成している中でVue.jsに対する知見が深まったと感じております。
            また、Vue.jsに対するライブラリを使用することや自分で動きを考えつつメソッドを使用し実装する点ではJavascriptの勉強になり、BaasのサービスFirebaseにてデプロイしてみたりなど独学で触ったことない便利なサービスを実際に使い積極的に使ったことないもの利用し導入していきました。
          </div>
          <div class="portfolio-link">
            <a href="https://spaapp-62724.web.app/#/">● PC版はこちら</a>
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
        imageSrc: require("@/assets/sitetop.png"),
        imageSrc2: require("@/assets/yamasoft.png")
      }
    },
  methods: {
    changeImg () {
      if(this.imageSrc == require("@/assets/kizi.png")) return this.imageSrc = require("@/assets/sitetop.png");
      this.imageSrc = require("@/assets/kizi.png")
    },
    changeImg2 () {
      if(this.imageSrc2 == require("@/assets/yamasoft2.png")) return this.imageSrc2 = require("@/assets/yamasoft.png");
      this.imageSrc2 = require("@/assets/yamasoft2.png")
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
@media (max-width: 1200px) {
  .about{
  white-space: pre-line;
  display: block;
  }
}
.about-discription{
  text-align: center;
  white-space: pre-line;
  font-weight: bold;
}
#aboutimg{
  padding: 10px 100px;
}
#aboutimg2{
  padding: 10px 100px;
}
@media (max-width: 400px) {
  #aboutimg{
    padding: 10px 10px;
  }
  #aboutimg2{
    padding: 10px 10px;
  }
}
.portfolio-name{
  font-weight: bold;
  font-size: 20px;
}
.portfolio-discription{
  text-align: left;
  padding-bottom: 10px;
}
@media (max-width: 650px){
  img{
    width: 300px;
    height: 200px;
  }
}
</style>