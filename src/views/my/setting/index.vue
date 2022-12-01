<template>
  <div class="box">
    <van-nav-bar title="设置" left-arrow @click-left="onClickLeft" />

    <!-- 头像 -->
    <div class="box-img">
      <img
        style="width: 80px; height: 80px"
        src="../../../assets/img/head.png"
        alt=""
      />
    </div>

    <!-- 信息 -->
    <!-- 昵称 -->
    <van-cell title="昵称" is-link @click="alterName">
      <template #default>
        <div>{{ name }}</div>
      </template>
    </van-cell>
    <!-- 性别 -->
    <van-cell title="性别" is-link @click="upSex">
      <template #default>
        <!-- <div>未设置</div> -->
        <div>{{ sex }}</div>
      </template>
    </van-cell>
    <!-- 手机号 -->
    <van-cell title="手机号" is-link @click="alterPhone">
      <template #default>
        <div>{{ phone }}</div>
      </template>
    </van-cell>
    <!-- 实名认证 -->
    <van-cell title="实名认证" is-link @click="alterRealname">
      <template #default>
        <div>{{ realname }}</div>
      </template>
    </van-cell>
    <!-- 登录密码 -->
    <van-cell title="登录密码" is-link @click="alterPassword">
      <template #default>
        <div>点击设置</div>
      </template>
    </van-cell>
    <!-- 交易密码 -->
    <van-cell title="交易密码" is-link>
      <!-- <template #default>
        <div>未实名</div>
      </template> -->
    </van-cell>
    <!-- 服务协议 -->
    <van-cell title="服务协议" is-link>
      <!-- <template #default>
        <div>未实名</div>
      </template> -->
    </van-cell>
    <!-- 隐私政策 -->
    <van-cell title="隐私政策" is-link>
      <!-- <template #default>
        <div>未实名</div>
      </template> -->
    </van-cell>

    <div class="box-button">
      <div class="button" @click="button">
        <img src="../../../assets/img/button.png" alt="" />
      </div>
    </div>

    <!-- 性别 -->
    <van-popup v-model="showPicker" round position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>

    <!-- 修改昵称 -->
    <van-overlay :show="showName">
      <div class="wrapper" @click.stop>
        <div class="block">
          <div class="block-name">修改用户名</div>
          <div class="block-input">
            <van-cell-group>
              <van-field v-model="textName" placeholder="请输入新的昵称">
                <template #label>
                  <div style="font-size: 16px">新昵称</div>
                </template>
              </van-field>
            </van-cell-group>
          </div>
          <div class="block-img">
            <img
              @click="okName"
              src="../../../assets/img/button_right.png"
              alt=""
            />
          </div>
          <div class="block-cancel">
            <img
              @click="cancelName"
              src="../../../assets/img/icon_cancels.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </van-overlay>

    <!-- 修改手机号 -->
    <van-overlay :show="showphone">
      <div class="wrapper" @click.stop>
        <div class="phone">
          <div class="phone-name">更换手机号</div>
          <div class="phone-input">
            <van-cell-group>
              <van-field v-model="textPhone">
                <template #label>
                  <div style="font-size: 16px">+86</div>
                </template>
              </van-field>
            </van-cell-group>
            <van-cell-group>
              <van-field v-model="textCode" placeholder="请输入验证码">
                <template #label>
                  <div style="font-size: 16px; margin-top: 5px">验证码</div>
                </template>
                <template #button>
                  <div v-if="phoneCode" @click="codePhone">
                    <img src="../../../assets/img/button_get.png" alt="" />
                  </div>
                  <div v-if="phoneCodes">
                    <van-count-down auto-start :time="time">
                      <template #default="timeData">
                        <span class="block">{{ timeData.seconds }} s</span>
                      </template>
                    </van-count-down>
                  </div>
                </template>
              </van-field>
            </van-cell-group>
            <van-cell-group>
              <van-field
                v-model="textPhoneChange"
                placeholder="请输入新的手机号码"
              >
                <template #label>
                  <div style="font-size: 16px">新手机号</div>
                </template>
              </van-field>
            </van-cell-group>
          </div>
          <div class="phone-change">
            更改手机号码成功后，您的账号将会变更为该号码
          </div>
          <div class="phone-img">
            <img
              @click="okPhone"
              src="../../../assets/img/button_right.png"
              alt=""
            />
          </div>
          <div class="phone-cancel">
            <img
              @click="cancelPhone"
              src="../../../assets/img/icon_cancels.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </van-overlay>

    <!-- 修改实名认证 -->
    <van-overlay :show="showRealname">
      <div class="wrapper" @click.stop>
        <div class="realname">
          <div class="realname-name">实名认证</div>
          <div class="realname-input">
            <van-cell-group>
              <van-field v-model="textRealname" placeholder="请输入真实姓名">
                <template #label>
                  <div style="font-size: 16px">姓名</div>
                </template>
              </van-field>
            </van-cell-group>
            <van-cell-group>
              <van-field v-model="textIdNumber" placeholder="请输入身份证号">
                <template #label>
                  <div style="font-size: 16px">身份证号</div>
                </template>
              </van-field>
            </van-cell-group>
          </div>
          <div class="realname-img">
            <img
              @click="okRealname"
              src="../../../assets/img/button_right.png"
              alt=""
            />
          </div>
          <div class="realname-cancel">
            <img
              @click="cancelRealname"
              src="../../../assets/img/icon_cancels.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </van-overlay>

    <!-- 修改设置密码 -->
    <van-overlay :show="showpassword">
      <div class="wrapper" @click.stop>
        <div class="password">
          <div class="password-name">设置密码</div>
          <div class="password-input">
            <van-cell-group>
              <van-field v-model="textPassword">
                <template #label>
                  <div style="font-size: 16px">+86</div>
                </template>
              </van-field>
            </van-cell-group>
            <van-cell-group>
              <van-field v-model="textPasswordCode" placeholder="请输入验证码">
                <template #label>
                  <div style="font-size: 16px; margin-top: 5px">验证码</div>
                </template>
                <template #button>
                  <div v-if="passwordCode" @click="codePassword">
                    <img src="../../../assets/img/button_get.png" alt="" />
                  </div>
                  <div v-if="passwordCodes">
                    <van-count-down auto-start :time="time">
                      <template #default="timeData">
                        <span class="block">{{ timeData.seconds }} s</span>
                      </template>
                    </van-count-down>
                  </div>
                </template>
              </van-field>
            </van-cell-group>
            <van-cell-group>
              <van-field
                v-model="textPasswordChange"
                placeholder="请输入新密码"
              >
                <template #label>
                  <div style="font-size: 16px">设置密码</div>
                </template>
              </van-field>
            </van-cell-group>
            <van-cell-group>
              <van-field
                v-model="textPasswordChanges"
                placeholder="再次输入新密码"
              >
                <template #label>
                  <div style="font-size: 16px">确认密码</div>
                </template>
              </van-field>
            </van-cell-group>
          </div>
          <div class="password-img">
            <img
              @click="okPassword"
              src="../../../assets/img/button_right.png"
              alt=""
            />
          </div>
          <div class="password-cancel">
            <img
              @click="cancelPassword"
              src="../../../assets/img/icon_cancels.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import { Toast } from "vant";
import { removeToken } from "@/utils/auth";
export default {
  data() {
    return {
      sex: "", //性别
      showPicker: "", //性别弹框
      showPicker: false, //性别的弹层
      columns: ["男", "女"],
      name: "", //昵称
      showName: false, //昵称
      textName: "", //昵称
      phone: "", //手机号
      showphone: false, //手机号
      textPhone: "", //老的手机号
      textCode: "", //验证码
      textPhoneChange: "", //新的手机号
      phoneCode: true,
      phoneCodes: false,
      time: 60 * 10 * 10 * 10,
      realname: "", //实名认证
      showRealname: false, //实名认证
      textRealname: "", //真实姓名
      textIdNumber: "", //身份证号
      showpassword: false, //设置密码
      textPassword: "", //密码
      textPasswordCode: "", //验证码
      textPasswordChange: "", //设置密码
      textPasswordChanges: "", //确认密码
      passwordCode: true,
      passwordCodes: false,
    };
  },
  created() {},
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.push("/my");
    },
    button() {
      removeToken();
      this.$router.push("/login");
    },

    onConfirm(value) {
      console.log(value);
      this.sex = value;
      this.showPicker = false;
    },
    upSex() {
      this.showPicker = true;
    },

    //修改昵称弹框
    alterName() {
      this.showName = true;
    },
    // 修改昵称确定按钮
    okName() {
      this.name = this.textName;
      if (this.name == "") {
        Toast("请填写昵称");
      } else {
        this.showName = false;
        this.textName = "";
      }
    },
    // 关闭修改昵称弹框
    cancelName() {
      this.showName = false;
      this.textName = "";
    },

    // 修改手机号弹框
    alterPhone() {
      this.showphone = true;
    },
    // 修改手机号确定按钮
    okPhone() {
      this.phone = this.textPhoneChange;
      if (this.textCode == "") {
        Toast("请填写验证码");
      } else if (this.textPhoneChange == "") {
        Toast("请填写新的手机号");
      } else {
        this.showphone = false;
        this.textPhoneChange = "";
        this.textPhone = "";
        this.textCode = "";
      }
    },
    // 关闭修改手机号弹框
    cancelPhone() {
      this.showphone = false;
      this.textPhoneChange = "";
      this.textPhone = "";
      this.textCode = "";
    },
    codePhone() {
      this.phoneCode = false;
      this.phoneCodes = true;
    },

    // 实名认证弹框
    alterRealname() {
      this.showRealname = true;
    },
    // 实名认证确定按钮
    okRealname() {
      this.realname = this.textRealname;
      if (this.textRealname == "") {
        Toast("请填写真实姓名");
      } else if (this.textIdNumber == "") {
        Toast("请填写身份证号");
      } else {
        this.showRealname = false;
      }
    },
    // 关闭修改实名认证弹框
    cancelRealname() {
      this.showRealname = false;
    },

    // 设置密码
    alterPassword() {
      this.showpassword = true;
    },
    // 设置密码确认按钮
    okPassword() {
      if (this.textPasswordCode == "") {
        Toast("请填写验证码");
      } else if (this.textPasswordChange == "") {
        Toast("请填写新密码");
      } else if (this.textPasswordChanges == "") {
        Toast("请填写确认密码");
      }
    },
    // 设置密码取消按钮
    cancelPassword() {
      this, (this.showpassword = false);
    },
    codePassword() {
      this.passwordCode = false;
      this.passwordCodes = true;
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
  width: 80px;
  height: 80px;
  // background-color: pink;
  border-radius: 50%;
  margin: 0 auto;
}

.box-button {
  width: 100%;
  height: 44px;
  .button {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 287px;
  height: 188px;
  background-color: #fff;
  border-radius: 10px;
  .block-name {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    margin-top: 15px;
    margin-bottom: 20px;
  }
  .block-img {
    text-align: center;
    margin: 20px 0;
  }
  .block-cancel {
    text-align: center;
    padding: 20px 0;
  }
}

.phone {
  width: 304px;
  height: 295px;
  background-color: #fff;
  border-radius: 10px;
  .phone-name {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    margin-top: 15px;
    margin-bottom: 20px;
  }
  .phone-change {
    color: #f55e68;
    margin-left: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .phone-img {
    text-align: center;
    margin-top: 20px;
  }
  .phone-cancel {
    text-align: center;
    padding: 35px 0;
  }
}

.realname {
  width: 287px;
  height: 242px;
  background-color: #fff;
  border-radius: 10px;
  .realname-name {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    margin-top: 15px;
    margin-bottom: 20px;
  }
  .realname-img {
    text-align: center;
    margin-top: 30px;
  }
  .realname-cancel {
    text-align: center;
    padding: 45px 0;
  }
}

.password {
  width: 295px;
  height: 348px;
  background-color: #fff;
  border-radius: 10px;
  .password-name {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    margin-top: 15px;
    margin-bottom: 20px;
  }
  .password-img {
    text-align: center;
    margin-top: 30px;
  }
  .password-cancel {
    text-align: center;
    padding: 45px 0;
  }
}
</style>
