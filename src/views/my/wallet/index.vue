<template>
  <div class="box" style="background-color: #f5f5f5; height: 100vh">
    <van-nav-bar title="我的钱包" left-arrow @click-left="onClickLeft" />

    <div class="box-img">
      <img src="../../../assets/img/card_bg.png" alt="" />
      <div class="box-sum">
        <div class="box-sum-one">0.00</div>
        <div class="box-sum-two">总资产（元）</div>
      </div>

      <div class="add-up">
        <span>累计充值：1000元&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;累计消费：1999元</span>
      </div>
    </div>

    <div class="box-cell">
      <van-cell title="余额转账" is-link />
    </div>
    <div class="box-cell">
      <van-cell title="账户明细" is-link />
    </div>
    <div class="box-cell">
      <van-cell title="转换记录" is-link />
    </div>
    <div class="box-cell">
      <van-cell title="充值记录" is-link />
    </div>

    <div class="box-button">
      <img src="../../../assets/img/button_cash.png" alt="" />
    </div>
    <div class="box-button-up">
      <img src="../../../assets/img/button_recharge.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  destoryed() {},
  methods: {
    onClickLeft() {
      this.$router.push("/my");
    },
  },
};
</script>

<style lang="less" scoped>
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
/deep/.van-cell {
  margin-left: 22px;
}

.box {
  position: relative;
  z-index: 9;
}

.box-img {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  position: relative;
  .box-sum {
    position: absolute;
    left: 40%;
    top: 20%;
    .box-sum-one{
        font-size: 40px;
        font-weight: 700;
        color: #fff;
        text-align: center;
    }
    .box-sum-two{
        color: #fff;
        text-align: center;
    }
  }
  .add-up {
    position: absolute;
    // left: 13%;
    bottom: 15px;
    overflow: hidden;
    span:nth-child(1){
        color: #fff;
        font-size: 12px;
    }
    span:nth-child(2){
        color: #fff;
        font-size: 12px;
    }
  }
}

.box-cell {
  width: 330px;
  height: 52px;
  border-radius: 10px;
  margin: 10px 0;
}

.box-button {
  display: flex;
  justify-content: center;
  margin-top: 60px;
}

.box-button-up {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
</style>
