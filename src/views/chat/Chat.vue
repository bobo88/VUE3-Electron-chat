<template>
  <div class="chat-box">
    <h3 class="chat-title">一（12）班家长群</h3>

    <div class="chat-list-info">
      <ul class="list-inner-box">
        <li class="chat-item cont-left">
          <div class="avatar"><img src="@/assets/logo.svg" alt="Avatar" /></div>
          <div class="chat-info">
            <div class="name">一（12）班家长群</div>
            <div class="message">
              班主任
              彭老师：暑假是孩子们放松和休息的时间，但也可以是一个继续学习和发展的好机会。以下是一些建议，帮助家长和监护人做好孩子的暑期学习指导：
              <br />1. 制定合理的学习计划
              <br />设定目标：和孩子一起设定学习目标，比如读几本书、掌握新的数学概念或学会一项新技能。
              <br />制定时间表：每天安排一定的时间用于学习，确保孩子有足够的时间玩耍和休息。
            </div>
          </div>
        </li>

        <li
          v-for="(item, index) in chatData"
          :key="index"
          :class="['chat-item', item.align]"
        >
          <div class="avatar">
            <img :src="item.avatar" alt="Avatar" />
            <!-- <img src="@/assets/logo.svg" alt="Avatar" /> -->
          </div>
          <div class="chat-info">
            <div class="name">{{ item.name }}</div>
            <div class="message" v-html="item.message"></div>
          </div>
        </li>
      </ul>
    </div>

    <div class="msg-opt-box">
      <div class="opt-btns">
        <ul class="btns-list">
          <li><img src="@/assets/img/file.png" alt="" /></li>
          <li><img src="@/assets/img/chat.png" alt="" /></li>
        </ul>
      </div>

      <div class="msg-box">
        <el-input
          v-model="message"
          :autosize="{ minRows: 2, maxRows: 4 }"
          type="textarea"
          placeholder="关注「ycy88」小程序或者公众号..."
        />
        <div class="submit-btn">
          <el-button type="primary" size="small" @click="submitMsg">
            点击发送
          </el-button>
        </div>
      </div>

      <!-- <button id="sendButton">发送消息</button>
      <p id="response"></p> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
// 或者写成绝对地址，则不需要import
import logo from '@/assets/logo.svg'
import userLogo from '@/assets/img/logo.png'

const message = ref('')
const chatData = reactive([
  {
    align: 'cont-left',
    avatar: logo,
    name: '一（12）班家长群',
    message: `班主任 彭老师：暑假是孩子们放松和休息的时间，但也可以是一个继续学习和发展的好机会。以下是一些建议，帮助家长和监护人做好孩子的暑期学习指导：
          <br />1. 制定合理的学习计划
          <br />设定目标：和孩子一起设定学习目标，比如读几本书、掌握新的数学概念或学会一项新技能。
          <br />制定时间表：每天安排一定的时间用于学习，确保孩子有足够的时间玩耍和休息。`
  },
  {
    align: 'cont-right',
    avatar: userLogo,
    name: '一（12）班家长群',
    message: '家长1：谢谢彭老师的建议！我会和孩子一起制定学习计划。'
  },
  {
    align: 'cont-left',
    avatar: logo,
    name: '一（12）班家长群',
    message:
      '班主任 彭老师：不用客气。学习计划可以根据孩子的兴趣和需要灵活调整，关键是保持一个平衡的暑期生活。'
  },
  {
    align: 'cont-right',
    avatar: userLogo,
    name: '一（12）班家长群',
    message: '家长2：非常有帮助！有什么推荐的书单吗？'
  },
  {
    align: 'cont-left',
    avatar: logo,
    name: '一（12）班家长群',
    message:
      '班主任 彭老师：推荐一些适合孩子阅读的书籍，比如《小王子》、《哈利·波特》系列、《十万个为什么》等。也可以选择一些儿童科普读物和故事书。'
  },
  {
    align: 'cont-right',
    avatar: userLogo,
    name: '一（12）班家长群',
    message: '家长3：这些书单非常不错！孩子们也可以互相推荐自己喜欢的书籍。'
  },
  {
    align: 'cont-left',
    avatar: logo,
    name: '一（12）班家长群',
    message:
      '班主任 彭老师：好主意！孩子们通过分享书籍不仅可以增加阅读兴趣，还能提高他们的交流能力。'
  },
  {
    align: 'cont-right',
    avatar: userLogo,
    name: '一（12）班家长群',
    message: '家长4：除了阅读，还有没有其他适合孩子的暑期活动？'
  },
  {
    align: 'cont-left',
    avatar: logo,
    name: '一（12）班家长群',
    message:
      '班主任 彭老师：可以考虑带孩子参加一些兴趣班，比如绘画、音乐、运动等。还可以组织一些亲子活动，增进亲子关系。'
  },
  {
    align: 'cont-right',
    avatar: userLogo,
    name: '一（12）班家长群',
    message:
      '家长5：太好了！我会安排一些户外活动，让孩子们在玩耍中也能学到东西。'
  }
])

const submitMsg = () => {
  // 发送消息（渲染进程 ==> 主进程）
  window.electron.ipcRenderer.send('message-from-renderer', message.value)

  // 接受消息（主进程 ==> 渲染进程）
  window.electron.ipcRenderer.on('message-from-main', (event, data) => {
    console.log('🚀 ~ window.electron.ipcRenderer.on ~ event:', event)
    console.log('🚀 ~ window.electron.ipcRenderer.on ~ data:', data)
    chatData.push({
      align: 'cont-right',
      avatar: userLogo,
      name: '一（12）班家长群',
      message: data
    })
    // 处理数据
    message.value = ''
  })
}
// xx
</script>

<style lang="scss">
.msg-box {
  position: relative;
  z-index: 1;
  padding-bottom: 10px;
  height: 160px;
  overflow: auto;
  .el-textarea {
    height: 100%;
    .el-textarea__inner {
      height: 100% !important;
      border: none !important;
      box-shadow: none !important;
      background: #f7f7f7 !important;
    }
  }
  .submit-btn {
    position: absolute;
    z-index: 2;
    bottom: 10px;
    right: 10px;
  }
}
</style>
<style scoped lang="scss">
.chat-box {
  position: relative;
  z-index: 1;
  .msg-opt-box {
    position: absolute;
    z-index: 9;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 200px;
    border-top: 1px solid #eee;
    .opt-btns {
      width: 100%;
      height: 40px;
      .btns-list {
        display: flex;
        justify-content: flex-start;
        padding: 10px 20px;
        gap: 10px;
        img {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
  .chat-title {
    padding: 0 30px;
    height: 60px;
    line-height: 60px;
    font-size: 16px;
    color: #333;
    font-weight: 600;
  }
  .chat-list-info {
    padding: 10px 0 220px;
    background: #f9f9f9;
    height: calc(100vh - 60px);
    .list-inner-box {
      padding: 0 30px;
      width: 100%;
      height: 100%;
      overflow: auto;
      box-sizing: border-box;
    }
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
