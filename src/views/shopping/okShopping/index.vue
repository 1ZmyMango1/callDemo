<template>
  <div class="box">
    <van-nav-bar title="确认订单" left-arrow @click-left="onClickLeft" />

    <div class="box-addres" @click.stop="toSelAdd">
      <div class="box-addres-img">
        <img src="../../../assets/img/icon_addr.png" alt="" />
      </div>
      <div
        class="box-addres-go"
        @click="onAddrress"
        v-for="(items, index) in address"
        :key="index"
      >
        <div class="text">{{ items.name }}</div>
        <div class="texts">{{ items.address }}</div>
      </div>
      <div class="box-addres-imgs">
        <img src="../../../assets/img/icon_more2.png" alt="" />
      </div>
    </div>

    <div>
      <van-card
        :num="list.buy_num"
        :price="goods.goods_price"
        desc="默认"
        :title="goods.goods_name"
        :thumb="goods.goods_image"
      ></van-card>
    </div>

    <div class="distribution">
      <div class="distribution-one">配送方式</div>
      <div class="distribution-go">快递</div>
    </div>

    <div>
      <van-cell-group>
        <van-field
          v-model="value"
          label="买家留言"
          placeholder="请添加备注（150字以内）"
        />
      </van-cell-group>
    </div>

    <div>
      <van-cell title="优惠券" is-link value="无优惠券可用" />
    </div>

    <div class="pay">
      <div class="pay-title">支付方式</div>
      <div class="pay-balance">
        账户余额<van-checkbox
          v-model="checked"
          checked-color="#F55E68"
        ></van-checkbox>
      </div>
      <div class="pay-rest">
        其他支付渠道<van-checkbox
          v-model="checkeds"
          checked-color="#F55E68"
        ></van-checkbox>
      </div>
    </div>

    <div class="merchandise">
      <div class="merchandise-top">
        <div>商品金额</div>
        <div>￥{{ goods.goods_price }}</div>
      </div>
      <div class="merchandise-buttom">
        <div>运费</div>
        <div>￥0</div>
      </div>
    </div>

    <div class="btn">
      <div class="btn-left">
        <div class="btn-left-one">合计：</div>
        <div class="btn-left-two">￥{{ allMoney }}</div>
      </div>
      <div class="btn-right">
        <img src="../../../assets/img/button_go.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { goodsOrderDetail } from "@/api/user";
import global from "@/utils/global";
export default {
  data() {
    return {
      value: "",
      checked: true,
      checkeds: false,
      address: [], //默认地址
      goods: [], //商品信息
      item: [], //地址
      list: [],
      allMoney: 0, //商品总价
    };
  },
  created() {
    console.log(global.state);
    this.item = this.$route.query.item;
    this.address = this.item;
    // debugger;

    this.list = this.$route.query.list;
    // this.list = this.$route.query.list
    // console.log(this.list,this.list.goods_id,'商品id');

    this.goodsOrderDetail();
  },
  mounted() {},
  methods: {
    toSelAdd() {
      this.$router.push({
        path: "/my/add-address",
        query: {
          data: this.list,
        },
      });
    },
    onClickLeft() {
      this.$router.go(-1);
    },

    // 商品信息
    // async await 是异步 会等待执行完再 执行下面代码
    async goodsOrderDetail() {
      try {
        let data = {
          goods_id: this.list.goods_id,
        };
        let res = await goodsOrderDetail(data);
        this.address = res.data.address;
        this.goods = res.data.goods;
        this.allMoney = this.list.goods_price * this.list.buy_num;
      } catch (error) {}
    },

    // 去地址详情页面
    onAddrress() {
      this.$router.push("/my/add-address");
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
/deep/.van-field__label {
  color: #333333;
}

.box {
  position: relative;
  z-index: 9;
  height: 100vh;
  background-color: #f5f5f5;
}

.box-addres {
  width: 100%;
  height: 88px;
  background-color: #fff;
  display: flex;
  justify-items: center;
  position: relative;
  margin-top: 5px;
  .box-addres-img {
    line-height: 88px;
    margin-left: 16px;
  }
  .box-addres-go {
    margin-top: 25px;
    margin-left: 15px;
    color: #999;
    .text {
      font-size: 14px;
    }
    .texts {
      font-size: 13px;
      margin: 10px 0;
    }
  }
  .box-addres-imgs {
    line-height: 88px;
    position: absolute;
    right: 16px;
    top: 0;
  }
}

.distribution {
  display: flex;
  justify-items: center;
  justify-content: space-between;
  // margin: 10px 16px;
  background-color: #fff;
  height: 50px;
  color: #333333;
  font-size: 14px;
  line-height: 50px;
  .distribution-one {
    margin-left: 16px;
  }
  .distribution-go {
    margin-right: 15px;
  }
}

.pay {
  overflow: hidden;
  width: 100%;
  height: 96px;
  background-color: #fff;
  margin-top: 5px;
  .pay-title {
    margin-left: 16px;
    font-size: 14px;
    margin-top: 10px;
  }
  .pay-balance {
    margin-left: 16px;
    display: flex;
    justify-content: space-between;
    margin-right: 16px;
    margin-top: 15px;
    font-size: 14px;
  }
  .pay-rest {
    margin-left: 16px;
    display: flex;
    justify-content: space-between;
    margin-right: 16px;
    margin-top: 10px;
    font-size: 14px;
  }
}

.merchandise {
  background-color: #fff;
  width: 100%;
  height: 72px;
  margin-top: 5px;
  .merchandise-top {
    margin-left: 16px;
    display: flex;
    justify-content: space-between;
    margin-right: 16px;
    font-size: 14px;
    padding-top: 10px;
  }
  .merchandise-buttom {
    margin-left: 16px;
    display: flex;
    justify-content: space-between;
    margin-right: 16px;
    padding-top: 20px;
    font-size: 13px;
  }
}

.btn {
  width: 100%;
  height: 45px;
  background-color: #fff;
  display: flex;
  justify-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  .btn-left {
    display: flex;
    justify-items: center;
    line-height: 45px;
    margin-left: 16px;
    .btn-left-one {
      font-size: 14px;
    }
    .btn-left-two {
      font-size: 14px;
      color: #f55e68;
    }
  }
  .btn-right {
    margin-right: 16px;
    margin-top: 7px;
  }
}
</style>
