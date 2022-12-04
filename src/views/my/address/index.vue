<template>
  <div class="box" style="background-color: #f5f5f5; height: 100vh">
    <van-nav-bar title="收货地址" left-arrow @click-left="onClickLeft" />

    <div>
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        default-tag-text="默认"
        add-button-text="新增收货地址"
        @add="onAdd"
        @edit="onEdit"
        @click-item="onSelect"
      />
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { addressList } from "@/api/user";
export default {
  data() {
    return {
      chosenAddressId: "1",
      list: [],
    };
  },
  created() {
    this.addressList();
  },
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.push("/my");
    },

    // 地址列表
    async addressList() {
      let res = await addressList();
      console.log(res);
      this.list = res.data;
    },

    // 新增收货地址
    onAdd() {
      Toast("新增收货地址");
      this.$router.push({
        path: "/my/addAddress",
        query: { name: "新增收货地址" },
      });
    },
    // 编辑收货地址
    onEdit(item) {
      Toast("编辑地址");
      this.$router.push({
        path: "/my/addAddress",
        query: { name: "编辑收货地址", item },
      });
    },

    // 选中的地址
    onSelect(item) {
      this.$router.push({
        path: "/my/okShopping",
        query: { item },
      });
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
/deep/.van-address-list__bottom {
  background-color: #ee0a24;
}

.box {
  position: relative;
  z-index: 9;
}
</style>
