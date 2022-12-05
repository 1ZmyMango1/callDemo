<template>
  <div class="con" style="background-color: #f5f5f5; height: 100vh">
    <div class="con-shopping">购物车</div>
    <!-- 购物车列表 -->
    <div class="top">
      <div class="header">
        <!-- <div class="fl" style="font-size:18px">
          购物车
        </div> -->
        <div class="fr" @click="filterBtn">
          <img src="../../assets/img/icon_delete.png" alt="" />
        </div>
      </div>
      <div class="list">
        <div>
          <div class="list_left" v-for="(item, index) in shopList" :key="index">
            <div class="checkBox fl">
              <van-checkbox
                checked-color="#F55E68"
                v-model="item.isSelected"
                @change="btnHandel($event, index, item)"
              ></van-checkbox>
            </div>
            <div class="dec fl">
              <!-- <span>{{ item.name }}</span> -->
              <div>
                <img
                  :src="item.goods_image"
                  alt=""
                  style="width: 106px; height: 106px"
                />
              </div>
            </div>

            <div class="con-title">
              <div>{{ item.goods_name }}</div>
            </div>

            <div class="con-def">默认</div>

            <div class="con-price">￥{{ item.goods_price }}</div>

            <div class="stepAdd fr">
              <!-- <van-stepper v-model="item.num" @plus='add(index)' @minus='del(index)' async-change @change="onChange($event,index)" theme="round" button-size="22" disable-input /> -->
              <van-stepper
                min="6"
                v-model="item.buy_num"
                @plus="add(item, index)"
                @minus="del(item, index)"
                async-change
                theme="round"
                button-size="22"
                disable-input
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部付款区域 -->
    <div class="footer">
      <div class="left fl">
        <van-checkbox
          checked-color="#F55E68"
          v-model="selAll"
          @click="changeVal"
          >全选</van-checkbox
        >
      </div>
      <div class="fr rigth" v-if="this.btnFlag">
        <div class="allPrice fl">
          合计 : <span style="color: red; font-size: 18px">{{ allPrice }}</span>
        </div>
        <div class="handelPrice fl" @click="okShopping">
          <van-button class="btn" round>去结算</van-button>
        </div>
      </div>
      <div class="fr rigth_del" v-else>
        <van-button class="btn" round type="danger" @click="delGoods"
          >删除</van-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { getCart, editNum, clearCart } from "@/api/user";
export default {
  name: "shopping",
  data() {
    return {
      selAll: false,
      allPrice: 0,
      btnFlag: true,
      timer: null,
      isSelected: false,
      shopList: [],
      itemList: [], //购物车数据
      list: [],
    };
  },
  created() {
    this.initPrice();
    this.getCart();
  },
  methods: {
    // 初始化用户选中的物品
    initPrice() {
      this.shopList
        .filter((e) => e.isSelected)
        .forEach((e) => (this.allPrice += Number(e.price * e.num)));
    },
    // 全选
    changeVal() {
      this.shopList.forEach((e) => {
        e.isSelected = this.selAll;
      });
    },
    //  注意，切换删除按钮的时候要重新拉取下用户的购物车数据
    filterBtn() {
      this.btnFlag = !this.btnFlag;
      if (!this.btnFlag) {
        this.shopList.forEach((e) => {
          e.isSelected = false;
        });
      }
    },
    //   异步添加商品数量
    onChange(val, index) {
      Toast.loading({
        forbidClick: true,
      });
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        Toast.clear();
      }, 1000);
    },
    // 选中商品计算价格
    btnHandel(flag, i, item) {
      console.log(flag, i, item);
      this.list = item;
      this.$set(this.shopList[i], "isSelected", flag);
      let allSEl = this.shopList.filter((e) => !e.isSelected);
      allSEl.length == "0" ? (this.selAll = true) : (this.selAll = false);
      flag
        ? (this.allPrice += Number(
            this.shopList[i].goods_price * this.shopList[i].buy_num
          ))
        : (this.allPrice -= Number(
            this.shopList[i].goods_price * this.shopList[i].buy_num
          ));
    },
    // 增加
    async add(item, index) {
      let newNum = this.shopList[index].buy_num + 5;
      this.$set(this.shopList[index], "buy_num", newNum);
      try {
        let data = {
          goods_id: this.shopList[index].goods_id,
          edit_type: 1,
        };
        let res = await editNum(data);
        if (item.isSelected) {
          let price = this.shopList[index].goods_price;
          this.allPrice = this.allPrice + price * 6;
        }
      } catch (error) {}
    },
    // 减少
    async del(item, index) {
      let newNum = this.shopList[index].buy_num - 5;
      this.$set(this.shopList[index], "buy_num", newNum);
      try {
        let data = {
          goods_id: this.shopList[index].goods_id,
          edit_type: 0,
        };
        let res = await editNum(data);
        if (item.isSelected) {
          let price = this.shopList[index].goods_price;
          this.allPrice = this.allPrice - price * 6;
        }
      } catch (error) {}
    },
    //   删除购物车的物品
    async delGoods() {
      let selArr = [];
      selArr = this.shopList.filter((e) => e.isSelected);
      if (selArr.length == "0") {
        Toast("请选中商品");
        return;
      }
      for (let i = 0; i < this.shopList.length; i++) {
        const e = this.shopList[i];
        for (let j = 0; j < selArr.length; j++) {
          const el = selArr[j];
          if (e.id == el.id) {
            this.shopList.splice(i, 1);
          }
        }
      }
      console.log(selArr);

      let data = {
        del_type: 0,
        goods_ids: [this.list.goods_id],
      };
      let res = await clearCart(data);
    },

    // 去结算按钮
    okShopping() {
      if (this.list.length == "0") {
        Toast("请选择商品");
        if (this.list.length > "1") {
          Toast("只能选择一件商品哦！");
        }
      } else {
       let list = JSON.stringify(this.list)
        this.$router.push({
          path: "/my/okShopping",
          query: {
            list: list,
          },
        });
      }
    },

    // 获取购物车数据
    async getCart() {
      try {
        let res = await getCart();
        // console.log(res);
        let arr = res.data;
        arr.map((e) => {
          e.isSelected = false;
          return e;
        });
        this.shopList = arr;
      } catch (error) {}
    },
  },
};
</script>

<style lang="less" scoped>
.top {
  .header {
    width: 100%;
    height: 30px;
    box-sizing: border-box;
    padding: 20px 10px;
    overflow: hidden;
  }

  .list {
    box-sizing: border-box;
    padding: 20px 10px;
    height: 100%;
    overflow-y: auto;

    .list_left {
      height: 108px;
      margin-bottom: 10px;
      .checkBox {
        width: 50px;
        height: 50px;

        .van-checkbox {
          padding: 12.5px 14px;
        }
      }

      .dec {
        height: 50px;
        line-height: 50px;
        text-align: center;
      }

      .stepAdd {
        height: 50px;
        line-height: 50px;
      }
    }
  }
}

.fl {
  float: left;
  font-size: 15px;
}

.fr {
  float: right;
}

.con {
  box-sizing: border-box;
  overflow: hidden;
  height: 100vh;
  background: url(../../assets/img/bg.png) no-repeat;
  background-size: cover;
}

.top {
  width: 100%;
}

.footer {
  height: 40px;
  line-height: 40px;
  width: 100%;
  position: fixed;
  box-sizing: border-box;
  bottom: 50px;
  left: 0;
  // border-top: 1px solid #F55E68;
  // border-bottom: 1px solid #F55E68;

  .left {
    width: 100px;
    height: 100%;
    line-height: 40px;
    padding: 10px;
  }

  .rigth {
    width: 180px;
    height: 40px;
    line-height: 40px;

    .allPrice {
      width: 52%;
      height: 100%;
    }

    .handelPrice {
      width: 48%;
      height: 100%;
      margin: -5px 0 0 0;
    }
  }

  .rigth_del {
    margin: -5px 5px 0 0;
  }

  .btn {
    width: 80px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    background-color: #f55e68;
  }
}
/deep/.van-nav-bar__title {
  font-size: 0.52667rem;
}
/deep/.van-stepper--round .van-stepper__plus {
  background-color: #f55e68;
}

.con-shopping {
  width: 100%;
  text-align: center;
  margin-top: 10px;
  font-size: 20px;
  font-weight: 700;
}

.con-title {
  font-size: 16px;
  margin-left: 160px;
}
.con-def {
  font-size: 14px;
  color: #999;
  padding-left: 160px;
  margin: 8px 0;
}
.con-price {
  font-size: 16px;
  margin-left: 155px;
}
</style>
