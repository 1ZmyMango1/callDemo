<template>
  <div style="background-color: #f5f5f5; height: 100vh">
    <van-nav-bar title="商城" placeholder />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
      <van-swipe-item>5</van-swipe-item>
    </van-swipe>

    <div class="search">
      <van-search
        v-model="value"
        placeholder="搜索商品"
        shape="round"
        background="#f5f5f5"
      />
    </div>

    <div class="hint">
      <div class="hint-box">
        <img :src="member" alt="" />
        <div class="hint-text">会员中心</div>
      </div>
      <div class="hint-box">
        <img :src="my" alt="" />
        <div class="hint-text">我的收藏</div>
      </div>
      <div class="hint-box">
        <img :src="shopping" alt="" />
        <div class="hint-text">商城咨询</div>
      </div>
      <div class="hint-box">
        <img :src="help" alt="" />
        <div class="hint-text">帮助中心</div>
      </div>
    </div>

    <div class="navber">明星产品</div>

    <!-- 商品信息 -->
    <van-card>
      <template #thumb>
        <img src="../../../assets/img/commodity.png" style="width:95px; height:95px;" alt="">
      </template>
      <template #title>
        <div class="title">商品标题</div>
      </template>
      <template #price>
        <div class="price">￥200</div>
      </template>
      <template #num>    
        <div class="button"><span>去购买</span></div>
      </template>
    </van-card>
  </div>
</template>

<script>
const member = require("../../../assets/img/member.png");
const my = require("../../../assets/img/my.png");
const shopping = require("../../../assets/img/shopping.png");
const help = require("../../../assets/img/help.png");
export default {
  name: "Demo1",
  components: {},
  metaInfo: {
    title: "demo1",
  },
  data() {
    return {
      value: "",
      //  图片
      member: member,
      my: my,
      shopping: shopping,
      help: help,
    };
  },
  created() {},
  mounted() {},
  destoryed() {},
  methods: {},
};
</script>

<style lang="less" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
/deep/.van-nav-bar__title {
  font-size: 0.52667rem;
}
/deep/.van-search__content {
  background-color: #fff;
}
.search {
  margin-top: 20px;
}
.hint {
  margin: 24px 17px;
  overflow: hidden;
  display: flex;
  justify-items: center;
  height: 98px;
  width: 342px;
  background-color: #fff;
  .hint-box {
    margin: 0 auto;
    margin-top: 14px;
    img {
      height: 45px;
      width: 45px;
      margin-left: 9px;
      margin-bottom: 5px;
    }
    .hint-text {
      color: #333333;
      font-size: 15px;
    }
  }
}

.navber {
  font-size: 20px;
  margin-left: 17px;
  margin-bottom: 24px;
}

.title {
  font-size: 18px;
  margin-left: 10px;
  margin-top: 3px;
}

.price {
  font-size: 20px;
  color: #F55E68;
  margin-top: 25px;
  margin-left: 10px;
}

.button {
    background-color:#F55E68;
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
