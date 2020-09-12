<template>
  <div class="header">
    <div class="header-inner">
    <h1><vue-typer :text="['Welcome to Yama_soft']" 
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

</style>