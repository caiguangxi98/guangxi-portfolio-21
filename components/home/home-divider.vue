<template>
  <div class="divider">
    <div class="title">works</div>
    <div class="para intro">
      A collection of recent works <br />
      by Guangxi Cai
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
  //margin-top: 150px;
  @include grid-8;

  .title {
    grid-column: 1/3;
    text-transform: uppercase;
    font-family: $font2;
    line-height: 48px;
    height: auto;
    font-size: 42px;
  }

  .para {
    color: $grey-d;
    font-family: $font1;
    margin-top: 12px;
    font-size: 16px;
    line-height: 24px;
    text-transform: uppercase;
  }
  .intro {
    position: absolute;
    left: 50%;
    top: -10px;
    transform: translate3d(-50%, 0, 0);
    text-align: center;
  }
  .scroll-down {
    grid-column: -2;
    align-self: center;
    justify-self: end;
    path {
      fill: #edfaff;
    }
  }
}
</style>
