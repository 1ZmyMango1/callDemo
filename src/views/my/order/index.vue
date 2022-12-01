<template>
  <div class="box" style="background-color: #f5f5f5; height: 100vh">
    <van-nav-bar title="我的订单" left-arrow @click-left="onClickLeft" />

    <van-tabs v-model="active" color="#F55E68">
      <van-tab title="全部">
        <!-- <div class="box-img">
          <img src="../../../assets/img/Group 427320023.png" alt="">
        </div> -->
        <div class="card">
          <div class="card-title">
            <div class="card-img">
              <div>
                <img
                  src="../../../assets/img/logo.png"
                  alt=""
                  style="width: 20px; height: 20px"
                />
              </div>
              <span>呼和酒票</span>
            </div>
            <div class="card-text">完成</div>
          </div>
          <div class="card-middle">
            <div>
              <img
                src="../../../assets/img/commodity.png"
                alt=""
                style="width: 106px; height: 106px"
              />
            </div>
            <div>
              <div class="card-price">
                <div class="card-price-title">呼和酒票</div>
                <div class="card-prices">￥200.00</div>
              </div>
              <div class="card-default">
                <div class="card-defaults">默认</div>
                <div class="card-default-one">x1</div>
              </div>
              <div class="card-answer">
                <div>应付:￥200.00</div>
              </div>
            </div>
          </div>
          <div class="card-btn">
            <!-- <div class="card-btn-cancel">取消订单</div> -->
            <div class="card-btn-go">已完成</div>
          </div>
        </div>
      </van-tab>
      <van-tab title="待付款">
        <!-- <div class="box-img">
          <img src="../../../assets/img/Group 427320023.png" alt="" />
        </div> -->
        <div class="card">
          <div class="card-title">
            <div class="card-img">
              <div>
                <img
                  src="../../../assets/img/logo.png"
                  alt=""
                  style="width: 20px; height: 20px"
                />
              </div>
              <span>呼和酒票</span>
            </div>
            <div class="card-text">待支付</div>
          </div>
          <div class="card-middle">
            <div>
              <img
                src="../../../assets/img/commodity.png"
                alt=""
                style="width: 106px; height: 106px"
              />
            </div>
            <div>
              <div class="card-price">
                <div class="card-price-title">呼和酒票</div>
                <div class="card-prices">￥200.00</div>
              </div>
              <div class="card-default">
                <div class="card-defaults">默认</div>
                <div class="card-default-one">x1</div>
              </div>
              <div class="card-answer">
                <div>应付:￥200.00</div>
              </div>
            </div>
          </div>
          <div class="card-btn">
            <div class="card-btn-cancel">取消订单</div>
            <div class="card-btn-go">去支付</div>
          </div>
        </div>
      </van-tab>
      <van-tab title="待收货">
        <!-- <div class="box-img">
          <img src="../../../assets/img/Group 427320023.png" alt="" />
        </div> -->
        <div class="card">
          <div class="card-title">
            <div class="card-img">
              <div>
                <img
                  src="../../../assets/img/logo.png"
                  alt=""
                  style="width: 20px; height: 20px"
                />
              </div>
              <span>呼和酒票</span>
            </div>
            <div class="card-text">待收货</div>
          </div>
          <div class="card-middle">
            <div>
              <img
                src="../../../assets/img/commodity.png"
                alt=""
                style="width: 106px; height: 106px"
              />
            </div>
            <div>
              <div class="card-price">
                <div class="card-price-title">呼和酒票</div>
                <div class="card-prices">￥200.00</div>
              </div>
              <div class="card-default">
                <div class="card-defaults">默认</div>
                <div class="card-default-one">x1</div>
              </div>
              <div class="card-answer">
                <div>应付:￥200.00</div>
              </div>
            </div>
          </div>
          <div class="card-btn">
            <div class="card-btn-cancel">申请退款</div>
            <div class="card-btn-cancel">取消订单</div>
            <div class="card-btn-go">去支付</div>
          </div>
        </div>
      </van-tab>
      <van-tab title="已完成">
        <!-- <div class="box-img">
          <img src="../../../assets/img/Group 427320023.png" alt="" />
        </div> -->
        <div class="card">
          <div class="card-title">
            <div class="card-img">
              <div>
                <img
                  src="../../../assets/img/logo.png"
                  alt=""
                  style="width: 20px; height: 20px"
                />
              </div>
              <span>呼和酒票</span>
            </div>
            <div class="card-text">已完成</div>
          </div>
          <div class="card-middle">
            <div>
              <img
                src="../../../assets/img/commodity.png"
                alt=""
                style="width: 106px; height: 106px"
              />
            </div>
            <div>
              <div class="card-price">
                <div class="card-price-title">呼和酒票</div>
                <div class="card-prices">￥200.00</div>
              </div>
              <div class="card-default">
                <div class="card-defaults">默认</div>
                <div class="card-default-one">x1</div>
              </div>
              <div class="card-answer">
                <div>应付:￥200.00</div>
              </div>
            </div>
          </div>
          <div class="card-btn">
            <!-- <div class="card-btn-cancel">取消订单</div> -->
            <div class="card-btn-go">已完成</div>
          </div>
        </div>
      </van-tab>
      <van-tab title="已关闭">
        <!-- <div class="box-img">
          <img src="../../../assets/img/Group 427320023.png" alt="" />
        </div> -->
        <div class="card">
          <div class="card-title">
            <div class="card-img">
              <div>
                <img
                  src="../../../assets/img/logo.png"
                  alt=""
                  style="width: 20px; height: 20px"
                />
              </div>
              <span>呼和酒票</span>
            </div>
            <div class="card-text">已关闭</div>
          </div>
          <div class="card-middle">
            <div>
              <img
                src="../../../assets/img/commodity.png"
                alt=""
                style="width: 106px; height: 106px"
              />
            </div>
            <div>
              <div class="card-price">
                <div class="card-price-title">呼和酒票</div>
                <div class="card-prices">￥200.00</div>
              </div>
              <div class="card-default">
                <div class="card-defaults">默认</div>
                <div class="card-default-one">x1</div>
              </div>
              <div class="card-answer">
                <div>应付:￥200.00</div>
              </div>
            </div>
          </div>
          <div class="card-btn">
            <!-- <div class="card-btn-cancel">取消订单</div> -->
            <div class="card-btn-go">已关闭</div>
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

.box {
  position: relative;
  z-index: 9;
  height: 100vh;
  //   background-color: #fff;
}

/deep/.van-tab--active {
  color: #f55e68;
}

.box-img {
  text-align: center;
}

.card {
  background-color: #fff;
  width: 100%;
  height: 233px;
  margin-bottom: 5px;
  position: relative;

  .card-title {
    display: flex;
    justify-items: center;
    justify-content: space-between;
    margin: 0 16px;
    padding-top: 15px;
    .card-img {
      display: flex;
      justify-items: center;
      span {
        font-size: 16px;
        margin-left: 8px;
        margin-top: 2px;
      }
    }
    .card-text {
      color: #f55e68;
      font-size: 16px;
    }
  }

  .card-middle {
    margin: 0 16px;
    margin-top: 3px;
    display: flex;
    justify-items: center;
    position: relative;
    .card-price {
      display: flex;
      justify-items: center;
      justify-content: space-between;
      margin-left: 10px;
      width: 230px;
      .card-price-title {
        font-size: 18px;
      }
      .card-prices {
        font-size: 18px;
      }
    }

    .card-default {
      margin: 0 10px;
      margin-top: 3px;
      display: flex;
      justify-items: center;
      justify-content: space-between;
      width: 230px;
      margin-top: 8px;
      .card-defaults {
        font-size: 16px;
        color: #999;
      }
      .card-default-one {
        font-size: 16px;
        color: #999;
      }
    }

    .card-answer {
      margin-left: 10px;
      position: absolute;
      bottom: 0;
      right: 0;
      font-size: 16px;
    }
  }

  .card-btn {
    position: absolute;
    bottom: 10px;
    right: 16px;
    display: flex;
    justify-items: center;
    .card-btn-cancel {
      width: 72px;
      height: 32px;
      border-radius: 10px;
      border: 1px solid #999;
      line-height: 32px;
      text-align: center;
      font-size: 16px;
      margin-left: 10px;
    }
    .card-btn-go {
      width: 72px;
      height: 32px;
      border-radius: 10px;
      background-color: #f55e68;
      color: #fff;
      line-height: 32px;
      text-align: center;
      font-size: 16px;
      margin-left: 10px;
    }
  }
}
</style>
