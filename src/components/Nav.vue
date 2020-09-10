  <template>
  <div>
    <a href="#" class="nav-button" @click="clickSmoothScroll('#app')">Top</a>
    <a href="#" class="nav-button" @click="clickSmoothScroll('#about')">About</a>
  </div>
</template>

<script>
export default {
  methods: {
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
</style>