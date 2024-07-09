<template>
  <!-- 添加一个可拖动的标题栏区域 -->
  <div class="title-bar"></div>
  <div class="main-box w-screen h-screen flex items-stretch overflow-hidden">
    <!-- 左侧栏 -->
    <Menu />

    <!-- 聊天对话列表 -->
    <ChatList />

    <div class="container-box">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import Menu from '@/components/layout/menu/Menu.vue'
import ChatList from '@/components/layout/chat/ChatList.vue'
</script>
<style lang="scss">
/* 设置标题栏区域的高度，并使其可拖动 */
.title-bar {
  -webkit-app-region: drag;
  height: 60px; /* 根据需要设置合适的高度 */
  background-color: #f7f7f7; /* 选择合适的背景颜色 */
  border-bottom: 1px solid #eee;
}
.main-box {
  padding-top: 60px;
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  .container-box {
    padding-left: 320px;
    width: 100%;
    height: 100vh;
    position: relative;
    z-index: -1;
    top: -60px;
    left: 0;
  }
}
</style>
