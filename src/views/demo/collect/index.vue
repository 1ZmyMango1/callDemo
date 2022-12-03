<template>
  <div class="box" style="background-color: #f5f5f5; height: 100vh">
    <van-nav-bar title="我的收藏" left-arrow @click-left="onClickLeft" />

    <!-- 商品信息 -->
    <van-card v-for="item in merchandise" :key="item.id">
      <template #thumb>
        <img :src="item.goods_image" style="width: 95px; height: 95px" alt="" />
      </template>
      <template #title>
        <div class="title">{{ item.goods_name }}</div>
      </template>
      <template #price>
        <div class="price">￥{{ item.goods_price }}</div>
      </template>
      <template #num>
        <div class="button" @click="$router.push('/shopping')"><span>去购买</span></div>
      </template>
    </van-card>
  </div>
</template>

<script>
import { goodsList } from "@/api/user";
export default {
  data() {
    return {
      merchandise: [],
    };
  },
  created() {
    this.goodsList();
  },
  methods: {
    onClickLeft() {
      this.$router.push("/demo/demo1");
    },

    async goodsList() {
      let res = await goodsList();
      console.log(res);
      this.merchandise = res.data
    },
  },
};
</script>

<style lang="less" scoped>
.box {
  position: relative;
  z-index: 9;
  height: 100vh;
  //   background-color: #fff;
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

.title {
  font-size: 18px;
  margin-left: 10px;
  margin-top: 3px;
}

.price {
  font-size: 20px;
  color: #f55e68;
  margin-top: 25px;
  margin-left: 10px;
}

.button {
  background-color: #f55e68;
  height: 30px;
  width: 100px;
  border-radius: 50px;
  color: #fff;
  margin-top: 18px;
  text-align: center;
  span {
    height: 30px;
    line-height: 30px;
    width: 100px;
    text-align: center;
  }
}
</style>
