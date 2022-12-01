<template>
  <div class="login">
    <div class="login-from">
      <div class="title"><img src="../../../assets/img/logo.png" alt=""></div>
      <div class="body">
        <van-cell-group>

        <div class="button">
          <!-- <van-button type="primary" @click="tologin" :loading="loading" block round>登录</van-button> -->
          <img src="../../../assets/img/button_wechat.png" alt="" >
          <img src="../../../assets/img/button_phone.png" alt="" @click="$router.push('login/addLogin')">
        </div>

        <div class="ok">
          <img src="../../../assets/img/icon_choose.png" alt="">
          <div class="ok-text"><span>同意</span>《用户协议》<span>和</span>《隐私政策》</div>
        </div>
      </van-cell-group>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  metaInfo: {
    title: '用户登录'
  },
  data() {
    return {
    }
  },
  mounted() {},
  methods: {
  }
}
</script>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  // background-image: url('../../../assets/login/bg.png');
  background-size: cover;
}
.title {
  margin: 0px auto 200px auto;
  text-align: center;
  color: #707070;
  font-size: 16px;
}
.login-from {
  border-radius: 6px;
  background: #ffffff;
  width: 80%;
  padding: 15px;
}

.button {
  width: 100%;
  text-align: center;
  img:nth-child(2) {
    margin: 20px auto;
  }
}

.ok {
  display: flex;
  justify-items: center;
  width: 100%;
  justify-content: center;
  .ok-text {
    margin-top: 3px;
    margin-left: 3px;
    span {
      color: #999;
    }
  }
}

</style>