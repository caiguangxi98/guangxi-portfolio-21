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
            d="M17.263 32.997h-4.495V8.424l-9.59 9.589L0 14.833 14.834 0 15 .166 15.166 0 30 14.834l-3.179 3.179-9.558-9.559v24.543Z"
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
  width: 346px;
  left: 50%;
  margin-top: 240px;
  transform: translate3d(-50%, 0, 0);
  color: $grey-l;

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
      top: -16px;
      display: inline-block;
      margin-left: 14px;
      font-family: $font4;
    }
  }
  .icon {
    position: absolute;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    margin-top: 20px;
    & svg {
      fill: $grey-l;
    }
  }

  a.nuxt-link-exact-active {
    color: $text;
  }
  a:hover {
    color: $text;
  }
  a {
    transition: color 0.2s ease;
    text-decoration: none;
    color: $grey-l;
  }
}

@media screen and ($breakPoint3) {
  .next {
    width: 310px;
    margin-top: 180px;
    .button {
      .t {
        font-size: 36px;
      }
      .n {
        top: -15px;
        font-size: 14px;
      }
    }
    .icon {
      & svg {
        transform: scale3d(0.9, 0.9, 0.9);
      }
    }
  }
}
@media screen and ($breakPoint5) {
  .next {
    width: 226px;
    margin-top: 160px;
    .button {
      .t {
        font-size: 25px;
      }
      .n {
        top: -10px;
        margin-left: 14px;
        font-size: 12px;
      }
    }
    .icon {
      & svg {
        transform: scale3d(0.8, 0.8, 0.8);
      }
    }
  }
}
</style>
