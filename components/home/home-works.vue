<template>
  <div class="home-works">
    <home-work v-bind="bdesign"></home-work>
    <home-work v-bind="biv"></home-work>
    <home-work v-bind="real3d"></home-work>
    <home-work v-bind="nslab"></home-work>
    <home-work v-bind="sawards"></home-work>
    <home-work v-bind="pangu"></home-work>
  </div>
</template>

<script>
import HomeWork from '~/components/home/home-work.vue';

export default {
  components: { HomeWork },
  data() {
    return {
      bdesign: {
        id: '01',
        title: 'B-Design',
        year: '2020 - 2021',
        img: '/image/bdesign/cover.png',
        link: 'bdesign',
        width: 68,
        float: 'left',
      },
      biv: {
        id: '02',
        title: 'BIV Builder',
        year: '2021',
        img: '/image/biv/cover.png',
        link: 'biv',
        width: 50,
        float: 'right',
      },
      real3d: {
        id: '03',
        title: 'Real 3D',
        year: '2021',
        img: '/image/real3d/cover.gif',
        link: 'real3d',
        width: 50,
        float: 'mid',
      },
      nslab: {
        id: '04',
        title: 'Neural-Symbolic Lab',
        year: '2021',
        img: '/image/nslab/cover.png',
        link: 'nslab',
        width: 68,
        float: 'left',
      },
      sawards: {
        id: '05',
        title: 'S Awards',
        year: '2021',
        img: '/image/sawards/cover.gif',
        link: 'sawards',
        width: 50,
        float: 'right',
      },
      pangu: {
        id: '06',
        title: 'PANGU',
        year: '2020',
        img: '/image/pangu/cover.png',
        link: 'pangu',
        width: 50,
        float: 'mid',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.home-works {
  position: relative;
  width: 98%;
  margin: 0 auto;
  top: -60px;
}
</style>
