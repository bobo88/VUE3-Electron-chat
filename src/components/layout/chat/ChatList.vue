<template>
  <div class="chat-box">
    <div class="search-box">
      <el-input placeholder="请输入内容" v-model="input" size="mini" clearable>
      </el-input>
    </div>

    <ul class="chat-list">
      <li>111</li>
      <li>111</li>
      <li>111</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// xxx
</script>

<style scoped lang="scss">
.chat-box {
  background: #f7f7f7;
  width: 260px;
  height: 100vh;
  ul {
    li {
      line-height: 68px;
      height: 68px;
      padding: 0 20px;
      &:hover {
        background: #e5e5e5;
        cursor: pointer;
      }
    }
  }
}
</style>
