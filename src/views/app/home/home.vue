<template>
  <div>
    <router-view />
    <!-- v-if="whiteRouteArr.indexOf(curRoute) != -1" -->
    <van-tabbar
      route
      :fixed="true"
      border
      active-color="#F55E68"
      inactive-color="#000"
    >
      <van-tabbar-item replace to="/demo/demo1" icon="wap-home-o"
        >首页</van-tabbar-item
      >
      <van-tabbar-item replace to="/classify" icon="apps-o"
        >分类</van-tabbar-item
      >
      <van-tabbar-item replace to="/shopping" icon="shopping-cart-o"
        >购物</van-tabbar-item
      >
      <van-tabbar-item replace to="/my" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      curRoute: "",
      whiteRouteArr: ["/demo/demo1", "/my", "/classify", "/shopping"],
    };
  },
  watch: {
    $route(value) {
      this.curRoute = value.fullPath;
      console.log(value);
    },
  },
};
</script>
