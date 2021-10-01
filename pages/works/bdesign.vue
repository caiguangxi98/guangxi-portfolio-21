<template>
  <div class="Work">
    <div class="cover">
      <img :src="cover" alt="" />
    </div>
    <div class="content">
      <!-- eslint-disable vue/no-v-html -->
      <work-brief v-bind="brief"></work-brief>

      <div class="work-video">video</div>

      <div class="info info-01">
        <p>{{ brief.info01 }}</p>
        <div class="thanks">
          <h3>Special Thanks</h3>
          <div class="thanks-content">
            <div class="names" v-html="brief.thanks.names"></div>
            <div class="slash">/</div>
            <div class="roles" v-html="brief.thanks.roles"></div>
          </div>
        </div>
      </div>

      <div class="gallery">
        <work-image
          v-for="img in gallery01"
          :key="img.id"
          :img="img"
          :observer="imgObserver"
        ></work-image>
      </div>

      <div class="info info-02">
        <p>{{ brief.info02 }}</p>
      </div>

      <div class="logo">
        <img :src="logo" alt="" />
      </div>
      <!--eslint-enable-->
    </div>
    <div class="next"></div>
    <navi-footer></navi-footer>
  </div>
</template>

<script>
import NaviFooter from '~/components/navi-footer.vue';
import workBrief from '~/components/work/work-brief.vue';
import WorkImage from '~/components/work/work-image.vue';
export default {
  components: { workBrief, NaviFooter, WorkImage },
  data() {
    return {
      cover: '/image/bdesign/cover.png',
      logo: '/image/bdesign/logo.gif',
      brief: {
        title: 'B-Design',
        company: 'Alibaba Cloud',
        year: '2020 - 2021',
        number: 'n° 01',
        details:
          'B-Design is a design system dedicated to enterprise products, and it helps enterprises rapidly build beautiful yet simple digital experience. <br /><br /> The goal of B-Design is leveraging technology and design to create pleasant and comfortable user experience. Good design adds value to product and service, and is becoming the core competence of business " Good function " is the cornerstone, we still need " good design " to accomplish " good business ".',
        role: 'Visual Design <br />Motion Graphics <br /> 3D Rendering',
        info01:
          'I created a concept film for B-Design and a series of 3D concept style frames combining its components and UI.',
        info02:
          'B-Design emphasizes simplicity, professional, and inclusive. Based on this concept, we created a set of abstract graphic posters.',
        thanks: {
          names: 'Qiaoqiao Tang <br />Genle Zhu <br />Ruomu Liu',
          roles: 'Sketches & Concept <br />3D Design <br />Animation',
        },
      },
      gallery01: [
        {
          id: '00',
          lazy: '/image/bdesign/frames-lazy.png',
          origin: '/image/bdesign/frames.png',
        },
        {
          id: '01',
          lazy: '/image/bdesign/01-lazy.png',
          origin: '/image/bdesign/01.png',
        },
        {
          id: '02',
          lazy: '/image/bdesign/02-lazy.png',
          origin: '/image/bdesign/02.png',
        },
        {
          id: '03',
          lazy: '/image/bdesign/03-lazy.png',
          origin: '/image/bdesign/03.png',
        },
        {
          id: '04',
          lazy: '/image/bdesign/04-lazy.png',
          origin: '/image/bdesign/04.png',
        },
        {
          id: '05',
          lazy: '/image/bdesign/05-lazy.png',
          origin: '/image/bdesign/05.png',
        },
        {
          id: '06',
          lazy: '/image/bdesign/06-lazy.png',
          origin: '/image/bdesign/06.png',
        },
        {
          id: '07',
          lazy: '/image/bdesign/07-lazy.png',
          origin: '/image/bdesign/07.png',
        },
        {
          id: '08',
          lazy: '/image/bdesign/posters-lazy.png',
          origin: '/image/bdesign/posters.png',
        },
      ],
      imgObserver: null,
    };
  },

  created() {
    this.imgObserver = new IntersectionObserver(this.loadImg, {
      root: null,
      threshold: 0,
      rootMargin: '-120px',
    });
  },
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

  .cover {
    position: relative;
    width: 100%;
    margin-top: 140px;

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
    }

    .info-01,
    .info-02 {
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

      .thanks {
        position: relative;
        width: 100%;
        height: auto;
        margin-top: 80px;

        h3 {
          font-family: $font2;
          margin-bottom: 80px;
        }

        &-content {
          margin-left: 60px;
          font-size: 25px;
          letter-spacing: 0.2px;
          line-height: 30px;
          color: $grey-l;

          div {
            display: inline-block;
            margin-right: 80px;
          }

          .slash {
            position: relative;
            top: -20px;
            font-family: $font4;
            font-size: 60px;
          }
        }
      }
    }

    .gallery,
    .logo {
      position: relative;
      width: 100%;
    }

    .logo img {
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>
