<template>
  <div class="Home">
    <home-background></home-background>
    <home-title></home-title>
    <home-divider></home-divider>
    <home-works></home-works>
    <navi-footer></navi-footer>
  </div>
</template>

<script>
import HomeBackground from '~/components/home/home-background.vue';
import HomeDivider from '~/components/home/home-divider.vue';
import HomeTitle from '~/components/home/home-title.vue';
import HomeWorks from '~/components/home/home-works.vue';
import NaviFooter from '~/components/navi-footer.vue';
export default {
  components: { HomeTitle, HomeDivider, HomeWorks, NaviFooter, HomeBackground },
};
</script>

<style lang="scss" scoped>
.Home {
  position: relative;
  left: 0;
  width: 100%;
  height: 1px;
  margin: 0px auto;
}
</style>
