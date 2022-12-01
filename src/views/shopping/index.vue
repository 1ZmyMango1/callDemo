<template>
  <div class="con" style="background-color: #F5F5F5;height:100vh">
    <van-nav-bar
      title="购物车"
      placeholder
    />
    <!-- 购物车列表 -->
    <div class="top">
      <div class="header">
        <div class="fl" style="font-size:18px">
          购物车
        </div>
        <div class="fr" @click="filterBtn">
          管理
        </div>
      </div>
      <div class="list">
        <div>
          <div class="list_left" v-for="(item,index) in shopList" :key="index">
            <div class="checkBox fl">
              <van-checkbox v-model="item.isSelected" @change="btnHandel($event,index)"></van-checkbox>
            </div>
            <div class="dec fl">
              <span>{{item.name}}</span>
            </div>

            <div class="stepAdd fr">
              <!-- <van-stepper v-model="item.num" @plus='add(index)' @minus='del(index)' async-change @change="onChange($event,index)" theme="round" button-size="22" disable-input /> -->
              <van-stepper v-model="item.num" @plus='add(index)' @minus='del(index)' async-change theme="round"
                button-size="22" disable-input />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部付款区域 -->
    <div class="footer">
      <div class="left fl">
        <van-checkbox v-model="selAll" @click='changeVal'>全选</van-checkbox>
      </div>
      <div class="fr rigth" v-if="this.btnFlag">
        <div class="allPrice fl">
          总价: <span style="color:red;font-size:18px">{{allPrice}}</span>
        </div>
        <div class="handelPrice fl">
          <van-button class="btn" round type="info">付款</van-button>
        </div>
      </div>
      <div class="fr rigth_del" v-else>
        <van-button class="btn" round type="danger" @click="delGoods">删除</van-button>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    Toast
  } from 'vant';


  export default {
    name: 'shopping',
    data() {
      return {
        selAll: false,
        allPrice: 0,
        btnFlag: true,
        timer: null,
        shopList: [{
            id: '0',
            name: '这是一件商品1',
            num: 1,
            price: '198',
            isSelected: false
          },
          {
            id: '1',
            name: '这是一件商品2',
            num: 1,
            price: '198',
            isSelected: false
          },
          {
            id: '2',
            name: '这是一件商品3',
            num: 1,
            price: '138',
            isSelected: false
          },
          {
            id: '3',
            name: '这是一件商品4',
            num: 1,
            price: '298',
            isSelected: false
          },
          {
            id: '4',
            name: '这是一件商品5',
            num: 1,
            price: '178',
            isSelected: false
          },
          {
            id: '5',
            name: '这是一件商品6',
            num: 1,
            price: '568',
            isSelected: false
          }
        ]
      }
    },
    created() {
      this.initPrice()
    },
    methods: {
      // 初始化用户选中的物品
      initPrice() {
        this.shopList.filter((e) => e.isSelected).forEach(e => this.allPrice += Number(e.price * e.num))
      },
      // 全选
      changeVal() {
        this.shopList.forEach(e => {
          e.isSelected = this.selAll
        })
      },
      //   注意，切换删除按钮的时候要重新拉取下用户的购物车数据
      filterBtn() {
        this.btnFlag = !this.btnFlag
        if (!this.btnFlag) {
          this.shopList.forEach(e => {
            e.isSelected = false
          })
        }
      },
      //   异步添加商品数量
      onChange(val, index) {
        Toast.loading({
          forbidClick: true
        });
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          Toast.clear();
        }, 1000);
      },
      //   选中商品计算价格
      btnHandel(flag, i) {
        this.$set(this.shopList[i], 'isSelected', flag)
        let allSEl=this.shopList.filter(e=>!e.isSelected)
        allSEl.length=='0'?this.selAll=true:this.selAll=false
        flag ? this.allPrice += Number(this.shopList[i].price * this.shopList[i].num) : this.allPrice -= Number(this
          .shopList[i].price * this.shopList[i].num)
      },
      //   增加
      add(index) {
        if (this.shopList[index].isSelected) {
          this.allPrice += Number(this.shopList[index].price)
        }
      },
      //   减少
      del(index) {
        if (this.shopList[index].isSelected) {
          this.allPrice -= Number(this.shopList[index].price)
        }
      },
      //   删除购物车的物品
      delGoods() {
        let selArr = []
        selArr = this.shopList.filter(e => e.isSelected)
        if (selArr.length == '0') {
          Toast('请选中物品')
          return
        }
        for (let i = 0; i < this.shopList.length; i++) {
          const e = this.shopList[i];
          for (let j = 0; j < selArr.length; j++) {
            const el = selArr[j];
            if(e.id==el.id){
                this.shopList.splice(i,1)
            }
          }
        }
      }
    }
  }

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
        height: 50px;

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
  }

  .fr {
    float: right;
  }

  .con {
    box-sizing: border-box;
    overflow: hidden;
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
    border-top: 1px solid hotpink;
    border-bottom: 1px solid hotpink;

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
    }
  }
/deep/.van-nav-bar__title {
  font-size: 0.52667rem;
}
</style>
