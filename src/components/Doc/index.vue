<template>
  <div>
    <svg-icon icon-class="doc" @click="click" />
  </div>
</template>

<script>
export default {
  name: 'Doc',
  methods: {
    click() {
      // 项目文档连接地址
      window.open('https://el-admin.vip/guide/', '_blank')
    }
  }
}
</script>
