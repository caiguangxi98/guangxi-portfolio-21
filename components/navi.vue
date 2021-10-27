<template>
  <div class="Navi">
    <h3 class="navi-name">
      <div class="char" @click="goHome"><span>GUANGXI CAI</span></div>
    </h3>
    <div class="navi-top">
      <h3 class="navi-works">
        <NuxtLink class="char" to="/"><span>Works</span></NuxtLink>
      </h3>
      <h3 class="navi-about">
        <NuxtLink class="char" to="/about"><span>About</span></NuxtLink>
      </h3>
    </div>
    <div ref="naviHomeCirc" class="navi-home hide" @click="goHome"></div>
  </div>
</template>

<script>
import { gsap } from 'gsap/all';

export default {
  data() {
    return {
      tl: null,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.showNaviHome);
  },
  methods: {
    goHome() {
      this.$router.push('/');
    },
    showNaviHome() {
      const naviHomeCirc = this.$refs.naviHomeCirc;
      if (!naviHomeCirc) return;
      if (window.pageYOffset > 200) naviHomeCirc.classList.remove('hide');
      if (window.pageYOffset < 200) naviHomeCirc.classList.add('hide');
    },
    naviSlideIn() {
      const yOffset = window.innerWidth / 10 + 50;
      this.tl = gsap.timeline();
      this.tl.from('.char span', 0.4, {
        y: yOffset,
        ease: 'power4.out',
        skewY: 10,
        stagger: {
          amount: 0.12,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.Navi {
  z-index: 10;
  mix-blend-mode: difference;
  .hide {
    opacity: 0;
    pointer-events: none;
  }
  .char {
    overflow: hidden;
    & span {
      display: inline-block;
    }
  }
  .navi-name {
    position: fixed;
    top: 40px;
    left: 1%;
    font-family: $font2;
    color: $white;
    overflow: hidden;

    &:hover {
      cursor: pointer;
    }
  }
  .navi-top {
    position: fixed;
    top: 40px;
    right: 1%;
    overflow: hidden;

    .navi-works,
    .navi-about {
      color: $text;
      font-family: $font2;
      display: inline-block;
      line-height: 24px;
    }
    .navi-works {
      margin-right: 30px;
    }
  }
  .navi-home {
    position: fixed;
    bottom: 35px;
    right: 1%;
    background: $white;
    width: 14px;
    height: 14px;
    // border: 1px solid $grey-d;
    border-radius: 50%;
    // opacity: 0;
    transition: background 0.2s ease, opacity 0.25s ease;

    &:hover {
      cursor: pointer;
      background: $grey-d;
    }
  }
  // a.nuxt-link-exact-active {
  //   color: $grey-d;
  // }
  a:hover {
    color: $grey-d;
  }
  a {
    transition: color 0.25s ease;
    text-decoration: none;
    color: $text;
  }
}

@media screen and ($breakPoint4) {
  .navi-home {
    display: none;
  }
}
@media screen and ($breakPoint5) {
  .Navi {
    .navi-name {
      left: 2.5%;
    }
    .navi-top {
      right: 2.5%;
    }
  }
}
</style>
