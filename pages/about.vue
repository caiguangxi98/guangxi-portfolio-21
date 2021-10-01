<template>
  <div class="About">
    <div class="content">
      <div class="info">
        <h2 class="title">INFO</h2>
        <div class="brief">
          <p class="p1">
            Guangxi Cai is a digital designer and creative technologist who
            specializes in visual and interaction design.
          </p>
          <p class="p2">
            He's currently working at Alibaba Cloud, Hangzhou, China.
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
      <div class="photo"></div>
    </div>
    <navi-footer></navi-footer>
  </div>
</template>

<script>
import NaviFooter from '~/components/navi-footer.vue';
export default {
  components: { NaviFooter },
};
</script>

<style lang="scss" scoped>
.About {
  position: relative;
  left: 0;
  width: 100%;
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
        font-size: 40px;
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
    margin-top: 180px;

    .title {
      font-family: $font2;
    }

    .social {
      margin-top: 250px;

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
}
</style>
