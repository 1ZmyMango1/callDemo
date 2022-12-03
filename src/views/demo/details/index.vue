<template>
  <div class="box" style="background-color: #f5f5f5; height: 100vh">
    <van-nav-bar title="商品详情" left-arrow @click-left="onClickLeft" />
    <div>
      <div>
        <div class="box-img">
          <img :src="goodsList.goods_banner" alt="" />
        </div>

        <div class="card-head">
          <div class="card-text">
            {{ goodsList.goods_name }}
            <!-- <div class="card-one">121234</div> -->
          </div>
          <div class="card-price">当前价格</div>
        </div>

        <div class="scope-head">
          <div class="scope-text">
            价格范围：
            <div class="scope-one">
              {{ goodsList.min_price }}~{{ goodsList.max_price }}
            </div>
          </div>
          <div class="scope-price">￥{{ goodsList.goods_price }}</div>
        </div>
      </div>

      <div class="call" @click="look">查看详情</div>

      <div class="information">数据统计</div>

      <div class="num">
        <div class="num-left">总数量：{{ censusList.total_num }}</div>
        <div class="num-right">总成交量：{{ censusList.total_deal_num }}</div>
      </div>

      <div class="num">
        <div class="num-left">总价值：{{ censusList.total_money }}</div>
        <div class="num-right">总成交额：{{ censusList.total_deal_money }}</div>
      </div>

      <div class="cost">
        <div class="cost-left">我的商品：{{ userList.goods_total_num }}</div>
        <div class="cost-right">商品价值：{{ userList.goods_total_money }}</div>
      </div>

      <div class="buttom">
        <div class="buttom-top">
          <div class="top-left">提货商品：0</div>
          <div class="top-right" @click="upGoods">申请提货</div>
          <div class="top-right">自主认购</div>
        </div>
        <div class="buttom-two">
          <div class="two-left">折扣卷：0</div>
          <div class="two-rights" @click="particulars">明细</div>
          <div class="two-right">自主认购</div>
        </div>
        <div class="buttom-one">
          <div class="one-left">折扣商品：0</div>
          <div class="one-right" @click="particulars">明细</div>
        </div>
      </div>

      <div class="base">
        <div class="base-top">
          <div class="top-left">配售商品：0</div>
          <div class="top-right" @click="particulars">明细</div>
          <div class="top-right" @click="unloading">一件转存</div>
        </div>
        <div class="base-two">
          <div class="two-left">可售商品：0</div>
          <div class="two-rights" @click="particulars">明细</div>
          <div class="two-right">委托销售</div>
        </div>
        <div class="base-one">
          <div class="one-left">转存商品：0</div>
          <div class="one-right" @click="particulars">明细</div>
          <div class="one-rights">确认转存</div>
        </div>
      </div>

      <div class="footer">
        <div class="footer-love" @click="showLove">
          <div>
            <img
              src="../../../assets/img/Frame.png"
              alt=""
              v-if="isShowLove"
            /><img src="../../../assets/img/Vector.png" alt="" v-else />
          </div>
          <span>收藏</span>
        </div>
        <div class="footer-shp" @click="$router.push('/shopping')">
          <div><img src="../../../assets/img/购物车.png" alt="" /></div>
          <span>购物车</span>
        </div>
        <div class="shopping" @click="$router.push('/shopping')">购物车</div>
        <div class="okGo" @click="purchase">立即购买</div>
      </div>
    </div>

    <van-popup
      v-model="isShowGo"
      round
      position="bottom"
      :style="{ height: '30%' }"
    >
      <div class="show">
        <div class="show-img">
          <img src="../../../assets/img/Rectangle.png" alt="" />
        </div>
        <div class="pays">
          <div class="pay">￥{{ allPrice }}</div>
          <div class="repertory">库存：15789523件</div>
          <div class="select">已选择：默认{{ value }}件</div>
        </div>
      </div>

      <div class="commodity">商品型号</div>
      <div class="default">默认</div>

      <div class="num">
        <div class="num-one">购买数量</div>
        <div class="num-two">
          <van-stepper
            min="6"
            @plus="add()"
            @minus="del()"
            v-model="value"
            input-width="30px"
            button-size="25px"
          />
        </div>
      </div>

      <div class="confirm" @click="confirm">确定</div>
    </van-popup>
  </div>
</template>

<script>
import { Toast } from "vant";
import { Notify } from "vant";
import { goodsDetail, addCart } from "@/api/user";
export default {
  data() {
    return {
      isShowLove: false,
      isShowGo: false,
      value: 6,
      allPrice: 206,
      shopList: [
        {
          id: "0",
          name: "这是一件商品1",
          num: 1,
          price: "206",
          isSelected: true,
        },
      ],
      id: "", //商品id
      ids: "",
      idParticulars:'',
      goodsList: [], //商品详情
      censusList: [],
      userList: [],
    };
  },
  created() {
    this.id = this.$route.query.id;
    this.ids = this.$route.query.ids;
    this.idParticulars = this.$route.query.idParticulars
    this.goodsDetail();
  },
  methods: {
    onClickLeft() {
      this.$router.push("/demo/demo1");
    },
    showLove() {
      this.isShowLove = !this.isShowLove;
    },
    purchase() {
      this.isShowGo = true;
    },

    // 增加
    add() {
      this.value = this.value + 6;
    },
    // 减少
    del() {
      this.value = this.value - 6;
    },

    async confirm() {
      if (this.value > 5) {
        let data = {
          goods_id: this.id,
          goods_num: this.value,
        };
        let res = await addCart(data);
        this.$router.push("/my/okShopping");
      } else {
        Toast("购买数量默认是 6 哦");
      }
    },

    // 申请提货
    upGoods() {
      Notify({
        message: "提货成功",
        color: "#fff",
        background: "#F55E68",
      });
    },
    // 转存
    unloading() {
      Notify({
        message: "转存成功",
        color: "#fff",
        background: "#F55E68",
      });
    },

    // 查看详情
    look() {
      this.$router.push({
        path: "/demo/examine",
        query: {
          id: this.id,
        },
      });
    },

    // 明细
    particulars() {
      this.$router.push({
        path: "/demo/particulars",
        query: {
          id: this.id,
        },
      });
    },

    // 商品详情信息
    async goodsDetail() {
      if (this.id) {
        try {
          let data = {
            goods_id: this.id,
          };
          let res = await goodsDetail(data);
          this.goodsList = res.data.goods;
          this.censusList = res.data.census;
          this.userList = res.data.user;
        } catch (error) {
          console.log(error);
        }
      } else if(this.ids){
        try {
          let data = {
            goods_id: this.ids,
          };
          let res = await goodsDetail(data);
          this.goodsList = res.data.goods;
          this.censusList = res.data.census;
          this.userList = res.data.user;
        } catch (error) {
          console.log(error);
        }
      }else {
        try {
          let data = {
            goods_id: this.idParticulars,
          };
          let res = await goodsDetail(data);
          this.goodsList = res.data.goods;
          this.censusList = res.data.census;
          this.userList = res.data.user;
        } catch (error) {
          console.log(error);
        }
      }
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
  padding-bottom: 100px;
  // margin-bottom: 100px;
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

.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: #fff;
  display: flex;
  justify-items: center;
  justify-content: space-evenly;
  .footer-love {
    text-align: center;
    margin-top: 10px;
  }
  .footer-shp {
    text-align: center;
    margin-top: 10px;
  }
  .shopping {
    width: 95px;
    height: 28px;
    color: #f55e68;
    border: 1px solid #f55e68;
    line-height: 28px;
    text-align: center;
    border-radius: 20px;
    margin-top: 10px;
  }
  .okGo {
    width: 95px;
    height: 28px;
    background-color: #f55e68;
    // border: 1px solid #f55e68;
    color: #fff;
    line-height: 28px;
    text-align: center;
    border-radius: 20px;
    margin-top: 10px;
  }
}

.show {
  display: flex;
  justify-items: center;
  margin-top: 5px;
  margin-left: 15px;
  margin-right: 15px;
  .show-img {
    width: 89px;
    height: 89px;
    img {
      width: 89px;
      height: 89px;
    }
  }
  .pays {
    margin: 5px 20px;
    .pay {
      color: #f55e68;
      font-size: 20px;
    }
    .repertory {
      margin-top: 15px;
    }
    .select {
      font-size: 12px;
      margin-top: 5px;
    }
  }
}

.commodity {
  font-size: 16px;
  font-weight: 700;
  margin-left: 15px;
  margin-top: 5px;
}
.default {
  width: 69px;
  height: 32px;
  border-radius: 20px;
  color: #f55e68;
  background-color: #ffd2d7;
  line-height: 32px;
  text-align: center;
  font-size: 15px;
  margin-left: 15px;
  margin-top: 5px;
}

.num {
  display: flex;
  justify-items: center;
  justify-content: space-between;
  margin-top: 6px;
  .num-one {
    margin-left: 15px;
    font-size: 15px;
    margin-top: 5px;
  }
  .num-two {
    margin-right: 15px;
  }
}

.confirm {
  width: 343px;
  height: 40px;
  background-color: #f55e68;
  color: #fff;
  border-radius: 20px;
  line-height: 40px;
  text-align: center;
  margin-left: 15px;
  margin-top: 7px;
}
</style>
