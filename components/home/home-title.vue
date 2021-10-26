<template>
  <div class="title">
    <div class="title-main">
      <div class="line l1">guangxi cai</div>
      <div class="line l2">digital designer</div>
      <div class="line l3">and creative</div>
      <div class="line l4">technologist</div>
    </div>

    <div class="slash">/</div>

    <div class="year">
      <div class="char start">
        <span class="t1">19</span>
        <span class="t2">⊘</span>
      </div>
      <div class="char name-eng">
        <span class="t1">guangxi</span>
        <span class="t2">cai</span>
      </div>
      <div class="char end"><span>21 -</span></div>
      <div class="char name-kor">
        <span class="t1">채</span>
        <span class="t2">광석</span>
      </div>
    </div>

    <div class="deco">
      <div class="word char visual"><span>visual</span></div>
      <div class="word char motion"><span>motion</span></div>
      <div class="word char coding"><span>code</span></div>
      <div class="word char threed"><span>3D</span></div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap/all';
export default {
  data() {
    return {
      tl: '',
    };
  },
  computed: {
    isDarkMood() {
      return this.$store.state.darkMood;
    },
  },
  mounted() {
    const yOffset = window.innerWidth / 10 + 50;

    this.tl = gsap.timeline();
    this.tl.from('.char span', 1, {
      y: yOffset,
      ease: 'power4.out',
      delay: 0.2,
      skewY: 10,
      stagger: {
        amount: 0.4,
      },
    });
  },
  beforeDestroy() {
    this.tl.kill();
    this.tl = null;
  },
  methods: {
    changeColorMood() {
      this.$store.commit('changeColorMood');
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  position: relative;
  top: 20px;
  left: 0;
  width: 98%;
  height: 100vh;
  margin: 0 auto;
  font-family: $font2;
  text-transform: uppercase;
  @include grid-8;

  .char {
    overflow: hidden;
    & span {
      display: inline-block;
    }
  }

  .title-main {
    position: absolute;
    left: 0;
    top: -8px;
    font-size: 11.2vw;
    color: $grey-d;
    opacity: 0;
  }

  .line {
    position: relative;
  }

  .l2,
  .l3,
  .l4 {
    margin-top: -8px;
  }

  .l3 {
    left: 20.4vw;
  }

  .slash {
    position: absolute;
    left: 50%;
    top: 50%;
    font-family: $font4;
    font-size: 240px;
    color: $blue;
    transform: translate3d(-50%, -50%, 0);
  }

  .year {
    font-size: 12px;
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    font-family: $font4;
    transform: translate3d(0, -50%, 0);
    @include grid-8;

    .start {
      grid-column: 1;
      .t2 {
        margin-left: 20px;
      }
    }

    .end {
      grid-column: 7;
    }

    .name-eng {
      font-family: $font2;
      .t2 {
        margin-left: 50px;
      }
    }
    .name-kor {
      font-family: $font5;
      justify-self: end;
      .t2 {
        margin-left: 80px;
      }
    }
  }

  .deco {
    font-size: 12px;
    grid-column: -3;
    position: relative;

    .word {
      position: absolute;
    }

    .visual {
      top: 25px;
    }

    .motion {
      top: 50%;
      transform: translate3d(0, -40px, 0);
    }

    .coding {
      bottom: 18%;
    }

    .threed {
      bottom: 10%;
    }
  }
}

@media screen and ($breakPoint3) {
  .title {
    @include grid-6;

    .year {
      width: 100%;
      @include grid-6;

      .start {
        grid-column: 1;
        .t2 {
          margin-left: 20px;
        }
      }

      .end {
        grid-column: 5;
      }
    }
    .deco {
      .threed {
        bottom: calc(10% - 5px);
      }
    }
  }
}
@media screen and ($breakPoint4) {
  .title {
    .year {
      .name-eng {
        font-family: $font2;
        .t2 {
          margin-left: 20px;
        }
      }
      .name-kor {
        font-family: $font5;
        justify-self: end;
        .t2 {
          margin-left: 50px;
        }
      }
    }
  }
}
@media screen and ($breakPoint5) {
  .title {
    width: 95%;
    .year {
      @include grid-4;
      .name-eng {
        grid-column: 2;
        position: relative;
        left: -40px;
        .t2 {
          margin-left: 20px;
        }
      }
      .end {
        grid-column: 3;
        justify-self: end;
      }
      .name-kor {
        grid-column: 4;
        justify-self: end;
        .t2 {
          margin-left: 50px;
        }
      }
    }
    .deco {
      display: none;
    }
  }
}
@media screen and ($breakPoint5) {
  .title {
    .slash {
      top: 45%;
    }
    .year {
      top: 45%;
      display: flex;
      justify-content: space-between;
      .start {
        display: none;
      }
      .name-eng {
        position: relative;
        left: 0;
        .t2 {
          margin-left: 40px;
        }
      }
      .end {
        display: none;
      }
      .name-kor {
        justify-self: end;
        .t2 {
          margin-left: 80px;
        }
      }
    }
  }
}
</style>
