<template>
  <div class="work-brief">
    <!-- eslint-disable vue/no-v-html -->
    <div class="title">{{ title }}</div>
    <div class="info info-main">
      <div class="meta">
        <h3 class="company">{{ company }}</h3>
        <h3 class="slash">/</h3>
        <h3 class="year">{{ year }}</h3>
        <h4 class="number">{{ number }}</h4>
      </div>
      <div class="project-details">
        <h3>Project Details</h3>
        <p v-html="details"></p>
      </div>
      <div class="role">
        <h3>Role</h3>
        <p v-html="role"></p>
      </div>
    </div>
    <!--eslint-enable-->
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    company: {
      type: String,
      default: '',
    },
    year: {
      type: String,
      default: '',
    },
    number: {
      type: String,
      default: '',
    },
    details: {
      type: String,
      default: '',
    },
    role: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.work-brief {
  position: relative;
  width: 100%;
  margin: 90px auto 0 auto;
  display: flex;
  font-family: $font1;

  .title {
    flex: 1;
    font-family: $font2;
    font-size: 6vw;
  }

  .info-main {
    flex: 1;
    margin-top: 30px;
  }

  .meta {
    position: relative;
    width: 100%;
    margin-bottom: 80px;

    .company,
    .slash,
    .year,
    .number {
      display: inline-block;
    }

    .company {
      position: relative;
      left: 0;
      font-family: $font2;
      margin-right: 60px;
    }

    .slash {
      position: relative;
      font-family: $font4;
      margin-right: 60px;
    }

    .year {
      color: $grey-l;
    }

    .number {
      position: absolute;
      right: 0;
      top: 5px;
      font-family: $font4;
      text-transform: uppercase;
      color: $grey-l;
    }
  }

  .project-details {
    position: relative;
    width: 100%;
    margin-bottom: 80px;

    h3 {
      font-family: $font2;
      margin-bottom: 80px;
    }
    p {
      margin-left: 60px;
      font-size: 25px;
      letter-spacing: 0.2px;
      line-height: 30px;
      color: $grey-l;
    }
  }

  .role {
    position: relative;
    width: 100%;
    margin-bottom: 160px;
    h3 {
      font-family: $font2;
      margin-bottom: 80px;
    }
    p {
      margin-left: 60px;
      font-size: 25px;
      letter-spacing: 0.2px;
      line-height: 30px;
      color: $grey-l;
    }
  }
}

@media screen and ($breakPoint1) {
  .work-brief {
    .project-details {
      margin-bottom: 80px;

      h3 {
        margin-bottom: 60px;
      }
      p {
        margin-left: 60px;
        font-size: 20px;
        line-height: 28px;
      }
    }

    .role {
      margin-bottom: 140px;
      h3 {
        margin-bottom: 60px;
      }
      p {
        margin-left: 60px;
        font-size: 20px;
        line-height: 28px;
      }
    }
  }
}
@media screen and ($breakPoint3) {
  .work-brief {
    .meta {
      margin-bottom: 60px;
    }
    .project-details {
      margin-bottom: 60px;

      h3 {
        margin-bottom: 40px;
      }
      p {
        margin-left: 60px;
        font-size: 16px;
        line-height: 20px;
      }
    }

    .role {
      margin-bottom: 100px;
      h3 {
        margin-bottom: 40px;
      }
      p {
        margin-left: 60px;
        font-size: 16px;
        line-height: 20px;
      }
    }
  }
}
@media screen and ($breakPoint4) {
  .work-brief {
    .info-main {
      flex: 1.5;
      margin-top: 20px;
    }
    .meta {
      margin-bottom: 40px;

      .company {
        margin-right: 20px;
      }

      .slash {
        margin-right: 20px;
      }

      .number {
        top: 5px;
      }
    }
    .project-details {
      margin-bottom: 40px;

      h3 {
        margin-bottom: 40px;
      }
      p {
        margin-left: 40px;
      }
    }

    .role {
      margin-bottom: 80px;
      h3 {
        margin-bottom: 40px;
      }
      p {
        margin-left: 40px;
      }
    }
  }
}
@media screen and ($breakPoint5) {
  .work-brief {
    margin: 40px auto 0 auto;

    flex-direction: column;
    .title {
      margin-bottom: 10px;
      font-size: 36px;
    }
    .role {
      margin-bottom: 60px;
    }
  }
}
@media screen and ($breakPoint6) {
  .work-brief {
    margin: 30px auto 0 auto;

    .title {
      margin-bottom: 0;
      font-size: 32px;
    }
  }
}
</style>
