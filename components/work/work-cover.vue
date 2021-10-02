<template>
  <div class="cover">
    <img :src="cover.lazy" :data-src="cover.origin" alt="" class="lazy-img" />
  </div>
</template>

<script>
export default {
  props: {
    cover: {
      type: Object,
      default: null,
    },
    observer: {},
  },
  mounted() {
    this.observer.observe(this.$el.firstChild);
  },
};
</script>

<style lang="scss" scoped>
.cover {
  position: relative;
  width: 100%;
  overflow: hidden;

  & img {
    width: 100%;
    object-fit: cover;
    transition: 0.4s filter cubic-bezier(0.42, 0, 0.58, 1);

    &.lazy-img {
      // transform: scale3d(1.02, 1.02, 1);
      filter: blur(10px);
    }
  }
}
</style>
