<template>
  <div class="footer">
    <div class="footer-top">
      <h1 class="navi-info">
        <NuxtLink to="/info">Info</NuxtLink>
      </h1>
      <h1 class="slash">/</h1>
      <h1 class="navi-contact">
        <NuxtLink to="/contact">Contact</NuxtLink>
      </h1>
    </div>
    <div class="footer-bottom">
      <h4 class="author">Dev & Design by Guangxi Cai</h4>
      <h4 class="copy">All Rights Reserved</h4>
      <h4 class="year">2021®</h4>
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
.footer {
  position: relative;
  width: 100%;
  height: auto;
  margin-top: 480px;
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
    }
  }
  .footer-bottom {
    @include grid-8;
    color: $grey-d;
    font-family: $font1;
    margin-bottom: 14px;
    .author {
      grid-column: 1/3;
    }
    .copy {
      grid-column: 3/-2;
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
