<template>
  <div class="About">
    <about-background></about-background>
    <div class="content">
      <div class="info">
        <h2 class="title">INFO</h2>
        <div class="brief">
          <p class="p1">
            Guangxi Cai is a digital designer and <br />
            creative technologist who specializes in <br />
            visual and interaction design.
          </p>
          <p class="p2">
            He's currently working at Alibaba Cloud, <br />
            Hangzhou, China.
          </p>
        </div>
      </div>
      <div class="contact">
        <h2 class="title">CONTACT</h2>
        <div class="social">
          <div class="email">
            <h3>Email</h3>
            <h3 class="s">
              <a href="mailto:caiguangxi98@gmail.com">caiguangxi98@gmail.com</a>
            </h3>
          </div>
          <div class="insta">
            <h3>Instagram</h3>
            <h3 class="s">
              <a href="">guangxicai</a>
            </h3>
          </div>
          <div class="linkedin">
            <h3>LinkedIn</h3>
            <h3 class="s">
              <a
                href="https://www.linkedin.com/in/guangxi-cai-418818138/"
                target="_blank"
                >Guangxi Cai</a
              >
            </h3>
          </div>
        </div>
      </div>
    </div>
    <navi-footer :is-fixed="true"></navi-footer>
    <div ref="naviHomeCirc" class="navi-home" @click="goHome"></div>
  </div>
</template>

<script>
import AboutBackground from '~/components/about/about-background.vue';
import NaviFooter from '~/components/navi-footer.vue';
export default {
  components: { NaviFooter, AboutBackground },
  data() {
    return {};
  },
  methods: {
    goHome() {
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped>
.About {
  position: relative;
  left: 0;
  top: 0;
  width: 100%;

  margin: 0;
  height: 100%;
  overflow: hidden;

  // height: 100vh;
  .content {
    width: 98%;
    margin: 180px auto 0 auto;
  }
  .info {
    position: relative;
    width: 100%;
    height: auto;
    @include grid-8;

    .title {
      grid-column: 1/2;
      font-family: $font2;
    }

    .brief {
      grid-column: 3/-3;
      p {
        font-family: $font1;
        font-size: 32px;
        line-height: 40px;
      }
      .p1 {
        margin-bottom: 45px;
      }
    }
  }

  .contact {
    position: relative;
    width: 100%;
    height: auto;
    margin-top: 140px;

    .title {
      font-family: $font2;
    }

    .social {
      margin-top: 100px;

      .email,
      .insta,
      .linkedin {
        @include grid-8;
        margin-bottom: 20px;

        .s {
          grid-column: 3/-1;
          font-family: $font2;
        }
      }
    }
  }
  .navi-home {
    position: fixed;
    bottom: 35px;
    right: 1%;
    background: $white;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    transition: background 0.2s ease, opacity 0.25s ease;

    &:hover {
      cursor: pointer;
      background: $grey-d;
    }
  }
}

@media screen and ($breakPoint0) {
  .About {
    .info {
      .title {
        font-size: 30px;
      }
      .brief {
        p {
          font-size: 20px;
          line-height: 26px;
        }
      }
    }
    .contact {
      margin-top: 120px;

      .title {
        font-size: 30px;
      }

      .social {
        margin-top: 80px;
        & h3 {
          font-size: 20px;
        }
        .email,
        .insta,
        .linkedin {
          margin-bottom: 12px;
        }
      }
    }
  }
}

@media screen and ($breakPoint4) {
  .About {
    .info {
      @include grid-4;
      .title {
        font-size: 24px;
      }
      .brief {
        grid-column: 2/-2;
        p {
          font-size: 16px;
          line-height: 24px;
        }
      }
    }
    .contact {
      margin-top: 80px;

      .title {
        font-size: 24px;
      }

      .social {
        margin-top: 40px;
        & h3 {
          font-size: 16px;
        }
        .email,
        .insta,
        .linkedin {
          @include grid-4;
          margin-bottom: 8px;
          .s {
            grid-column: 2/-1;
          }
        }
      }
    }
  }
}

@media screen and ($breakPoint6) {
  .About {
    .info {
      @include grid-4;
      .title {
        font-size: 20px;
      }
      .brief {
        grid-column: 2/-1;
      }
    }
    .contact {
      margin-top: 80px;

      .title {
        font-size: 20px;
      }
    }
  }
}
</style>
