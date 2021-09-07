<template>
  <div class="title">
    <div class="line line-01">
      <h1 class="char guang"><span>guang</span></h1>
      <h1 class="char xi"><span>xi</span></h1>
    </div>
    <div class="line line-02">
      <h1 class="char cai"><span>cai</span></h1>
      <h1 class="char num"><span>100%</span></h1>
    </div>
    <div class="line line-03">
      <h1 class="char digital"><span>Digital</span></h1>
      <div
        class="circ"
        :class="{ circBlue: isDarkMood }"
        @click="changeColorMood"
      ></div>
      <h1 class="char kor-01"><span>채</span></h1>
      <h1 class="char kor-02"><span>광석</span></h1>
    </div>
    <div class="line line-04">
      <h1 class="char desig"><span>desig</span></h1>
      <div class="bar"><span></span></div>
      <h1 class="char ner"><span>ner</span></h1>
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
    // console.log('mounted');

    this.tl = gsap.timeline();
    this.tl
      .from('.char span', 1, {
        y: 200,
        ease: 'power4.out',
        delay: 0.2,
        skewY: 10,
        stagger: {
          amount: 0.4,
        },
      })
      .from(
        '.circ',
        {
          scale: 0,
          opacity: 0,
          delay: 0.6,
          ease: 'Expo.easeOut',
        },
        '<'
      );
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
  font-family: $font2;
  text-transform: uppercase;
  font-size: 160px;

  .line {
    position: relative;
    width: 100%;
    height: auto;
    @include grid-8;
  }

  .char {
    overflow: hidden;
    // border: 1px solid black;
    & span {
      display: inline-block;
      //transform: translateY(-10%);
    }
  }
  .guang {
    grid-column: 1/5;
  }
  .xi {
    grid-column: 5;
  }
  .cai {
    grid-column: 3/5;
  }
  .num {
    font-family: $font4;
    position: absolute;
    right: 0;
  }

  .digital {
    grid-column: 1/5;
  }

  .circ {
    position: absolute;
    left: calc(50% - 60px);
    top: calc(50% - 60px);
    background: $orange;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    transition: background 0.2s ease;
  }
  .circBlue {
    background: $blue;
  }
  .kor-01 {
    font-family: $font5;
    font-size: 150px;
    grid-column: 6/8;
  }
  .kor-02 {
    font-family: $font5;
    font-size: 150px;
    position: absolute;
    right: 0;
  }
  .desig {
    grid-column: 2/5;
  }
  .ner {
    grid-column: 6/-1;
  }
  .bar {
    grid-column: 5;
    display: grid;
    place-items: center end;

    & span {
      display: inline-block;
      width: 42px;
      height: 16px;
      background: $text;
    }
  }
}
</style>
