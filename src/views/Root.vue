<template>
  <!-- 添加一个可拖动的标题栏区域 -->
  <div class="title-bar"></div>
  <div class="main-box w-screen h-screen flex items-stretch overflow-hidden">
    <div class="left-menu">
      <Menu />
    </div>
    <div class="chat-list">
      <ChatList />
    </div>
    <div class="container mx-auto">
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
}
.main-box {
  padding-top: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  width: 100%;
  height: 100vh;
}
</style>
