<template>
  <div class="box" style="background-color: #fff; height: 100vh">
    <div class="boxs">
      <div class="box-head">
        <div class="box-heads">
          <div @click="$router.push('/my')"><img src="../../../assets/img/icon_back.png" alt="" /></div>
          <div class="box-head-text">会员中心</div>
        </div>

        <div class="box-img">
          <div class="box-imgs">
            <img src="../../../assets/img/head.png" alt="" />
          </div>
          <div>
            <div class="box-img-text">房东的猫</div>
            <div class="box-img-texts">当前等级: 无</div>
          </div>
        </div>

        <div class="box-swipe">
          <van-swipe
            :loop="false"
            :width="333"
            indicator-color="#fff"
            touchable
          >
            <van-swipe-item>
              <img src="../../../assets/img/Group 00.png" alt="" />
            </van-swipe-item>
            <van-swipe-item>
              <img src="../../../assets/img/card2_level.png" alt="" />
            </van-swipe-item>
            <van-swipe-item>
              <img src="../../../assets/img/card3_level.png" alt="" />
            </van-swipe-item>
          </van-swipe>
        </div>

        <div class="up">
          <div class="up-title">成长值规则</div>
          <div class="up-text">
            会员每日签到，赠送2成长值；会员连续签到4天，赠送20成长值；会员连续签到8天，赠送40成长值；会员连续签到10天，赠送80成长值；会员连续签到12天，赠送120成长值。
          </div>
        </div>

        <div class="up">
          <div class="up-title">会员权益</div>
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
  methods: {},
};
</script>

<style lang="less" scoped>
.box {
  position: relative;
  z-index: 9;
  height: 100vh;
  background-color: #fff;
}
.box-head {
  background: url(../../../assets/img/bg_black.png) no-repeat;
  height: 100vh;
  width: 100%;
  background-size: 100%;
  .box-heads {
    display: flex;
    img {
      margin-left: 16px;
      margin-top: 10px;
    }
    .box-head-text {
      font-size: 20px;
      color: #fff;
      font-weight: 700;
      width: 100%;
      text-align: center;
      margin-top: 10px;
    }
  }
  .box-img {
    display: flex;
    justify-items: center;
    margin-left: 16px;
    margin-top: 20px;
    .box-imgs {
      width: 56px;
      height: 56px;
      // background-color: #fff;
      border-radius: 50%;
      img {
        width: 56px;
        height: 56px;
      }
    }
    .box-img-text {
      font-size: 18px;
      font-weight: 700;
      color: #fff;
      margin-left: 10px;
      margin-top: 8px;
    }
    .box-img-texts {
      color: #999;
      margin-left: 10px;
      margin-top: 10px;
    }
  }

  .box-swipe {
    margin-left: 16px;
    margin-top: 30px;
    margin-right: 16px;
  }

  .up {
    margin-top: 50px;
    margin-left: 16px;
    .up-title {
      font-size: 18px;
      font-weight: 700;
    }
    .up-text {
      color: #999;
      margin-right: 16px;
      margin-top: 10px;
      font-size: 15px;
    }
  }
}
</style>
