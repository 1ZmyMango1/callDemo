<template>
  <div class="box" style="background-color: #f5f5f5; height: 100vh">
    <van-nav-bar title="确定订单收货地址" left-arrow @click-left="onClickLeft" />

    <div class="address" v-for="(item, index) in list" :key="index">
      <div class="address-info">
        <div  @click.stop="onSelect(item)">{{ item.name }}&#8195;&#8195;</div>
        <div  @click.stop="onSelect(item)">{{ item.tel }}</div>
        <div @click="delBtn(item)">
          <img src="../../../assets/img/icon_cancel.png" alt="" />
        </div>
      </div>

      <div class="address-add" @click="onSelect(item)">{{ item.address }}</div>

      <div class="address-btn">
        <div>
          <van-checkbox v-model="item.isDefault" checked-color="#F55E68"
            >默认</van-checkbox
          >
        </div>
        <div class="address-btns">
          <!-- <div><img src="../../../assets/img/button_copy.png" alt=""></div> -->
          <div @click.stop="onEdit(item)">
            <img src="../../../assets/img/button_change.png" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div class="footer" @click="onAdd">
      <img src="../../../assets/img/button_add.png" alt="" />
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { addressList , delAddress } from "@/api/user";
export default {
  data() {
    return {
      isDefault:false,
      list: [],
    };
  },
  created() {
    this.addressList();
  },
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },

    // 地址列表
    async addressList() {
      let res = await addressList();
      console.log(res);
      this.list = res.data;
    },

    // 新增收货地址
    onAdd() {
      // Toast("新增收货地址");
      this.$router.push({
        path: "/my/addAddress",
        query: { name: "新增收货地址" },
      });
    },
    // 编辑收货地址
    onEdit(item) {
      // Toast("编辑地址");
      this.$router.push({
        path: "/my/addAddress",
        query: { name: "编辑收货地址", item },
      });
    },

    // 删除
    async delBtn(item) {
        let data = {
          id: item.id,
        };
        let res = await delAddress(data);
        Toast("删除成功");
        this.addressList()
    },

    // 选中的地址
    // onSelect(item) {
    //   this.$router.push({
    //     path: "/my/okShopping",
    //     params: { item },
    //   });
    // },
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

.address {
  width: 100%;
  height: 130px;
  background-color: #fff;
  margin-bottom: 10px;
  .address-info {
    display: flex;
    justify-items: center;
    margin-left: 16px;
    padding-top: 20px;
    font-size: 15px;
    position: relative;
    img {
      position: absolute;
      right: 16px;
      top: 18px;
    }
  }
  .address-add {
    margin-left: 16px;
    font-size: 15px;
    padding: 15px 0;
  }
  .address-btn {
    display: flex;
    justify-items: center;
    margin-left: 16px;
    padding: 10px 0;
    position: relative;
    .address-btns {
      display: flex;
      justify-items: center;
      position: absolute;
      right: 16px;
      top: 10px;
      img {
        margin-left: 10px;
      }
    }
  }
}

.footer {
  position: fixed;
  bottom: 0;
  text-align: center;
  width: 100%;
}
</style>
