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
    <div class="navi-home" @click="goHome"></div>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped>
.Navi {
  z-index: 10;
  mix-blend-mode: difference;
  .navi-top {
    position: fixed;
    top: 40px;
    right: 20px;

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
    width: 20px;
    height: 20px;
    // border: 1px solid $grey-d;
    border-radius: 50%;
    transition: background 0.2s ease;

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
</style>
