<template>
  <div class="work">
    <div class="intro">
      <!-- eslint-disable vue/no-v-html -->
      <h2 class="title" v-html="title"></h2>
      <h4 class="year">{{ year }}</h4>
      <h4 class="role" v-html="role"></h4>
      <!--eslint-enable-->
    </div>
    <div class="img">
      <img :src="img" alt="" />
    </div>
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
    role: {
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
  },
};
</script>

<style lang="scss" scoped>
.work {
  position: relative;
  width: 100%;
  height: auto;
  margin-top: 200px;
  margin-bottom: 80px;
  @include grid-8;

  .intro {
    grid-column: 1/4;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title {
      font-family: $font2;
    }
    .year,
    .role {
      font-family: $font1;
      color: $grey-l;
    }
    .role {
      line-height: 28px;
    }
  }
  .img {
    grid-column: 4/-1;
    & img {
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>
