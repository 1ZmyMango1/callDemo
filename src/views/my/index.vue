<template>
  <div class="box">
    <div style="margin: 0 16px">
      <div class="box-set">
        <span @click='$router.push("/my/message")'><img src="../../assets/img/icon-note.png" alt="" /></span>
        <span @click="$router.push('/my/setting')"><img src="../../assets/img/icon_set.png" alt="" /></span>
      </div>

      <div class="box-img">
        <div><img :src="img" alt="" /></div>
        <div class="box-user-info">
          <div class="user-info">{{nickname}}</div>
          <div class="user-info-id">会员ID：{{id}}</div>
        </div>
      </div>

      <div class="member-box" @click="$router.push('/my/member')">
        <div class="member"></div>
        <div class="member-v">
          <img src="../../assets/img/picture.png" alt="" />
          <div class="member-text">普通会员</div>
        </div>

        <div class="member-right">
          <div class="member-right-img">
            <span>距离升级还差2000 </span>
            <div class="member-right-icon">
              <img src="../../assets/img/icon6.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div class="property">
        <div class="property-title">我的资产</div>
        <div class="property-concent">
          <div class="property-one">
            <span>{{balance}}</span>
            <div class="property-text">余额</div>
          </div>
          <div class="property-one">
            <span>{{commodity}}</span>
            <div class="property-text">商品1</div>
          </div>
          <div class="property-one">
            <span>{{commodityS}}</span>
            <div class="property-text">商品2</div>
          </div>
        </div>
      </div>

      <div class="order" @click="$router.push('/my/order')">
        <div class="order-title">
          我的订单
          <span>全部订单 ></span>
        </div>
        <div class="order-content">
          <div>
            <img src="../../assets/img/icon1.png" alt="" />
            <div class="order-text">待支付</div>
          </div>
          <div>
            <img src="../../assets/img/icon2.png" alt="" />
            <div class="order-text">代发货</div>
          </div>
          <div>
            <img src="../../assets/img/icon3.png" alt="" />
            <div class="order-text">待收货</div>
          </div>
          <div>
            <img src="../../assets/img/icon4.png" alt="" />
            <div class="order-text">待评价</div>
          </div>
          <div>
            <img src="../../assets/img/icon5.png" alt="" />
            <div class="order-text">退款售后</div>
          </div>
        </div>
      </div>

      <div class="myFunction">
        <div class="myFunction-title">我的功能</div>
        <div class="myFunction-content">
          <div @click="$router.push('/my/wallet')">
            <img src="../../assets/img/icon_mony.png" alt="" />
            <div class="myFunction-text">我的钱包</div>
          </div>
          <div @click="$router.push('/my/promotion')">
            <img src="../../assets/img/icon_friend.png" alt="" />
            <div class="myFunction-text">好友列表</div>
          </div>
          <div @click="$router.push('/my/address')">
            <img src="../../assets/img/icon_addres.png" alt="" />
            <div class="myFunction-text">收货地址</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { userlLogin } from "@/api/user";
export default {
  data() {
    return {
      nickname:'',//昵称
      id:'',//会员id
      balance:'',//余额
      commodity:'',//商品1
      commodityS:'',//商品2
      img:'', //头像
    };
  },
  created(){
    this.userlLogin()
  },
  methods: {
    async userlLogin(){
      let res = await userlLogin()
      console.log(res);
      this.balance = res.data.wallet
      this.commodity = res.data.son_ticket_num
      this.commodityS = res.data.ticket_num
      this.nickname = res.data.nickname
      this.id = res.data.id
      this.img = res.data.head_pic;
    }
  },
};
</script>

<style lang="less" scoped>
.box {
  overflow: hidden;
  width: 100%;
  height: 100vh;
  background: url(../../assets/img/bg.png) no-repeat;
  background-size: cover;
}

.box-set {
  margin-left: 275px;
  margin-top: 15px;
  span:nth-child(2) {
    margin-left: 20px;
  }
}
.box-img {
  img {
    height: 56px;
    width: 56px;
  }
  display: flex;
  justify-items: center;
  .box-user-info {
    margin-top: 7px;
    margin-left: 10px;
    .user-info {
      font-size: 18px;
      font-weight: 700;
    }
    .user-info-id {
      font-size: 13px;
      margin-top: 10px;
      color: #999999;
    }
  }
}

.member-box {
  position: relative;
}
.member {
  margin-top: 13px;
  height: 84px;
  width: 100%;
  background: url(../../assets/img/bg_dark.png) no-repeat;
  background-size: cover;
}
.member-v {
  margin-top: 10px;
  position: absolute;
  top: 10px;
  left: 40px;
  font-size: 16px;
  .member-text {
    color: #fae5ae;
    font-size: 17px;
    margin-top: 6px;
    margin-left: -20px;
  }
}
.member-right {
  position: absolute;
  right: 20px;
  top: 20px;
  .member-right-img {
    background: url(../../assets/img/bg_box.png) no-repeat;
    background-size: cover;
    height: 30px;
    width: 133px;
    span {
      color: #593e13;
      font-size: 12px;
      line-height: 32px;
      margin-left: 3px;
    }
  }
  .member-right-icon {
    width: 13px;
    height: 13px;
    background-color: #593e13;
    border-radius: 50px;
    position: absolute;
    top: 8px;
    right: 10px;
    img {
      padding-left: 3px;
      padding-top: 2px;
      width: 6px;
      height: 9px;
    }
  }
}

.property {
  height: 114px;
  width: 100%;
  background-color: #fff;
  margin-top: 20px;
  .property-title {
    font-size: 20px;
    padding-top: 16px;
    margin-left: 16px;
    font-weight: 700;
  }
  .property-concent {
    display: flex;
    justify-items: center;
    justify-content: space-around;
    margin-top: 15px;
    .property-one {
      text-align: center;
      span {
        font-size: 20px;
      }
      .property-text {
        font-size: 12px;
        margin: 10px 5px;
      }
    }
  }
}

.order {
  height: 114px;
  width: 100%;
  background-color: #fff;
  margin-top: 20px;
  .order-title {
    font-size: 20px;
    padding-top: 16px;
    margin-left: 16px;
    font-weight: 700;
    span {
      font-size: 12px;
      float: right;
      margin-top: 7px;
      margin-right: 10px;
      color: #999999;
    }
  }
  .order-content {
    display: flex;
    justify-items: center;
    justify-content: space-around;
    margin-top: 18px;
    img {
      // margin: 8px;
      margin-left: 8px;
    }
    .order-text {
      margin-top: 10px;
      font-size: 12px;
    }
  }
}

.myFunction {
  height: 114px;
  width: 100%;
  background-color: #fff;
  margin-top: 20px;
  .myFunction-title {
    font-size: 20px;
    padding-top: 16px;
    margin-left: 16px;
    font-weight: 700;
  }
  .myFunction-content {
    display: flex;
    justify-items: center;
    justify-content: space-around;
    margin-top: 18px;
    img {
      margin-left: 12px;
    }
    .myFunction-text {
      margin-top: 10px;
      font-size: 12px;
    }
  }
}
</style>
