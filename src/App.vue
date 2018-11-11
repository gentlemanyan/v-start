<template>
  <div id="app">
    <input type="text" v-model="count">
    <button type="button" @click="add">增加count</button>
    <span style="font-size: 24px; color: red">{{count}}</span>
    <common></common>
  </div>
</template>

<style lang="scss">
  @import './styles/app.scss';
</style>

<script>
import Common from './components/common.vue';

export default {
  components: { Common },
  data: function() {
    return {
      isLoadCommon: false,
      name: 'zhangyan',
      count: 1
    }
  },

  computed: {
    sum() {
      return this.count * 100;
    }
  },

  methods: {
    loadModule() {
      this.$router.push('/codesplit');
    },
    add() {
      this.count++;
    }
  }
};
</script>

<style lang="scss">
// @import '../dist/css/product/sprite.css';
.icon {
  // background-image: url("../public/sprites/1x/ach-failed.png");
}
</style>

