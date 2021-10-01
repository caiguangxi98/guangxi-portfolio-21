<template>
  <div class="divider">
    <h2 class="title">works</h2>
    <h4 class="para intro">
      A collection of recent works <br />
      by Guangxi Cai
    </h4>
    <h4 class="para current">
      Currently @ <a href="https://aliyun.com/">Alibaba Cloud</a>
    </h4>
    <div class="year">
      <h4 class="year-01">19</h4>
      <h4 class="year-02">-21</h4>
    </div>
    <div class="scroll-down">
      <svg width="30" height="33" fill="none">
        <path
          d="M12.737 0h4.495v24.574l9.59-9.59L30 18.164 15.166 32.996 15 32.831l-.166.166L0 18.163l3.179-3.178 9.558 9.558V0Z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap/all';
export default {
  data() {
    return {};
  },
  mounted() {
    gsap.from('.divider', {
      opacity: 0,
      ease: 'power4.out',
      delay: 1.0,
    });
  },
};
</script>

<style lang="scss" scoped>
.divider {
  position: relative;
  width: 100%;
  height: auto;
  margin-top: 150px;
  @include grid-8;

  .title {
    grid-column: 1/3;
    text-transform: uppercase;
    font-family: $font2;
    line-height: 60px;
    height: auto;
  }

  .para,
  .year {
    color: $grey-d;
    font-family: $font1;
    margin-top: 12px;
  }
  .intro {
    grid-column: 3/5;
  }
  .current {
    grid-column: 5/7;
    & a {
      color: $grey-d;
    }
  }
  .year {
    grid-column: 7;
    .year-01,
    .year-02 {
      display: inline-block;
    }
    .year-01 {
      margin-right: 72px;
    }
  }
  .scroll-down {
    align-self: center;
    justify-self: end;
    path {
      fill: #edfaff;
    }
  }
}
</style>
