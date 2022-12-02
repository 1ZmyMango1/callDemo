<template>
  <div class="box" style="background-color: #f5f5f5; height: 100vh">
    <van-nav-bar title="查看详情" left-arrow @click-left="onClickLeft" />

        <div class="img-one">
            <img src="../../../assets/img/71a370f202e3c40c607d596d4f13d85 1.png" alt="">
        </div>
        <div class="img-one">
            <img src="../../../assets/img/0029ef7363d120deecc15c6754aa76e 1.png" alt="">
        </div>
        <div class="img-one">
            <img src="../../../assets/img/3d59aa7016f113d48acef45a4392beb 1.png" alt="">
        </div>
        <div class="img-one">
            <img src="../../../assets/img/fb3e437407d7e8f0b2f907581c14540 1.png" alt="">
        </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active:0
    };
  },
  methods: {
    onClickLeft(){
      this.$router.push('/demo/details')
    }
  },
};
</script>

<style lang="less" scoped>
.box {
  position: relative;
  z-index: 9;
  height: 100vh;
  //   background-color: #fff;
}

/deep/.van-nav-bar__title {
  font-size: 0.5rem;
  font-weight: 700;
}
/deep/.van-nav-bar .van-icon {
  color: #333333;
}
/deep/.van-nav-bar__arrow {
  font-size: 20px;
}
/deep/.van-tab--active {
  color: #F55E68;
}

.img-one {
    width: 100%;
    margin-bottom: 20px;
    img {
        width: 100%;
    }
}
</style>
