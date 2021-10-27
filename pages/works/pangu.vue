<template>
  <div ref="work" class="Work">
    <work-cover :cover="cover" :observer="imgObserver"></work-cover>

    <div class="content">
      <!-- eslint-disable vue/no-v-html -->
      <work-brief v-bind="brief"></work-brief>

      <work-video :video="video"></work-video>

      <work-info :info="info01"></work-info>

      <div class="gallery">
        <work-image
          v-for="img in gallery"
          :key="img.id"
          :img="img"
          :observer="imgObserver"
        ></work-image>
      </div>

      <!--eslint-enable-->
    </div>

    <work-prev :prev="prev"></work-prev>
    <navi-footer></navi-footer>
  </div>
</template>

<script>
import NaviFooter from '~/components/navi-footer.vue';
import WorkBrief from '~/components/work/work-brief.vue';
import WorkImage from '~/components/work/work-image.vue';
import WorkPrev from '~/components/work/work-prev.vue';
export default {
  components: { WorkBrief, NaviFooter, WorkImage, WorkPrev },
  data() {
    return {
      cover: {
        lazy: '/image/pangu/cover-lazy.png',
        origin: '/image/pangu/cover.png',
      },
      prev: {
        id: '05',
        project: 'S Awards',
        link: 'sawards',
      },
      video: {
        id: '639570767',
        ratio: '16-9',
      },
      brief: {
        title: 'PANGU',
        company: 'Personal Project',
        year: '2020',
        number: 'n° 06',
        details:
          "PANGU is a new media interactive installation, which uses graphic algorithms to generate poetic digital landscapes through the camera's perception of the environment. <br><br> PANGU constructs an interactive scene, and the viewer's every move in the space where the installation is located will affect the changes in the generative visual effects. Experimental audio-visual can immerse the audience and make them feel the harmonious beauty coexisting with the machine consciousness.",
        role: 'Visual Design <br>Interactive Design <br>Creative Coding',
      },
      info01:
        'I created real-time rendering GPGPU Particles to enhance its visual tensions. Noise and post-process were run-time shaded with GLSL. ',
      gallery: [
        {
          id: '01',
          lazy: '/image/pangu/01-lazy.png',
          origin: '/image/pangu/01.png',
        },
        {
          id: '02',
          lazy: '/image/pangu/02-lazy.png',
          origin: '/image/pangu/02.png',
        },
        {
          id: '03',
          lazy: '/image/pangu/03-lazy.png',
          origin: '/image/pangu/03.png',
        },
        {
          id: '04',
          lazy: '/image/pangu/04-lazy.png',
          origin: '/image/pangu/04.png',
        },
      ],
      imgObserver: null,
    };
  },

  created() {
    this.imgObserver = new IntersectionObserver(this.loadImg, {
      root: null,
      threshold: 0,
      rootMargin: '-20px',
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

  .content {
    position: relative;
    width: 98%;
    height: auto;
    margin: 0 auto;

    .gallery {
      position: relative;
      width: 100%;
    }
  }
}

@media screen and ($breakPoint4) {
  .Work {
    padding-top: 120px;
  }
}
@media screen and ($breakPoint5) {
  .Work {
    .content {
      width: 95%;
    }
  }
}
@media screen and ($breakPoint6) {
  .Work {
    padding-top: 100px;
  }
}
</style>
