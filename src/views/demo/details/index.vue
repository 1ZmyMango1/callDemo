<template>
  <div class="box" style="background-color: #f5f5f5; height: 100vh">
    <van-nav-bar title="消息中心" left-arrow @click-left="onClickLeft" />
    <div class="box-img">
      <img src="../../../assets/img/Rectangle.png" alt="" />
    </div>

    <div class="card-head">
      <div class="card-text">
        钱塘之韵
        <div class="card-one">121234</div>
      </div>
      <div class="card-price">当前价格</div>
    </div>

    <div class="scope-head">
      <div class="scope-text">
        价格范围：
        <div class="scope-one">121234</div>
      </div>
      <div class="scope-price">￥206</div>
    </div>

    <div class="call">查看详情</div>

    <div class="information">数据统计</div>

    <div class="num">
      <div class="num-left">总数量：20000</div>
      <div class="num-right">总成交量：20000</div>
    </div>

    <div class="num">
      <div class="num-left">总数量：20000</div>
      <div class="num-right">总成交量：20000</div>
    </div>

    <div class="cost">
      <div class="cost-left">我的商品：0</div>
      <div class="cost-right">商品价值：0</div>
    </div>

    <div class="buttom">
      <div class="buttom-top">
        <div class="top-left">提货商品：0</div>
        <div class="top-right">申请提货</div>
        <div class="top-right">自主认购</div>
      </div>
      <div class="buttom-two">
        <div class="two-left">折扣卷：0</div>
        <div class="two-rights">明细</div>
        <div class="two-right">自主认购</div>
      </div>
      <div class="buttom-one">
        <div class="one-left">折扣商品：0</div>
        <div class="one-right">明细</div>
      </div>
    </div>

    <div class="base">
      <div class="base-top">
        <div class="top-left">配售商品：0</div>
        <div class="top-right">明细</div>
        <div class="top-right">一件转存</div>
      </div>
      <div class="base-two">
        <div class="two-left">可售商品：0</div>
        <div class="two-rights">明细</div>
        <div class="two-right">委托销售</div>
      </div>
      <div class="base-one">
        <div class="one-left">转存商品：0</div>
        <div class="one-right">明细</div>
        <div class="one-rights">确认转存</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.push("/demo/demo1");
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

.box {
  position: relative;
  z-index: 9;
  height: 100vh;
  background-color: #fff;
}
.box-img {
  text-align: center;
}

.card-head {
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  .card-text {
    display: flex;
    justify-items: center;
    margin: 0 20px;
    font-size: 18px;
    .card-one {
      width: 100px;
      height: 20px;
      background-color: #f0f0f0;
      border-radius: 20px;
      text-align: center;
      margin-left: 10px;
    }
  }
  .card-price {
    margin: 0 20px;
    color: #999;
    font-size: 14px;
  }
}

.scope-head {
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  .scope-text {
    display: flex;
    justify-items: center;
    margin: 0 20px;
    font-size: 16px;
    color: #999;
    .scope-one {
      color: #f55e68;
      margin-left: 10px;
    }
  }
  .scope-price {
    margin: 0 20px;
    color: #f55e68;
    font-size: 20px;
  }
}

.call {
  width: 343px;
  height: 43px;
  background-color: #fff;
  border-radius: 10px;
  text-align: center;
  line-height: 43px;
  font-size: 16px;
  margin: 20px 16px;
}

.information {
  font-size: 18px;
  margin-left: 19px;
}

.num {
  width: 100%;
  display: flex;
  justify-items: center;
  justify-content: space-between;

  .num-left {
    color: #999;
    font-size: 14px;
    margin-top: 15px;
    margin-left: 20px;
  }
  .num-right {
    color: #999;
    font-size: 14px;
    margin-top: 15px;
    margin-right: 20px;
  }
}

.cost {
  display: flex;
  justify-items: center;
  justify-content: space-between;
  width: 343px;
  height: 43px;
  background-color: #fff;
  border-radius: 10px;
  line-height: 42px;
  margin: 15px 16px;
  .cost-left {
    font-size: 16px;
    margin-left: 10px;
  }
  .cost-right {
    font-size: 16px;
    margin-right: 10px;
  }
}

.buttom {
  height: 129px;
  width: 343px;
  background-color: #fff;
  border-radius: 10px;
  margin: 15px 16px;
  .buttom-top {
    display: flex;
    justify-items: center;

    .top-left {
      font-size: 14px;
      height: 28px;
      width: 95px;
      text-align: center;
      line-height: 28px;
      border-radius: 20px;
      margin-left: 10px;
      margin-top: 10px;
    }
    .top-right {
      height: 28px;
      width: 95px;
      background-color: #f55e68;
      color: #fff;
      text-align: center;
      line-height: 28px;
      border-radius: 20px;
      margin-left: 12px;
      margin-top: 10px;
    }
  }
  .buttom-one {
    display: flex;
    justify-items: center;
    .one-left {
      font-size: 14px;
      height: 28px;
      width: 95px;
      text-align: center;
      line-height: 28px;
      border-radius: 20px;
      margin-left: 10px;
      margin-top: 10px;
    }
    .one-right {
      height: 28px;
      width: 95px;
      background-color: #f55e68;
      color: #fff;
      text-align: center;
      line-height: 28px;
      border-radius: 20px;
      margin-left: 12px;
      margin-top: 10px;
    }
  }

  .buttom-two {
    display: flex;
    justify-items: center;
    .two-left {
      font-size: 14px;
      height: 28px;
      width: 95px;
      text-align: center;
      line-height: 28px;
      border-radius: 20px;
      margin-left: 10px;
      margin-top: 10px;
    }
    .two-rights {
      height: 28px;
      width: 95px;
      //   background-color: #f55e68;
      color: #f55e68;
      border: 1px solid #f55e68;
      text-align: center;
      line-height: 28px;
      border-radius: 20px;
      margin-left: 12px;
      margin-top: 10px;
    }
    .two-right {
      height: 28px;
      width: 95px;
      background-color: #f55e68;
      color: #fff;
      text-align: center;
      line-height: 28px;
      border-radius: 20px;
      margin-left: 12px;
      margin-top: 10px;
    }
  }
}

.base {
  height: 129px;
  width: 343px;
  background-color: #fff;
  border-radius: 10px;
  margin: 15px 16px;
  .base-top {
    display: flex;
    justify-items: center;

    .top-left {
      font-size: 14px;
      height: 28px;
      width: 95px;
      text-align: center;
      line-height: 28px;
      border-radius: 20px;
      margin-left: 10px;
      margin-top: 10px;
    }
    .top-right {
      height: 28px;
      width: 95px;
      //   background-color: #f55e68;
      border: 1px solid #f55e68;
      color: #f55e68;
      text-align: center;
      line-height: 28px;
      border-radius: 20px;
      margin-left: 12px;
      margin-top: 10px;
    }
  }
  .base-one {
    display: flex;
    justify-items: center;
    .one-left {
      font-size: 14px;
      height: 28px;
      width: 95px;
      text-align: center;
      line-height: 28px;
      border-radius: 20px;
      margin-left: 10px;
      margin-top: 10px;
    }
    .one-right {
      height: 28px;
      width: 95px;
      //   background-color: #f55e68;
      //   color: #fff;
      border: 1px solid #f55e68;
      color: #f55e68;
      text-align: center;
      line-height: 28px;
      border-radius: 20px;
      margin-left: 12px;
      margin-top: 10px;
    }
    .one-rights {
      height: 28px;
      width: 95px;
        background-color: #f55e68;
        color: #fff;
    //   border: 1px solid #f55e68;
    //   color: #f55e68;
      text-align: center;
      line-height: 28px;
      border-radius: 20px;
      margin-left: 12px;
      margin-top: 10px;
    }
  }

  .base-two {
    display: flex;
    justify-items: center;
    .two-left {
      font-size: 14px;
      height: 28px;
      width: 95px;
      text-align: center;
      line-height: 28px;
      border-radius: 20px;
      margin-left: 10px;
      margin-top: 10px;
    }
    .two-rights {
      height: 28px;
      width: 95px;
      //   background-color: #f55e68;
      color: #f55e68;
      border: 1px solid #f55e68;
      text-align: center;
      line-height: 28px;
      border-radius: 20px;
      margin-left: 12px;
      margin-top: 10px;
    }
    .two-right {
      height: 28px;
      width: 95px;
    //   background-color: #f55e68;
    //   color: #fff;
    color: #f55e68;
      border: 1px solid #f55e68;
      text-align: center;
      line-height: 28px;
      border-radius: 20px;
      margin-left: 12px;
      margin-top: 10px;
    }
  }
}
</style>
