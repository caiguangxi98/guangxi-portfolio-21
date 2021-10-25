<template>
  <div class="work-info">
    <!-- eslint-disable vue/no-v-html -->
    <p v-html="info"></p>
    <!--eslint-enable-->
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.work-info {
  position: relative;
  width: 50%;
  left: 50%;
  margin: 160px 0;

  & p {
    margin-left: 60px;
    font-size: 25px;
    letter-spacing: 0.2px;
    line-height: 30px;
    color: $grey-l;
  }
}

@media screen and ($breakPoint1) {
  .work-info {
    margin: 120px 0;
    & p {
      font-size: 20px;
    }
  }
}
@media screen and ($breakPoint3) {
  .work-info {
    margin: 100px 0;
    & p {
      font-size: 16px;
      line-height: 20px;
    }
  }
}
@media screen and ($breakPoint4) {
  .work-info {
    width: 60%;
    left: 40%;
    margin: 80px 0;
    & p {
      font-size: 16px;
      line-height: 20px;
      margin-left: 40px;
    }
  }
}
@media screen and ($breakPoint5) {
  .work-info {
    width: 100%;
    left: 0;
    margin: 60px 0;
    & p {
      font-size: 16px;
      line-height: 20px;
      margin-left: 40px;
    }
  }
}
@media screen and ($breakPoint5) {
  .work-info {
    margin: 40px 0;
  }
}
</style>
