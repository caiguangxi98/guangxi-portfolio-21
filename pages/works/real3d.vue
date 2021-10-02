<template>
  <div ref="work" class="Work">
    <work-cover :cover="cover" :observer="imgObserver"></work-cover>

    <div class="content">
      <!-- eslint-disable vue/no-v-html -->
      <work-brief v-bind="brief"></work-brief>

      <div class="work-video"></div>
      <div class="work-video"></div>
      <div class="work-video"></div>

      <div class="info info-01">
        <p>{{ brief.info01 }}</p>
      </div>

      <div class="gallery">
        <work-image
          v-for="img in gallery01"
          :key="img.id"
          :img="img"
          :observer="imgObserver"
        ></work-image>
      </div>

      <!--eslint-enable-->
    </div>

    <work-next :next="next"></work-next>
    <navi-footer></navi-footer>
  </div>
</template>

<script>
import NaviFooter from '~/components/navi-footer.vue';
import WorkBrief from '~/components/work/work-brief.vue';
import WorkImage from '~/components/work/work-image.vue';
import WorkNext from '~/components/work/work-next.vue';
export default {
  components: { WorkBrief, NaviFooter, WorkImage, WorkNext },
  data() {
    return {
      cover: {
        lazy: '/image/real3d/cover-lazy.png',
        origin: '/image/real3d/cover.gif',
      },
      next: {
        id: '04',
        project: 'Neural-Symbolic Lab',
        link: 'nslab',
      },
      brief: {
        title: 'Real 3D',
        company: 'Alibaba Cloud',
        year: '2020 - 2021',
        number: 'n° 03',
        details:
          "'Real 3D' is a 3D architecture diagram product that efficiently visualizes the alibaba cloud products in real-time. It is initiated by Alibaba Cloud Design on top of WebGL technology.",
        role: 'Visual Design <br />Motion Graphics <br /> 3D Rendering',
        info01:
          'The product is meant to offer a rapid 3D build of visualizations for Alibaba Cloud products. I created three short videos for Real 3D to illustrate its brand image.',
        thanks: {
          names: 'Qiaoqiao Tang <br />Genle Zhu <br />Ruomu Liu',
          roles: 'Sketches & Concept <br />3D Design <br />Animation',
        },
      },
      gallery01: [
        {
          id: '01',
          lazy: '/image/real3d/01-lazy.png',
          origin: '/image/real3d/01.png',
        },
        {
          id: '02',
          lazy: '/image/real3d/02-lazy.png',
          origin: '/image/real3d/02.png',
        },
        {
          id: '03',
          lazy: '/image/real3d/03-lazy.png',
          origin: '/image/real3d/03.png',
        },
        {
          id: '04',
          lazy: '/image/real3d/04-lazy.png',
          origin: '/image/real3d/04.png',
        },
      ],
      imgObserver: null,
    };
  },

  created() {
    this.imgObserver = new IntersectionObserver(this.loadImg, {
      root: null,
      threshold: 0,
      rootMargin: '-60px',
    });
  },
  mounted() {},
  beforeDestroy() {
    this.imgObserver.disconnect();
  },
  methods: {
    loadImg(entries, observer) {
      const [entry] = entries;
      // console.log(entry);

      if (!entry.isIntersecting) return;

      // Replace src with data-src
      entry.target.src = entry.target.dataset.src;

      entry.target.addEventListener('load', () => {
        entry.target.classList.remove('lazy-img');
      });

      observer.unobserve(entry.target);
    },
  },
};
</script>

<style lang="scss" scoped>
.Work {
  position: relative;
  width: 100%;
  height: auto;
  padding-top: 140px;

  .cover {
    position: relative;
    width: 100%;
    // margin-top: 140px;

    & img {
      width: 100%;
      object-fit: cover;
    }
  }

  .content {
    position: relative;
    width: 98%;
    height: auto;
    margin: 0 auto;

    .work-video {
      position: relative;
      width: 100%;
      height: 300px;
      background-color: $grey-d;
      margin-bottom: 20px;
    }

    .info-01 {
      position: relative;
      width: 50%;
      left: 50%;
      margin: 160px 0;

      p {
        margin-left: 60px;
        font-size: 25px;
        letter-spacing: 0.2px;
        line-height: 30px;
        color: $grey-l;
      }
    }

    .gallery {
      position: relative;
      width: 100%;
    }
  }
}
</style>
