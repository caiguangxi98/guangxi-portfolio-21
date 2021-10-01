<template>
  <div class="image-box">
    <img
      :ref="`image-${img.id}`"
      :src="img.lazy"
      :data-src="img.origin"
      alt=""
      class="image lazy-img"
    />
  </div>
</template>

<script>
export default {
  props: {
    img: {
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
.image-box {
  position: relative;
  width: 100%;
  margin-bottom: 20px;
  overflow: hidden;

  & .image {
    width: 100%;
    object-fit: cover;

    transition: 0.4s filter cubic-bezier(0.42, 0, 0.58, 1),
      0.4s transform cubic-bezier(0.42, 0, 0.58, 1);

    &.lazy-img {
      transform: scale3d(1.01, 1.01, 1);
      filter: blur(6px);
    }
  }
}
</style>
