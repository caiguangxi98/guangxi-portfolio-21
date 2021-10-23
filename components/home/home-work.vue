<template>
  <div :ref="`work-${id}`" class="work">
    <NuxtLink :to="`/works/${link}`">
      <div class="img">
        <img :src="img" alt="" />
      </div>
      <div class="intro">
        <!-- eslint-disable vue/no-v-html -->
        <div class="title">{{ title }}</div>
        <h4 class="year">{{ year }}</h4>
        <h4 class="number">n°{{ id }}</h4>
        <!--eslint-enable-->
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    year: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
    width: {
      type: Number,
      default: 50,
    },
    float: {
      type: String,
      default: '',
    },
  },
  mounted() {
    const workId = `work-${this.id}`;
    const work = this.$refs[workId];

    work.style.width = `${this.width}%`;

    if (this.float === 'left') {
      work.classList.add('left');
    }
    if (this.float === 'right') {
      work.classList.add('right');
    }
    if (this.float === 'mid') {
      work.classList.add('mid');
    }
  },
};
</script>

<style lang="scss" scoped>
.work {
  position: relative;
  height: auto;
  margin-top: 200px;
  margin-bottom: 80px;

  &.left {
    left: 0;
  }

  &.right {
    left: 50%;
  }

  &.mid {
    left: 50%;
    transform: translate3d(-50%, 0, 0);
  }

  .intro {
    position: relative;
    width: 100%;
    margin-top: 12px;
    .title,
    .year,
    .number {
      display: inline-block;
      line-height: 30px;
    }
    .title {
      position: relative;
      font-family: $font2;
      font-size: 28px;
    }
    .year {
      position: relative;
      margin-left: 80px;
      top: -2px;
    }
    .number {
      position: absolute;
      font-family: $font4;
      text-transform: uppercase;
      right: 0;
      top: 2px;
    }
  }
  .img {
    & img {
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>
