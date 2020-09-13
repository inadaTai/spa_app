<template>
  <div class="header">
    <div class="header-inner">
    <div class="nav-res">
        <a href="#" class="link-content" @click="clickSmoothScroll('#app')">
          <p class="comment">Top</p>
        </a>
        <a href="#" class="link-content" @click="clickSmoothScroll('#about')">
          <p class="comment">About</p>
        </a>
        <a href="#" class="link-content" @click="clickSmoothScroll('#skill')">
          <p class="comment">Skill</p>
        </a>
        <a href="#" class="link-content" @click="clickSmoothScroll('#Contact')">
          <p class="comment">Contact</p>
        </a>
    </div>
    <h1 class="title-name"><vue-typer :text="['Yama_soft']" 
      class="top-text" :repeat='0' :preTypeDelay="1000" :typeDelay="120" :preEraseDelay="5000" :eraseDelay="2000">
    </vue-typer></h1>
      <Nav class="nav"></Nav>
    </div>
  </div>
</template>

<script>
export default {
    name: 'headComp',
      data () {
    return {
      message: '感想を入力'
    }
  }
}
</script>

<style>
.nav-res{ 
  display: flex;
  float: right;
}

.comment {
  padding-left: 15px;
  font-size: 20px;
}
</style>