<template>
  <div class="carousel-figure">
    <swiper  ref="mySwiper"
      @mouseenter.native="mouseenter"
      @mouseleave.native="mouseleave" class="swiper" :options="swiperOption">
      <swiper-slide>
        <img src="../assets/img/bg1.jpg" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/img/bg2.jpg" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/img/bg3.jpg" />
      </swiper-slide>
      <!-- <div class="swiper-pagination" slot="pagination"></div> -->
       <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
    </swiper>
    <div class="nav">
      <img src="../assets/img/logo.png" />
      <div class="nav_banner">
        <ul>
          <li><a href="index.html">首页</a></li>
          <li><a href="#">蛋糕</a></li>
          <li><a href="ingredient.html">精选食材</a></li>
          <li><a href="actives.html">最新活动</a></li>
        </ul>
      </div>
      <div class="reg">
        <ul>
          <li><a href="login.html">登录</a></li>
          |
          <li><a href="regist.html">注册</a></li>
          |
          <li><a href="#">购物车</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet(index, className) {
              return `<span class="${className} swiper-pagination-bullet-custom">${index + 1}</span>`
            }
        },
        effect: "fade",
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      },
    };
  },
 
  methods: {
    mouseenter() {
      // console.log("鼠标进入");
      // console.log(this.$refs)
      this.$refs.mySwiper.$swiper.autoplay.stop()
    },
    mouseleave() {
      // console.log("鼠标离开");
      this.$refs.mySwiper.$swiper.autoplay.start()

    },
  }
};
</script>

<style lang="scss">
img {
  width: 100%;
  height: 650px;
}
.swiper {
  margin: 5px auto;
  
  .swiper-pagination-bullet {
    width: 18px;
    height: 18px;
  }
  .swiper-pagination-bullet-active {
    background: #aa8764;
  }
}
</style>
<style scoped src="../assets/css/index.css"></style>