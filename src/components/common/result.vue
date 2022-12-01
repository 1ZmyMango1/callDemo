<template>
  <div class="w-100-p h-100-p bg-EEF1E9 border-box flex-center">
    <div class="h-100-p border-box p-t-36 flex-col">
      <div class="w-85 h-85 brs-50-p flex-center m-lr-auto" :class="success ? 'bg-success' : 'bg-fail'">
        <van-icon :name="success ? 'success' : 'cross'" class="f-s-70-imp col-fff" />
      </div>
      <span v-if="!!message" class="flex-center m-t-20 col-333333 bold f-s-17">{{ message }}</span>
      <span v-if="!!tips" class="flex-center m-t-20 col-999999 f-s-14">{{ tips }}</span>
    </div>
  </div>
</template>
<script>
// 全局操作状态提示页，尽量不更改
export default {
  name: 'Result',
  computed: {
    title() {
      return this.$route.query.title || ''
    },
    success() {
      return !!this.$route.query.success
    },
    message() {
      return this.$route.query.message || ''
    },
    tips() {
      return this.$route.query.tips || ''
    },
  },
  mounted() {
    document.title = this.title
  },
  beforeDestroy() {
    document.title = ''
  }
}
</script>
<style lang="less" scoped>

</style>