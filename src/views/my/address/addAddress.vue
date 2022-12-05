<template>
  <div class="box" style="background-color: #fff; height: 100vh">
    <van-nav-bar :title="title" left-arrow @click-left="onClickLeft" />

    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="收货人"
        label="收货人"
        placeholder="收货人姓名"
        :rules="[{ required: true, message: '请填写收货人姓名' }]"
      />
      <van-field
        v-model="password"
        name="手机号"
        label="手机号"
        placeholder="收货人手机号"
        :rules="[{ required: true, message: '请填写收货人密码' }]"
      />

      <van-field
        v-model="addressVal"
        label="地区"
        placeholder="请选择"
        @click="show"
        :rules="[{ required: true, message: '请选择地区' }]"
      />

      <van-field
        type="textarea"
        v-model="text"
        label="详细地址"
        placeholder="小区，街道，门牌号等"
        :rules="[{ required: true, message: '请输入详细地址' }]"
      />

      <div style="margin: 100px">
        <van-button
          round
          block
          type="info"
          native-type="submit"
          @click="upSubmit"
          >保存</van-button
        >
      </div>
    </van-form>

    <Address ref="addr" @save="addSave"></Address>
  </div>
</template>

<script>
import Address from "../../components/address.vue";
import { addUserAddress } from "@/api/user";
export default {
  components: {
    Address,
  },
  data() {
    return {
      title: "",
      username: "",
      password: "",
      addressVal: "",
      text: "",
      value: [],
      idAddress:'',
    };
  },
  created() {
    this.title = this.$route.query.name;

    this.value = this.$route.query.item;
    // console.log(this.value);
    this.username = this.value.name;
    this.password = this.value.tel;
    this.text = this.value.address;
    this.idAddress = this.value.id;
    console.log(this.$route.query.item);
  },
  mounted() {},
  computed: {},
  methods: {
    // 地区
    addSave(val) {
      console.log("选中的地区", val);
      this.addressVal = val
        .filter((item) => !!item)
        .map((item) => item.name)
        .join("/");
    },
    show() {
      // console.log(this.$refs['addr']);
      this.$refs["addr"].show = true;
    },
    onClickLeft() {
      this.$router.go(-1);
    },

    onSubmit(values) {
      console.log("submit", values);
    },

    // 保存/新增地址
    async upSubmit() {
      let data = {
        receiver: this.username,
        phone: this.password,
        area: this.addressVal,
        address: this.text,
      };
      let res = await addUserAddress(data);
      this.$router.go(-1)
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
/deep/.van-button--info {
  background-color: #f55e68;
  border: 1px solid #f55e68;
}
/deep/.van-button--round {
  border-radius: 10px;
}
/deep/.van-button--block {
  width: 340px;
}
/deep/.van-button {
  margin: -80px;
}

.box {
  position: relative;
  z-index: 9;
  height: 100vh;
  background-color: #fff;
}

.delBtn {
  width: 340px;
  height: 42px;
  color: #f55e68;
  border: 1px solid #f55e68;
  font-size: 14px;
  margin-left: 16px;
  background-color: #fff;
  border-radius: 10px;
  line-height: 42px;
  text-align: center;
}
</style>
