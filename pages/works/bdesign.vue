<template>
  <div ref="work" class="Work">
    <work-cover :cover="cover" :observer="imgObserver"></work-cover>
    <div class="content">
      <!-- eslint-disable vue/no-v-html -->
      <work-brief v-bind="brief"></work-brief>

      <work-video :video="video"></work-video>

      <work-info :info="info01"></work-info>

      <div class="thanks">
        <h3>Special Thanks</h3>
        <div class="thanks-content">
          <div class="names" v-html="brief.thanks.names"></div>
          <div class="slash">/</div>
          <div class="roles" v-html="brief.thanks.roles"></div>
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

      <work-info :info="info02"></work-info>

      <work-image :img="poster" :observer="imgObserver"></work-image>

      <div class="logo">
        <img :src="logo" alt="" />
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
import WorkCover from '~/components/work/work-cover.vue';
import WorkImage from '~/components/work/work-image.vue';
import WorkNext from '~/components/work/work-next.vue';
import WorkVideo from '~/components/work/work-video.vue';
export default {
  components: {
    WorkBrief,
    NaviFooter,
    WorkImage,
    WorkNext,
    WorkCover,
    WorkVideo,
  },
  data() {
    return {
      cover: {
        lazy: '/image/bdesign/cover-lazy.png',
        origin: '/image/bdesign/cover.png',
      },
      logo: '/image/bdesign/logo.gif',
      video: {
        id: '639550629',
        ratio: '2.35-1',
      },
      next: {
        id: '02',
        project: 'BIV Builder',
        link: 'biv',
      },
      brief: {
        title: 'B-Design',
        company: 'Alibaba Cloud',
        year: '2020 - 2021',
        number: 'n° 01',
        details:
          'B-Design is a design system dedicated to enterprise products, and it helps enterprises rapidly build beautiful yet simple digital experience. <br /><br /> The goal of B-Design is leveraging technology and design to create pleasant and comfortable user experience. Good design adds value to product and service, and is becoming the core competence of business " Good function " is the cornerstone, we still need " good design " to accomplish " good business ".',
        role: 'Visual Design <br />Motion Graphics <br /> 3D Rendering',
        thanks: {
          names: 'Qiaoqiao Tang <br />Genle Zhu <br />Ruomu Liu',
          roles: 'Sketches & Concept <br />3D Design <br />Animation',
        },
      },
      info01:
        'I created a concept film for B-Design and a series of 3D concept style frames combining its components and UI.',
      info02:
        'B-Design emphasizes simplicity, professional, and inclusive. Based on this concept, we created a set of abstract graphic posters.',
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
      ],
      poster: {
        id: '08',
        lazy: '/image/bdesign/posters-lazy.png',
        origin: '/image/bdesign/posters.png',
      },
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

    .thanks {
      position: relative;
      width: 50%;
      left: 50%;
      margin: 160px 0;

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
        font-family: $font1;

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

@media screen and ($breakPoint1) {
  .Work {
    .content {
      .thanks {
        h3 {
          font-family: $font2;
          margin-bottom: 60px;
        }
        &-content {
          margin-left: 60px;
          font-size: 20px;
        }
      }
    }
  }
}
@media screen and ($breakPoint2) {
  .Work {
    .content {
      .thanks {
        &-content {
          div {
            display: inline-block;
            margin-right: 40px;
          }

          .slash {
            position: relative;
            top: -20px;
            left: -10px;
            font-family: $font4;
            font-size: 60px;
          }
        }
      }
    }
  }
}
@media screen and ($breakPoint3) {
  .Work {
    .content {
      .thanks {
        margin-top: 60px;

        h3 {
          font-family: $font2;
          margin-bottom: 60px;
        }
        &-content {
          margin-left: 60px;
          font-size: 16px;
          line-height: 20px;

          div {
            display: inline-block;
            margin-right: 45px;
          }

          .slash {
            position: relative;
            top: -10px;
            font-family: $font4;
            font-size: 60px;
          }
        }
      }
    }
  }
}
@media screen and ($breakPoint4) {
  .Work {
    padding-top: 120px;

    .content {
      .thanks {
        width: 60%;
        left: 40%;
        &-content {
          margin-left: 40px;

          div {
            margin-right: 30px;
          }
        }
      }
    }
  }
}
@media screen and ($breakPoint5) {
  .Work {
    .content {
      width: 95%;

      .thanks {
        width: 100%;
        left: 0;
        margin: 60px 0;
        &-content {
          margin-left: 40px;

          div {
            margin-right: 40px;
          }

          .slash {
            display: inline-block;
            margin-right: 60px;
            left: 6px;
          }
        }
      }
    }
  }
}
@media screen and ($breakPoint6) {
  .Work {
    padding-top: 100px;
    .content {
      .thanks {
        width: 100%;
        left: 0;
        margin: 40px 0;
        h3 {
          margin-bottom: 40px;
        }
        &-content {
          div {
            margin-right: 20px;
          }

          .roles {
            margin-right: 0px;
          }

          .slash {
            font-size: 40px;
            left: -20px;
            margin-right: 0px;
          }
        }
      }
    }
  }
}
</style>
