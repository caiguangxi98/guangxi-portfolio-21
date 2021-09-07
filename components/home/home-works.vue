<template>
  <div class="home-works">
    <home-work v-bind="bdesign"></home-work>
    <home-work v-bind="biv"></home-work>
    <home-work v-bind="real3d"></home-work>
    <home-work v-bind="nslab"></home-work>
    <home-work v-bind="sawards"></home-work>
  </div>
</template>

<script>
import HomeWork from '~/components/home/home-work.vue';

export default {
  components: { HomeWork },
  data() {
    return {
      bdesign: {
        title: 'B-Design',
        year: '2020 - 2021',
        role: 'Visual Design / <br> Motion Graphics',
        img: '/image/bdesign/cover.png',
        link: '/',
      },
      biv: {
        title: 'BIV Builder',
        year: '2021',
        role: 'Visual Design / <br> Motion Graphics',
        img: '/image/biv/cover.png',
        link: '/',
      },
      real3d: {
        title: 'Real 3D',
        year: '2021',
        role: 'Visual Design / <br> Motion Graphics / <br> Interactive Design',
        img: '/image/real3d/cover.gif',
        link: '/',
      },
      nslab: {
        title: 'Neural-Symbolic <br> Lab',
        year: '2021',
        role: 'Visual Design / <br> Interactive Design / <br> Front-End Coding',
        img: '/image/nslab/cover.png',
        link: '/',
      },
      sawards: {
        title: 'Alibaba Design <br> S Awards',
        year: '2021',
        role: 'Visual Design / <br> Motion Graphics',
        img: '/image/sawards/cover.gif',
        link: '/',
      },
    };
  },
};
</script>

<style></style>
