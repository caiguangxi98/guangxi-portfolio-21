<template>
  <div class="Root">
    <main ref="main" :class="{ bgDark: isDarkMood }">
      <Nuxt />
    </main>
    <navi></navi>
  </div>
</template>

<script>
export default {
  computed: {
    isDarkMood() {
      return this.$store.state.darkMood;
    },
  },
  updated() {
    if (this.isDarkMood) {
      document.body.style.background = '#18171a';
    } else {
      document.body.style.background = '#e7ecf2';
    }
  },
};
</script>

<style lang="scss" scoped>
.Root {
  position: relative;
  width: 100%;
}

main {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  //background: $white;
  transition: background 0.25s ease;
}

.bgDark {
  background: $blk;
}
</style>
