<template>
  <div style="background-color: #F5F5F5;height:100vh">
    <van-nav-bar
      title="分类"
      placeholder
    />
    <van-cell>
      <van-row>
        <van-col span="12" class="btn">
          <h1>这是退出页</h1>
          <van-button type="primary" size="small" @click="tologout">退出</van-button>
        </van-col>
      </van-row>
    </van-cell>
  </div>
</template>

<script>
import { logout } from '@/api/user'
import { removeToken } from '@/utils/auth'

export default {
  name: 'Demo1',
  metaInfo: {
    title: 'demo1'
  },
  data() {
    return {}
  },
  created() {},
  mounted() {},
  destoryed() {},
  methods: {
    async tologout() {
      let res = await logout()
      console.info(res)
      removeToken()
      this.$router.push({
        path: '/login'
      })
    }
  }
}
</script>

<style lang="less" scoped>
/deep/.van-nav-bar__title {
  font-size: 0.52667rem;
}
</style>
