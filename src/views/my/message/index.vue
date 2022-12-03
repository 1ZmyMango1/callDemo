<template>
  <div class="box">
    <van-nav-bar title="消息中心" left-arrow @click-left="onClickLeft" />

    <van-cell-group>
      <van-cell title="单元格" label="无信息" >
        <template #icon>
            <img style="width:40px; height:40px; margin-right:15px; margin-top:6px" src="../../../assets/img/head_notice.png" alt="">
        </template>
      </van-cell>

      <van-cell title="收益通知" label="无信息" >
        <template #icon>
            <img style="width:40px; height:40px; margin-right:15px; margin-top:6px" src="../../../assets/img/head_notice.png" alt="">
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  destoryed() {},
  methods: {
    onClickLeft() {
        this.$router.push("/my")
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
</style>
