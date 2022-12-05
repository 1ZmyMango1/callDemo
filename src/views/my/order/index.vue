<template>
  <div class="box" style="background-color: #f5f5f5; height: 100vh">
    <van-nav-bar title="我的订单" left-arrow @click-left="onClickLeft" />

    <van-tabs v-model="active" color="#F55E68" @click="onClick">
      <van-tab title="全部">
        <div class="box-img">
          <img
            v-if="isshow"
            src="../../../assets/img/Group 427320023.png"
            alt=""
          />
          <div v-else class="item-box van-clearfix">
            <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
              <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
              >
                <div class="card" v-for="item in orderList" :key="item.id">
                  <div class="card-title">
                    <div class="card-img">
                      <div>
                        <img
                          src="../../../assets/img/logo.png"
                          alt=""
                          style="width: 20px; height: 20px"
                        />
                      </div>
                      <span>{{ item.goods_name }}</span>
                    </div>
                    <div class="card-text">完成</div>
                  </div>
                  <div class="card-middle">
                    <div>
                      <img
                        :src="item.goods_image"
                        alt=""
                        style="width: 106px; height: 106px"
                      />
                    </div>
                    <div>
                      <div class="card-price">
                        <div class="card-price-title">
                          {{ item.goods_name }}
                        </div>
                        <div class="card-prices">￥{{ item.unit_price }}</div>
                      </div>
                      <div class="card-default">
                        <div class="card-defaults">默认</div>
                        <div class="card-default-one">x{{ item.sale_num }}</div>
                      </div>
                      <div class="card-answer">
                        <div>应付:￥{{ item.pay_money }}</div>
                      </div>
                    </div>
                  </div>
                  <div class="card-btn">
                    <!-- <div class="card-btn-cancel">取消订单</div> -->
                    <div class="card-btn-go">已完成</div>
                  </div>
                </div>
              </van-list>
            </van-pull-refresh>
          </div>
        </div>
      </van-tab>

      <van-tab title="待付款">
        <div class="box-img">
          <img
            v-if="isshow"
            src="../../../assets/img/Group 427320023.png"
            alt=""
          />
          <div v-else class="item-box van-clearfix">
            <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
              <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
              >
                <div class="card" v-for="item in orderList" :key="item.id">
                  <div class="card-title">
                    <div class="card-img">
                      <div>
                        <img
                          src="../../../assets/img/logo.png"
                          alt=""
                          style="width: 20px; height: 20px"
                        />
                      </div>
                      <span>{{ item.goods_name }}</span>
                    </div>
                    <div class="card-text">待支付</div>
                  </div>
                  <div class="card-middle">
                    <div>
                      <img
                        :src="item.goods_image"
                        alt=""
                        style="width: 106px; height: 106px"
                      />
                    </div>
                    <div>
                      <div class="card-price">
                        <div class="card-price-title">
                          {{ item.goods_name }}
                        </div>
                        <div class="card-prices">￥{{ item.unit_price }}</div>
                      </div>
                      <div class="card-default">
                        <div class="card-defaults">默认</div>
                        <div class="card-default-one">x{{ item.sale_num }}</div>
                      </div>
                      <div class="card-answer">
                        <div>应付:￥{{ item.pay_money }}</div>
                      </div>
                    </div>
                  </div>
                  <div class="card-btn">
                    <div class="card-btn-cancel" @click="cancelBtn(item.id)">
                      取消订单
                    </div>
                    <div
                      class="card-btn-go"
                      @click="$router.push('/my/okShopping')"
                    >
                      去支付
                    </div>
                  </div>
                </div>
              </van-list>
            </van-pull-refresh>
          </div>
        </div>
      </van-tab>

      <van-tab title="待收货">
        <div class="box-img">
          <img
            v-if="isshow"
            src="../../../assets/img/Group 427320023.png"
            alt=""
          />
          <div v-else class="item-box van-clearfix">
            <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
              <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
              >
                <div class="card" v-for="item in orderList" :key="item.id">
                  <div class="card-title">
                    <div class="card-img">
                      <div>
                        <img
                          src="../../../assets/img/logo.png"
                          alt=""
                          style="width: 20px; height: 20px"
                        />
                      </div>
                      <span>{{ item.goods_name }}</span>
                    </div>
                    <div class="card-text">待收货</div>
                  </div>
                  <div class="card-middle">
                    <div>
                      <img
                        :src="item.goods_image"
                        alt=""
                        style="width: 106px; height: 106px"
                      />
                    </div>
                    <div>
                      <div class="card-price">
                        <div class="card-price-title">
                          {{ item.goods_name }}
                        </div>
                        <div class="card-prices">￥{{ item.unit_price }}</div>
                      </div>
                      <div class="card-default">
                        <div class="card-defaults">默认</div>
                        <div class="card-default-one">x{{ item.sale_num }}</div>
                      </div>
                      <div class="card-answer">
                        <div>应付:￥{{ item.pay_money }}</div>
                      </div>
                    </div>
                  </div>
                  <div class="card-btn">
                    <div class="card-btn-cancel" @click="refund(item.id)">
                      申请退款
                    </div>
                    <div class="card-btn-cancel" @click="cancelBtn(item.id)">
                      取消订单
                    </div>
                    <div class="card-btn-go" @click="putAway(item.id)">
                      确认收货
                    </div>
                  </div>
                </div>
              </van-list>
            </van-pull-refresh>
          </div>
        </div>
      </van-tab>

      <van-tab title="已完成">
        <div class="box-img">
          <img
            v-if="isshow"
            src="../../../assets/img/Group 427320023.png"
            alt=""
          />
          <div v-else class="item-box van-clearfix">
            <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
              <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
              >
                <div class="card" v-for="item in orderList" :key="item.id">
                  <div class="card-title">
                    <div class="card-img">
                      <div>
                        <img
                          src="../../../assets/img/logo.png"
                          alt=""
                          style="width: 20px; height: 20px"
                        />
                      </div>
                      <span>{{ item.goods_name }}</span>
                    </div>
                    <div class="card-text">已完成</div>
                  </div>
                  <div class="card-middle">
                    <div>
                      <img
                        :src="item.goods_image"
                        alt=""
                        style="width: 106px; height: 106px"
                      />
                    </div>
                    <div>
                      <div class="card-price">
                        <div class="card-price-title">
                          {{ item.goods_name }}
                        </div>
                        <div class="card-prices">￥{{ item.unit_price }}</div>
                      </div>
                      <div class="card-default">
                        <div class="card-defaults">默认</div>
                        <div class="card-default-one">x{{ item.sale_num }}</div>
                      </div>
                      <div class="card-answer">
                        <div>应付:￥{{ item.pay_money }}</div>
                      </div>
                    </div>
                  </div>
                  <div class="card-btn">
                    <!-- <div class="card-btn-cancel">取消订单</div> -->
                    <div class="card-btn-go">已完成</div>
                  </div>
                </div>
              </van-list>
            </van-pull-refresh>
          </div>
        </div>
      </van-tab>

      <van-tab title="已关闭">
        <div class="box-img">
          <img
            v-if="isshow"
            src="../../../assets/img/Group 427320023.png"
            alt=""
          />
          <div v-else class="item-box van-clearfix">
            <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
              <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
              >
                <div class="card" v-for="item in orderList" :key="item.id">
                  <div class="card-title">
                    <div class="card-img">
                      <div>
                        <img
                          src="../../../assets/img/logo.png"
                          alt=""
                          style="width: 20px; height: 20px"
                        />
                      </div>
                      <span>{{ item.goods_name }}</span>
                    </div>
                    <div class="card-text">已关闭</div>
                  </div>
                  <div class="card-middle">
                    <div>
                      <img
                        :src="item.goods_image"
                        alt=""
                        style="width: 106px; height: 106px"
                      />
                    </div>
                    <div>
                      <div class="card-price">
                        <div class="card-price-title">
                          {{ item.goods_name }}
                        </div>
                        <div class="card-prices">￥{{ item.unit_price }}</div>
                      </div>
                      <div class="card-default">
                        <div class="card-defaults">默认</div>
                        <div class="card-default-one">x{{ item.sale_num }}</div>
                      </div>
                      <div class="card-answer">
                        <div>应付:￥{{ item.pay_money }}</div>
                      </div>
                    </div>
                  </div>
                  <div class="card-btn">
                    <!-- <div class="card-btn-cancel">取消订单</div> -->
                    <div class="card-btn-go">已关闭</div>
                  </div>
                </div>
              </van-list>
            </van-pull-refresh>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { orderList, editOrder } from "@/api/user";
import { Toast } from "vant";
export default {
  data() {
    return {
      active: 0,
      total: '',
      orderList: [], //订单详情
      pageNum: 1,
      pageSize: 10,
      isshow: false,
      loading: false,
      finished: false,
      refreshing: false,
    };
  },
  created() {},
  methods: {
    onLoad() {
      this.loading = true;
      this.pageNum++;
      this.rendered();
    },
    onRefresh() {
      // 清空列表数据
      this.orderList = [];
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
      // setTimeout(() => {
      //   this.refreshing = false;
      // }, 2000);
    },

    onClickLeft() {
      this.$router.push("/my");
    },

    // 订单详情
    async onClick(name, title) {
      this.isshow = false;
      this.pageNum = 1;
      this.orderList = [];
      this.rendered(name);
      // console.log(name, title);
      // let data = {
      //   status: name,
      //   pageNum: 1,
      //   pageSize: 10,
      // };
      // let res = await orderList(data);
      // console.log(res);
      // this.orderList = res.data;
    },

    // 默认
    async rendered(name) {
      let data = {
        status: name,
        pageNum: this.pageNum,
        pageSize: this.pageSize,
      };
      let res = await orderList(data);
      this.orderList = this.orderList.concat(res.data.lists);
      this.total = res.data.count
      if (this.orderList.length == 0) {
        this.isshow = true;
      }

      this.loading = false;
      this.refreshing = false;

      // 数据全部加载完成
      if (this.orderList.length >= this.total) {
        this.finished = true;
      }
      // console.log(res);
      // // this.orderList = res.data;
    },

    // 取消订单按钮
    async cancelBtn(id) {
      console.log(id);
      try {
        let data = {
          order_id: id,
          type: 0,
        };
        let res = await editOrder(data);
      } catch (error) {
        console.log(error);
      }
    },

    // 申请退款
    async refund(id) {
      try {
        let data = {
          order_id: id,
          type: 0,
        };
        let res = await editOrder(data);
      } catch (error) {
        console.log(error);
      }
    },
    // 确认收货
    async putAway(id) {
      try {
        let data = {
          order_id: id,
          type: 0,
        };
        let res = await editOrder(data);
      } catch (error) {}
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
  .item-box {
    height: calc(100vh - 90px);
    overflow-y: auto;
  }
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
