<template>
  <div class="chat-box">
    <h3 class="chat-title">一（13）班家长群</h3>

    <ul class="chat-list-info">
      <li class="chat-item cont-left">
        <div class="avatar"><img src="@/assets/logo.svg" alt="Avatar" /></div>
        <div class="chat-info">
          <div class="name">一（13）班家长群</div>
          <div class="message">
            班主任
            彭老师：暑假是孩子们放松和休息的时间，但也可以是一个继续学习和发展的好机会。以下是一些建议，帮助家长和监护人做好孩子的暑期学习指导：
            <br />1. 制定合理的学习计划
            <br />设定目标：和孩子一起设定学习目标，比如读几本书、掌握新的数学概念或学会一项新技能。
            <br />制定时间表：每天安排一定的时间用于学习，确保孩子有足够的时间玩耍和休息。
          </div>
        </div>
      </li>
      <li class="chat-item cont-right">
        <div class="avatar">
          <img src="@/assets/img/logo.png" alt="Avatar" />
        </div>
        <div class="chat-info">
          <div class="name">一（13）班家长群</div>
          <div class="message">
            家长1：谢谢彭老师的建议！我会和孩子一起制定学习计划。
          </div>
        </div>
      </li>
      <li class="chat-item cont-left">
        <div class="avatar"><img src="@/assets/logo.svg" alt="Avatar" /></div>
        <div class="chat-info">
          <div class="name">一（13）班家长群</div>
          <div class="message">
            班主任
            彭老师：不用客气。学习计划可以根据孩子的兴趣和需要灵活调整，关键是保持一个平衡的暑期生活。
          </div>
        </div>
      </li>
      <li class="chat-item cont-right">
        <div class="avatar">
          <img src="@/assets/img/logo.png" alt="Avatar" />
        </div>
        <div class="chat-info">
          <div class="name">一（13）班家长群</div>
          <div class="message">家长2：非常有帮助！有什么推荐的书单吗？</div>
        </div>
      </li>
      <li class="chat-item cont-left">
        <div class="avatar"><img src="@/assets/logo.svg" alt="Avatar" /></div>
        <div class="chat-info">
          <div class="name">一（13）班家长群</div>
          <div class="message">
            班主任
            彭老师：推荐一些适合孩子阅读的书籍，比如《小王子》、《哈利·波特》系列、《十万个为什么》等。也可以选择一些儿童科普读物和故事书。
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// xxx
</script>

<style scoped lang="scss">
.chat-box {
  .chat-title {
    padding: 0 30px;
    height: 60px;
    line-height: 60px;
    font-size: 16px;
    color: #333;
    font-weight: 600;
  }
  .chat-list-info {
    padding: 10px 30px;
    background: #f9f9f9;
    height: calc(100vh - 60px);
    .chat-item {
      margin-bottom: 10px;
      display: flex;
      gap: 10px;
      &.cont-left {
        justify-content: left;
      }
      &.cont-right {
        justify-content: right;
        flex-direction: row-reverse;
        .chat-info {
          .name {
            text-align: right;
          }
        }
      }
      // &:hover {
      //   background: #e5e5e5;
      //   cursor: pointer;
      // }
      .avatar {
        padding: 2px;
        width: 36px;
        height: 36px;
        border-radius: 4px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .chat-info {
        max-width: 60%;
        line-height: 20px;
        .name {
          width: 100%;
          height: 20px;
          line-height: 20px;
          color: #999;
          font-size: 12px;
        }
        .message {
          padding: 6px;
          border: 1px solid #eee;
          border-radius: 6px;
          background: #fff;
          width: 100%;
          line-height: 24px;
          color: #333;
          font-size: 14px;
          // overflow: hidden;
          // text-overflow: ellipsis;
          // white-space: nowrap;
        }
      }
    }
  }
}
</style>
