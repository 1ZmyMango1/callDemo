<template>
  <div class="box">
    <div>
      <van-nav-bar title="分销推广" left-arrow @click-left="onClickLeft" />
    </div>

    <div class="boxs">
      <div class="user-info">
        <!-- 头像 -->
        <div class="box-img">
          <img
            style="width: 80px; height: 80px"
            src="../../../assets/img/head.png"
            alt=""
          />
        </div>

        <div class="user-name">
          <div>房东的猫</div>
          <div>我的邀请人：8</div>
        </div>
      </div>

      <!-- 收益 -->
      <div class="earnings">
        <div class="earnings-one">
          <div>199</div>
          <div>今日收益</div>
        </div>
        <div class="earnings-one">
          <div>1999</div>
          <div>本月收益</div>
        </div>
        <div class="earnings-one">
          <div>88888</div>
          <div>累计收益</div>
        </div>
      </div>

      <!-- 粉丝 -->
      <div class="bean-vermicelli">
        <div class="bean-vermicelli-left">
          <div class="bean-vermicelli-img"><img src="../../../assets/img/icon_fans.png" alt="" /></div>
          <div class="bean-vermicelli-text">我的粉丝</div>
        </div>
        <div class="bean-vermicelli-left">
          <div class="bean-vermicelli-img"><img src="../../../assets/img/icon_  invitation.png" alt="" /></div>
          <div class="bean-vermicelli-text">邀请粉丝</div>
        </div>
      </div>

      <!-- 常用工具 -->
      <div class="work">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;常用工具</div>
      <div class="instrument">
        <div class="instrument-box">
            <div class="instrument-img"><img src="../../../assets/img/icon_posters.png" alt="" /></div>
            <div class="instrument-text">邀请海报</div>
        </div>
        <div class="instrument-box">
            <div class="instrument-img"><img src="../../../assets/img/icon_distri.png" alt="" /></div>
            <div class="instrument-text">分销订单</div>
        </div>
        <div class="instrument-box">
            <div class="instrument-img"><img src="../../../assets/img/icon_bill.png" alt="" /></div>
            <div class="instrument-text">月度账单</div>
        </div>
      </div>
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
.box {
  overflow: hidden;
  width: 100%;
  height: 100vh;
  background: url(../../../assets/img/bg.png) no-repeat;
  background-size: cover;
  z-index: 9;
  position: relative;
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

.boxs {
  margin: 0 16px;
}

.user-info {
  display: flex;
  justify-items: center;
  .box-img {
    margin-top: 20px;
  }
  .user-name {
    margin-top: 30px;
    margin-left: 15px;
    div:nth-child(1) {
      font-size: 20px;
      font-weight: 700;
    }
    div:nth-child(2) {
      font-size: 12px;
      margin-top: 20px;
    }
  }
}

.earnings {
  display: flex;
  justify-items: center;
  justify-content: space-around;
  .earnings-one {
    margin-top: 15px;
    div:nth-child(1) {
      text-align: center;
      font-size: 20px;
    }
    div:nth-child(2) {
      text-align: center;
      margin-top: 5px;
    }
  }
}

.bean-vermicelli {
  display: flex;
  justify-items: center;
  justify-content: space-around;
  width: 100%;
  height: 51px;
  background-color: #fff;
  border-radius: 10px;
  margin: 20px 0;
  .bean-vermicelli-left {
    display: flex;
    align-items: center;
    .bean-vermicelli-img {
      width: 40px;
      height: 40px;
    line-height: 51px;
    }
    .bean-vermicelli-text {
      line-height: 51px;
      font-size: 12px;
    }
  }
}

.work {
    width: 100%;
    height: 30px;
    background-color: #fff;
    border-radius: 10px 10px 0 0;
    font-size: 20px;
    font-weight: 700;
    padding-top: 10px;
}

.instrument {
    display: flex;
    justify-items: center;
    justify-content: space-around;
    height: 100px;
    width: 100%;
    background-color: #fff;
    border-radius:0 0 10px 10px;
    .instrument-box {
        margin-top: 10px;
        .instrument-text {
            font-size: 12px;
            margin-top: 3px;
        }
    }
}
</style>
