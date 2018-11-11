<template>
  <div class="shopee-modal">
    <component :is="modals"></component>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  data() {
    return {
      modals: []
    }
  },
  methods: {
    addModals(name) {
      Vue.component(name, () => import(`./${name}`));
      this.modals.push(name);
    }
  }
}
</script>

<style scoped lang="scss">

</style>


