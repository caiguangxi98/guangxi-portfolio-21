<template>
  <div ref="work" class="Work">
    <work-cover :cover="cover" :observer="imgObserver"></work-cover>

    <div class="content">
      <!-- eslint-disable vue/no-v-html -->
      <work-brief v-bind="brief"></work-brief>

      <work-video :video="video"></work-video>

      <work-info :info="info01"></work-info>

      <work-image :img="styleframes" :observer="imgObserver"></work-image>

      <work-info :info="info02"></work-info>

      <div class="gallery">
        <work-image
          v-for="img in gallery"
          :key="img.id"
          :img="img"
          :observer="imgObserver"
        ></work-image>
      </div>

      <work-info :info="info03"></work-info>

      <div class="gallery">
        <work-image
          v-for="img in posters"
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
        lazy: '/image/sawards/cover-lazy.png',
        origin: '/image/sawards/cover.gif',
      },
      next: {
        id: '06',
        project: 'PANGU',
        link: 'pangu',
      },
      video: {
        id: '639567228',
        ratio: '16-9',
      },
      brief: {
        title: 'S Awards',
        company: 'Alibaba Cloud',
        year: '2021',
        number: 'n° 05',
        details:
          'S Awards is a content creation award created by Alibaba Design Marketing, debuted in 2021. <br><br> The award aims to reward teams and individuals who create high quality contents, and engage more people to devote themselves to content creation, and voice themselves out. ',
        role: 'Visual Design <br />Motion Graphics <br /> 3D Rendering',
      },
      info01: 'I created a concept film combining the shape of the trophy. ',
      info02:
        'The S in the name of the award is a semi-open proposition, which can generate infinite associations. I expanded it to Spread, Spark, Spine and created the key visual of the award.',
      info03:
        'The scope of the award includes 43 teams in the ecosystem of Alibaba Design and more than 300 published articles in the past years. <br><br> We took this opportunity to create a series of data visualization posters that were given as gifts to distinguished design teams and individual designers.',
      styleframes: {
        id: '01',
        lazy: '/image/sawards/01-lazy.png',
        origin: '/image/sawards/01.png',
      },
      gallery: [
        {
          id: '02',
          lazy: '/image/sawards/02-lazy.png',
          origin: '/image/sawards/02.png',
        },
        {
          id: '03',
          lazy: '/image/sawards/03-lazy.png',
          origin: '/image/sawards/03.png',
        },
        {
          id: '04',
          lazy: '/image/sawards/04-lazy.png',
          origin: '/image/sawards/04.png',
        },
        {
          id: '05',
          lazy: '/image/sawards/05-lazy.png',
          origin: '/image/sawards/05.png',
        },
      ],
      posters: [
        {
          id: '06',
          lazy: '/image/sawards/06-lazy.png',
          origin: '/image/sawards/06.png',
        },
        {
          id: '07',
          lazy: '/image/sawards/07-lazy.png',
          origin: '/image/sawards/07.png',
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

  .cover {
    position: relative;
    width: 100%;

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
