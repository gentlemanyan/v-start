<template>
  <div class="home">
      this is at home.
      <header-bar>

      </header-bar>
  </div>
</template>

<script>
  import headerBar from '../components/header-bar.vue';
  export default {
    components: { headerBar },
    data() {
      return {};
    }
  }
</script>

<style lang="scss" scoped>
  .shopee-headbar {
    background: green;
  }
</style>
