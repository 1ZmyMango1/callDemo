<template>
  <div class="box" style="background-color: #fff; height: 100vh">
    <van-nav-bar title="商城资讯" left-arrow @click-left="onClickLeft" />

    <van-tabs v-model="active" color="#F55E68">
      <van-tab title="全部">
        <div>
          <div class="box-img">
          <img src="../../../assets/img/picture1.png" alt="" />
        </div>
          <div class="box-text">甘肃文化产权交易中心</div>
        <div class="box-time">
          <div>2022-10-30</div>
          <div class="box-times"><img src="../../../assets/img/icon_eye.png" alt="" /><span>130</span></div>
        </div>
        </div>

        <div>
          <div class="box-img">
          <img src="../../../assets/img/pic2.png" alt="" />
        </div>
          <div class="box-text">钱塘之韵</div>
        <div class="box-time">
          <div>2022-10-30</div>
          <div class="box-times"><img src="../../../assets/img/icon_eye.png" alt="" /><span>130</span></div>
        </div> 
        </div>
      </van-tab>
      <van-tab title="甘肃文化产权交易中心">
        <div>
          <div class="box-img">
          <img src="../../../assets/img/picture1.png" alt="" />
        </div>
          <div class="box-text">甘肃文化产权交易中心</div>
        <div class="box-time">
          <div>2022-10-30</div>
          <div class="box-times"><img src="../../../assets/img/icon_eye.png" alt="" /><span>130</span></div>
        </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/demo/demo1");
    },
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
  margin-top: 30px;
}

.box-text {
  font-size: 18px;
  font-weight: 700;
  margin-left: 22px;
  margin-top: 12px;
}

.box-time {
  display: flex;
  justify-items: center;
  justify-content: space-between;
  margin-left: 24px;
  margin-top: 15px;
  color: #999;
  .box-times {
    margin-right: 22px;
      span {
        color: #999;
      }
  }
}
</style>
