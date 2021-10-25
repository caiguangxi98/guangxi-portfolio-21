<template>
  <div ref="footer" class="Footer">
    <div ref="footerTop" class="footer-top">
      <h1 class="navi-works">
        <NuxtLink to="/">Works</NuxtLink>
      </h1>
      <div class="slash">/</div>
      <h1 class="navi-about">
        <NuxtLink to="/about">About</NuxtLink>
      </h1>
    </div>
    <div class="footer-bottom">
      <h4 class="author">
        Dev & Design by <a href="mailto:caiguangxi98@gmail.com">Guangxi Cai</a>
      </h4>
      <h4 class="copy">All Rights Reserved guangxi cai 2021®</h4>
    </div>
    <div class="footer-line">
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isFixed: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    if (!this.isFixed) return;
    this.$refs.footer.classList.add('fixed');
    this.$refs.footer.classList.remove('Footer');
    this.$refs.footerTop.style.display = 'none';
  },
};
</script>

<style lang="scss" scoped>
.fixed {
  position: fixed;
  width: 98%;
  left: 1%;
  bottom: 0;
}
.Footer {
  position: relative;
  width: 98%;
  height: auto;
  margin: 240px auto 0 auto;
}

.footer-top {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;
  & h1 {
    display: inline-block;
    text-transform: uppercase;
    & a {
      text-decoration: none;
      color: $text;
      font-family: $font2;
    }
  }
  .slash {
    font-family: $font4;
    font-size: 140px;
  }
}
.footer-bottom {
  @include grid-8;
  color: $grey-d;
  font-family: $font1;
  margin-bottom: 14px;
  text-transform: uppercase;
  .author {
    grid-column: 1/3;
    a {
      font-family: $font2;
      color: $white;
    }
  }
  .copy {
    position: absolute;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
  }
}
.footer-line {
  width: 100%;
  height: 20px;
  .line {
    width: 100%;
    height: 1px;
    background: $grey-d;
  }
}

@media screen and ($breakPoint1) {
  .Footer {
    .footer-top {
      margin-bottom: 60px;
      .slash {
        font-size: 120px;
      }
    }
  }
}
@media screen and ($breakPoint2) {
  .Footer {
    .footer-top {
      margin-bottom: 60px;
      .slash {
        font-size: 100px;
      }
    }
  }
}
@media screen and ($breakPoint3) {
  .Footer {
    margin-top: 180px;
  }
  .footer-bottom {
    @include grid-4;
    .author {
      grid-column: 1/-2;
      font-size: 14px;
    }
    .copy {
      font-size: 14px;
    }
  }
}
@media screen and ($breakPoint4) {
  .Footer {
    .footer-top {
      margin-bottom: 40px;
      .slash {
        position: relative;
        top: -10px;
        font-size: 80px;
      }
    }
  }
  .footer-bottom {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 14px;
    .copy {
      position: relative;
      left: 0;
      top: -10px;
      width: 100%;
      transform: translate3d(0, 0, 0);
      text-align: center;
    }
  }
}
@media screen and ($breakPoint5) {
  .Footer {
    width: 95%;
    margin-top: 160px;
    .footer-top {
      margin-bottom: 20px;
      .slash {
        top: -8px;
        font-size: 60px;
      }
    }
  }
}
@media screen and ($breakPoint6) {
  .Footer {
    margin-top: 120px;

    .footer-top {
      margin-bottom: 20px;
      .slash {
        top: -4px;
        font-size: 40px;
      }
    }
  }
  .footer-bottom {
    .author {
      font-size: 12px;
    }
    .copy {
      font-size: 12px;
      width: 50%;
    }
  }
}
</style>
