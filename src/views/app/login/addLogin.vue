<template>
  <div class="box" style="background-color: #fff; height: 100vh">
    <div class="onClickLeft" @click="onClickLeft">
      <img src="../../../assets/img/icon_cancel.png" alt="" />
    </div>

    <div style="margin-left: 35px">
      <div class="box-phone">
        <div class="phone">手机号绑定</div>
        <div class="phones">请绑定您的手机号</div>
      </div>

      <van-cell-group>
        <van-field
          v-model="account"
          clearable
          border
          name="手机号"
          placeholder="请输入手机号"
          :error-message="accountErr"
        />
        <van-field
          v-model="passWord"
          clearable
          border
          type="password"
          placeholder="请输入收到的短信验证码"
          :error-message="passWordErr"
        >
          <template #button>
            <div class="button" v-if="code" @click="onCode">获取验证码</div>
            <div v-if="times">
              <van-count-down auto-start :time="time">
                <template #default="timeData">
                  <span class="block">{{ timeData.seconds }} s</span>
                </template>
              </van-count-down>
            </div>
          </template>
        </van-field>
      </van-cell-group>

      <div class="button-img">
        <div @click="onBtn" v-if="btnOn">
          <img src="../../../assets/img/button_gray.png" alt="" />
        </div>
        <div @click="upBtn" v-if="btnUp">
          <img src="../../../assets/img/button-on.png" alt="" />
        </div>
      </div>

      <div class="box-bind">
        <div @click="bindOn" v-if="onBind">
          <img src="../../../assets/img/icon_un.png" alt="" />
        </div>
        <div @click="bindUp" v-if="upBind">
          <img src="../../../assets/img/icon_select.png" alt="" />
        </div>
        <div class="box-bind-text">
          <span>绑定即代码您同意</span>《用户协议》
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { isEmpty, isPhone, isSixNumberCode } from "@/utils/validate";
import { login } from "@/api/user";
import { setToken } from "@/utils/auth";
import { Toast } from "vant";
export default {
  data() {
    return {
      account: "",
      passWord: "",
      accountErr: "",
      passWordErr: "",
      loading: true,
      redirect: this.$route.query.redirect,
      time: 60 * 10 * 10 * 10,
      code: true,
      times: false,
      btnOn: true,
      btnUp: false,
      onBind: true,
      upBind: false,
      // 我擦 页面呢
    };
  },
  created() {
    console.log("567890-");
    this.login()
  },
  methods: {
    async login() {
      const res = await login();
      console.log(res);
    },
    onClickLeft() {
      this.$router.push("/login");
    },

    // 获取验证码
    onCode() {
      this.code = false;
      this.times = true;
    },

    // 绑定按钮
    onBtn() {
      this.btnUp = true;
      this.btnOn = false;
    },

    async upBtn() {
      if (this.upBind) {
        this.accountErr = "";
        this.passWordErr = "";
        this.loading = true;
        if (!isEmpty(this.account)) {
          this.accountErr = "手机号码不能为空";
          this.loading = false;
          return;
        }
        if (!isPhone(this.account)) {
          this.accountErr = "手机号码格式不对";
          this.loading = false;
          return;
        }

        if (!isEmpty(this.passWord)) {
          this.passWordErr = "验证码不能为空";
          this.loading = false;
          return;
        }
        if (!isSixNumberCode(this.passWord)) {
          this.passWordErr = "验证码格式不对";
          this.loading = false;
          return;
        }

        let data = {
          account: this.account,
          passWord: this.passWord,
        };
        let res = await login(data);

        if (res) {
          setToken(res.data.token);
          this.loading = false;
          this.$router.push({ path: this.redirect || "/" });
        }
      } else {
        Toast("请勾选用户协议");
      }
    },

    bindOn() {
      this.onBind = false;
      this.upBind = true;
    },
    bindUp() {},
  },
};
</script>

<style lang="less" scoped>
.box {
  height: 100vh;
  z-index: 9;
  position: relative;
}

.onClickLeft {
  margin-left: 16px;
  margin-top: 16px;
}

.box-phone {
  margin-top: 20px;
  .phone {
    font-size: 22px;
    font-weight: 700;
  }
  .phones {
    color: #999;
    margin-top: 20px;
    margin-bottom: 30px;
  }
}

/deep/.van-cell {
  padding: 10px;
}
.button {
  color: #f55e68;
}

.block {
  color: #f55e68;
  margin-right: 20px;
}

.button-img {
  margin-top: 50px;
}

.box-bind {
  display: flex;
  justify-items: center;
  justify-content: center;
  margin-top: 20px;
  img {
    margin-left: -20px;
  }
  .box-bind-text {
    margin-top: 1px;
    span {
      color: #999;
    }
  }
}
</style>
