<template>
  <div class="Footer">
    <div class="footer-top">
      <h1 class="navi-works">
        <NuxtLink to="/">Works</NuxtLink>
      </h1>
      <div class="slash">/</div>
      <h1 class="navi-about">
        <NuxtLink to="/about">About</NuxtLink>
      </h1>
    </div>
    <div class="footer-bottom">
      <h4 class="author">
        Dev & Design by <a href="mailto:caiguangxi98@gmail.com">Guangxi Cai</a>
      </h4>
      <h4 class="copy">All Rights Reserved guangxi cai 2021®</h4>
    </div>
    <div class="footer-line">
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.Footer {
  position: relative;
  width: 98%;
  height: auto;
  margin: 320px auto 0 auto;
  .footer-top {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 80px;
    & h1 {
      display: inline-block;
      text-transform: uppercase;
      & a {
        text-decoration: none;
        color: $text;
        font-family: $font2;
      }
    }
    .slash {
      font-family: $font4;
      font-size: 140px;
    }
  }
  .footer-bottom {
    @include grid-8;
    color: $grey-d;
    font-family: $font1;
    margin-bottom: 14px;
    text-transform: uppercase;
    .author {
      grid-column: 1/3;
      a {
        font-family: $font2;
        color: $white;
      }
    }
    .copy {
      position: absolute;
      left: 50%;
      transform: translate3d(-50%, 0, 0);
    }
  }
  .footer-line {
    width: 100%;
    height: 20px;
    .line {
      width: 100%;
      height: 1px;
      background: $grey-d;
    }
  }
}
</style>
