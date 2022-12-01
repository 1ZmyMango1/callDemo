<template>
  <div>
    <van-popup v-model="show"
               position="bottom"
               :overlay="overlay"
               :style="{ height: '40%' }">
      <van-picker :columns="columns"
                  show-toolbar
                  @cancel="cancel"
                  @confirm="onChange">
      </van-picker>
    </van-popup>
  </div>
</template>

<script>
  import {searchAll} from '@/api/commonApi'

  export default {
    props: {
      show: Boolean,
      columnData: Array,
      overlay: {
        type: Boolean,
        default: true
      },
      type: String,
      showName: String,
      queryData: Object
    },
    data() {
      return {
        columns: []
      }
    },
    created() {
      if (this.columnData) {
        this.columns = this.columnData
      } else {
        this.list()
      }
    },
    methods: {
      cancel() {
        this.$emit('cancel')
      },
      reload() {
        if (this.columnData) {
          this.columns = this.columnData
        } else {
          this.columns = []
          this.list()
        }
      },
      list() {
        searchAll(this.type, this.queryData).then(res => {
          if (res.data) {
            res.data.forEach(item => {
              this.columns.push({text: item[this.showName], value: item})
            })
          }
        })
      },
      onChange(picker) {
        this.$emit('change', picker)
      }
    }
  }
</script>

<style scoped>

</style>
