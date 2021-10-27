<template>
  <div ref="workVideo" class="work-video">
    <iframe
      :src="`https://player.vimeo.com/video/${video.id}`"
      frameborder="0"
      webkitAllowFullScreen
      mozallowfullscreen
      allowFullScreen
    ></iframe>
  </div>
</template>

<script>
export default {
  props: {
    video: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    const workVideo = this.$refs.workVideo;
    if (!workVideo) return;
    if (this.video.ratio === '2.35-1') {
      workVideo.classList.add('ratio-1');
    }
    if (this.video.ratio === '3-1') {
      workVideo.classList.add('ratio-2');
    }
    if (this.video.ratio === '16-9') {
      workVideo.classList.add('ratio-3');
    }
  },
};
</script>

<style lang="scss" scoped>
.work-video {
  position: relative;
  margin-bottom: 20px;
  height: 0;
  overflow: hidden;
  max-width: 100%;
}
.work-video iframe,
.work-video object,
.work-video embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.ratio-1 {
  padding-bottom: 42.75%;
}
.ratio-2 {
  padding-bottom: 33.5%;
}
.ratio-3 {
  padding-bottom: 56.25%;
}
@media screen and ($breakPoint6) {
  .work-video {
    margin-bottom: 10px;
  }
}
</style>
