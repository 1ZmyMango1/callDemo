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
      />
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
import { addressList } from "@/api/user"
export default {
  data() {
    return {
       chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
          isDefault: true,
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号',
        },
      ],
    };
  },
  created() {
    this.addressList()
  },
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.push("/my");
    },

    // 地址列表
    async addressList(){
      let res = await addressList()
      console.log(res);
    },

    onAdd() {
      Toast('新增收货地址');
      this.$router.push(
        {
          path:"/my/addAddress",
          query:{name:'新增收货地址'}
        }
      )
    },
    onEdit(item) {
      Toast('编辑地址');
      this.$router.push(
        {
          path:"/my/addAddress",
          query:{name:'编辑收货地址',item}
        }
      )
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
