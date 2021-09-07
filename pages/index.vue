<template>
  <div class="Home">
    <home-title></home-title>
    <home-divider></home-divider>
    <home-works></home-works>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeDivider from '~/components/home/home-divider.vue';
import HomeFooter from '~/components/home/home-footer.vue';
import HomeTitle from '~/components/home/home-title.vue';
import HomeWorks from '~/components/home/home-works.vue';
export default {
  components: { HomeTitle, HomeDivider, HomeWorks, HomeFooter },
};
</script>

<style lang="scss" scoped>
.Home {
  position: relative;
  // top: -100vh; // TODO ???
  left: 0;
  width: 98%;
  height: 1px;
  margin: 0px auto;
}
</style>
