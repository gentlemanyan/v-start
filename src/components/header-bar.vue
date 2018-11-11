<template>
  <div class="shopee-headbar">
    <div class="shopee-header__container">
    </div>
    <!-- <div v-html="replySvg"></div> -->
  </div>
</template>

<script>
import replySvg from '../../svg/reply.svg';
export default {
  data() {
    return {
      replySvg
    }
  }
}
</script>

<style scoped lang="scss">
   .shopee-headbar {
    width: 100%;
    height: 200px;
    font-size: 18px;
    color: #999;
    background: #000;
  }

  .shopee-header__container { 
    width: 100px;
    height: 100px;
    background: red;
  }
</style>


