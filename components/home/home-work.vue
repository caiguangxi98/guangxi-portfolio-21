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

    // work.style.width = `${this.width}%`;

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
  // margin-top: 200px;
  margin-bottom: 80px;

  &.left {
    left: 0;
    width: 68%;
  }

  &.right {
    left: 50%;
    width: 50%;
  }

  &.mid {
    left: 50%;
    width: 50%;
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
      font-family: $font1;
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
@media screen and ($breakPoint4) {
  .work {
    position: relative;
    height: auto;
    margin-bottom: 40px;
    .intro {
      position: relative;
      width: 100%;
      display: flex;

      .title {
        flex: 1;
        top: -2px;
      }
      .year {
        flex: 1;
        position: relative;
        margin-left: 0;
        top: 0px;
        text-align: center;
      }
      .number {
        flex: 1;
        position: relative;
        right: 0;
        text-align: right;
        text-transform: uppercase;
        top: 0px;
      }
    }

    &.left {
      left: 0;
      width: 100%;
    }

    &.right {
      left: 0;
      width: 100%;
    }

    &.mid {
      left: 0;
      width: 100%;
      transform: translate3d(0, 0, 0);
    }
  }
}
@media screen and ($breakPoint5) {
  .work {
    position: relative;
    height: auto;
    margin-bottom: 36px;
    .intro {
      .title {
        font-size: 20px;
      }
    }
  }
}
@media screen and ($breakPoint6) {
  .work {
    margin-bottom: 30px;
    .intro {
      margin-top: 10px;
      .title {
        font-size: 18px;
      }
    }
  }
}
</style>
