<template>
  <div>
    <van-action-sheet v-model="show">
      <van-area @cancel='show=false' :columns-num='3' @confirm='confirm' :title="title" :value='valList' :area-list="areaList"  />
    </van-action-sheet>
  </div>
</template>

<script>
  import list from '@/utils/area'

  export default {
    name: "com-Address",
    props: {
      title: String,
      showValue:String
    },
    data() {
      return {
        valList: '',
        areaList: list,
        show: false,
      }
    },
    created() {
        this.valList=this.showValue
    },
    methods: {
        showDialog(){ 
            this.show=true
        },
        confirm(val){
            this.$emit('save',val)
            this.show=false
        }
    }
  }

</script>
