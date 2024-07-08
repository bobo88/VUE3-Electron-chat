<template>
  <div class="w-screen h-screen flex items-stretch overflow-hidden">
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
<style lang="scss"></style>
