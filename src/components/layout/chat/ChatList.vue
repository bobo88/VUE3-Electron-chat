<template>
  <div class="chat-box">
    <div class="search-box">
      <el-input placeholder="搜索" v-model="input" size="mini" clearable>
      </el-input>

      <div class="plus-opt">
        <el-icon><Plus /></el-icon>
      </div>
    </div>

    <div class="chat-inner-box">
      <ul class="chat-list">
        <li>abcc</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>333</li>
        <li>111</li>
        <li>111</li>
        <li>333</li>
        <li>111</li>
        <li>111</li>
        <li>333</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue'
// xxx
</script>

<style scoped lang="scss">
.chat-box {
  padding-top: 60px;
  width: 260px;
  height: 100vh;
  position: absolute;
  left: 60px;
  top: 0;
  background: #f7f7f7;
  overflow: hidden;
  border-right: 1px solid #eee;
  .chat-inner-box {
    width: 260px;
    height: calc(100vh - 60px);
    overflow: auto;
  }
  .search-box {
    position: fixed;
    top: 0;
    left: 60px;
    // display: flex;
    align-items: center;
    justify-content: center;
    width: 260px;
    height: 60px;
    background: #f7f7f7;
    padding: 14px 60px 14px 20px;
    gap: 8px;
    border-right: 1px solid #eee;
    .plus-opt {
      position: absolute;
      top: 14px;
      right: 14px;
      width: 32px;
      height: 32px;
      border-radius: 6px;
      background: #e5e5e5;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .chat-list {
    overflow-y: auto;
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
