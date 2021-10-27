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
  width: 98%;
  height: auto;
  top: -80px;
  margin: 0 auto 200px auto;
  //margin-top: 150px;
  @include grid-8;
  text-transform: uppercase;

  .title {
    grid-column: 1/3;
    font-family: $font2;
    line-height: 48px;
    height: auto;
    font-size: 42px;
  }
  .intro {
    position: absolute;
    left: 50%;
    top: -10px;
    margin-top: 12px;
    transform: translate3d(-50%, 0, 0);
    text-align: center;
    color: $grey-d;
    font-family: $font1;
    font-size: 16px;
    line-height: 24px;
  }
  .scroll-down {
    grid-column: -2;
    align-self: center;
    justify-self: end;
    path {
      fill: $text;
    }
  }
}

@media screen and ($breakPoint3) {
  .divider {
    .title {
      line-height: 48px;
      font-size: 36px;
    }
    .intro {
      top: -4px;
      margin-top: 12px;
      font-size: 14px;
      line-height: 18px;
    }
    .scroll-down {
      transform: scale3d(0.9, 0.9, 0.9);
    }
  }
}
@media screen and ($breakPoint4) {
  .divider {
    margin-bottom: 120px;
  }
}
@media screen and ($breakPoint5) {
  .divider {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    top: -160px;
    width: 100%;
    height: 140px;

    .title {
      line-height: 36px;
      font-size: 28px;
      margin-bottom: 20px;
    }
    .intro {
      position: relative;
      top: -4px;
      left: 0;
      transform: none;
      margin-top: 0;
    }
    .scroll-down {
      position: relative;
      top: 0px;
      transform: scale3d(0.8, 0.8, 0.8);
    }
  }
}
@media screen and ($breakPoint6) {
  .divider {
    margin-bottom: 0;

    .title {
      line-height: 28px;
      font-size: 24px;
    }
    .intro {
      margin-top: 0px;
      font-size: 12px;
      line-height: 16px;
    }
    .scroll-down {
      position: relative;
      top: 12px;
    }
  }
}
</style>
