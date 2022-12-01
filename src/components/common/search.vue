<template>
  <div>
    <van-cell is-link @click="showPopup">{{showValue}}</van-cell>

    <van-popup v-model="show"
               position="top"
               @click-overlay="close"
               :style="{ height: '8%' }">
      <van-search placeholder="请输入搜索关键词" v-model="searchValue" @search="onSearch">
      </van-search>
    </van-popup>

    <m-select ref="select"
              :overlay="false"
              :type="type"
              :show="show"
              :show-name="showName"
              @change="changeSelect"
              @cancel="show = false"
              :query-data="queryData">
    </m-select>
  </div>
</template>

<script>
  import mSelect from './select'

  export default {
    components: {mSelect},
    props: {
      type: String,
      showName: String,
      value: String,
    },
    data() {
      return {
        queryData: {},
        show: false,
        searchValue: '',
        showValue: '请选择'
      }
    },
    created() {
      if (this.value) {
        this.showValue = this.value
      }
    },
    methods: {
      onSearch() {
        this.queryData[this.showName] = this.searchValue
        this.$refs.select.reload()
      },
      changeSelect(item) {
        this.show = false
        this.showValue = item.value[this.showName]
        this.$emit('change', item.value)
      },
      close() {
        this.show = false
      },
      showPopup() {
        this.show = true
      }
    }
  }
</script>

<style scoped>

</style>
