<template>
  <div class="next">
    <NuxtLink :to="`/works/${next.link}`">
      <div class="button">
        <h2 class="t">next project</h2>
        <h4 class="n">n° {{ next.id }}</h4>
      </div>
      <div class="icon">
        <svg width="30" height="33" fill="none">
          <path
            d="M12.737 0h4.495v24.574l9.59-9.59L30 18.164 15.166 32.996 15 32.831l-.166.166L0 18.163l3.179-3.178 9.558 9.558V0Z"
          />
        </svg>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    next: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.next {
  position: relative;
  width: 425px;
  left: 50%;
  margin-top: 320px;
  transform: translate3d(-50%, 0, 0);

  .button {
    position: relative;
    width: 100%;

    text-transform: uppercase;
    .t {
      display: inline-block;
      font-family: $font2;
    }
    .n {
      position: relative;
      top: -20px;
      display: inline-block;
      margin-left: 14px;
      font-family: $font4;
    }
  }
  .icon {
    position: relative;
    left: 45%;
    margin-top: 20px;
    & svg {
      fill: $white;
    }
  }
}
</style>
