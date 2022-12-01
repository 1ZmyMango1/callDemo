<template>
  <div class="add-button-div" @click="click">
    <img src="../../assets/commom/add-button.png" class="button-img-class">
  </div>
</template>
<script>
  // 右下角悬浮新增图标+
  export default {
    name: 'addButton',
    methods: {
      click() {
        this.$emit('click')
      }
    }
  }
</script>
<style lang="less" scoped>
  .add-button-div {
    position: fixed;
    bottom: 50px;
    right: 20px;
  }

  .button-img-class {
    width: 50px;
    height: 50px;
  }
</style>
