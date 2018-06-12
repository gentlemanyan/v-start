<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
  @import './styles/app.scss';
</style>

<script>
export default {
  data: function() {
    return {
      isLoadCommon: false
    }
  },

  methods: {
    loadModule() {
      this.$router.push('/codesplit');
    }
  }
};
</script>
