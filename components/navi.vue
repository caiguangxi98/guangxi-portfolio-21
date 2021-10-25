<template>
  <div class="Navi">
    <div class="navi-top">
      <h3 class="navi-works">
        <NuxtLink to="/">Works</NuxtLink>
      </h3>
      <h3 class="navi-about">
        <NuxtLink to="/about">About</NuxtLink>
      </h3>
    </div>
    <div ref="naviHomeCirc" class="navi-home hide" @click="goHome"></div>
  </div>
</template>

<script>
export default {
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
  .navi-top {
    position: fixed;
    top: 40px;
    right: 1%;

    .navi-works,
    .navi-about {
      color: $text;
      font-family: $font1;
      display: inline-block;
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
  a.nuxt-link-exact-active {
    color: $grey-d;
  }
  a:hover {
    color: $grey-d;
  }
  a {
    transition: color 0.2s ease;
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
    .navi-top {
      right: 2.5%;
    }
  }
}
</style>
