<template>
  <div class="box" style="background-color: #f5f5f5; height: 100vh">
    <van-nav-bar title="帮助中心" left-arrow @click-left="onClickLeft" />

    <van-tabs v-model="active" color='#F55E68'>
      <van-tab title="全部">
        <div class="box-img">
          <img src="../../../assets/img/Group 427320023.png" alt="">
        </div>
      </van-tab>
      <van-tab title="钱塘之韵">
        <div class="box-img">
          <img src="../../../assets/img/Group 427320023.png" alt="">
        </div>
      </van-tab>
      <van-tab title="甘文">
        <div class="box-img">
          <img src="../../../assets/img/Group 427320023.png" alt="">
        </div>
      </van-tab>
    </van-tabs>
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
      this.$router.push('/demo/demo1')
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

.box-img {
  text-align: center;
}
</style>
