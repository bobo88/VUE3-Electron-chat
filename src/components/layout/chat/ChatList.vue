<template>
  <div class="chat-box">
    <div class="search-box">
      <el-input
        class="custom-input"
        placeholder="搜索"
        v-model="input"
        size="mini"
        clearable
      >
      </el-input>

      <div class="plus-opt">
        <el-icon><Plus /></el-icon>
      </div>
    </div>

    <div class="chat-inner-box">
      <ul class="chat-list">
        <li class="chat-item">
          <div class="avatar"><img src="@/assets/logo.svg" alt="" /></div>
          <div class="chat-info">
            <div class="name">一（13）班家长群</div>
            <div class="message">
              班主任 彭老师：大家暑假做好小朋友的学习指导
            </div>
          </div>
        </li>
        <li class="chat-item">
          <div class="avatar"><img src="@/assets/img/logo.png" alt="" /></div>
          <div class="chat-info">
            <div class="name">一（13）班家长群</div>
            <div class="message">
              班主任 彭老师：大家暑假做好小朋友的学习指导
            </div>
          </div>
        </li>
        <li class="chat-item">
          <div class="avatar"><img src="@/assets/logo.svg" alt="" /></div>
          <div class="chat-info">
            <div class="name">一（13）班家长群</div>
            <div class="message">
              班主任 彭老师：大家暑假做好小朋友的学习指导
            </div>
          </div>
        </li>
        <li class="chat-item">
          <div class="avatar"><img src="@/assets/img/logo.png" alt="" /></div>
          <div class="chat-info">
            <div class="name">一（13）班家长群</div>
            <div class="message">
              班主任 彭老师：大家暑假做好小朋友的学习指导
            </div>
          </div>
        </li>
        <li class="chat-item">
          <div class="avatar"><img src="@/assets/logo.svg" alt="" /></div>
          <div class="chat-info">
            <div class="name">一（13）班家长群</div>
            <div class="message">
              班主任 彭老师：大家暑假做好小朋友的学习指导
            </div>
          </div>
        </li>
        <li class="chat-item">
          <div class="avatar"><img src="@/assets/img/logo.png" alt="" /></div>
          <div class="chat-info">
            <div class="name">一（13）班家长群</div>
            <div class="message">
              班主任 彭老师：大家暑假做好小朋友的学习指导
            </div>
          </div>
        </li>
        <li class="chat-item">
          <div class="avatar"><img src="@/assets/logo.svg" alt="" /></div>
          <div class="chat-info">
            <div class="name">一（13）班家长群</div>
            <div class="message">
              班主任 彭老师：大家暑假做好小朋友的学习指导
            </div>
          </div>
        </li>
        <li class="chat-item">
          <div class="avatar"><img src="@/assets/img/logo.png" alt="" /></div>
          <div class="chat-info">
            <div class="name">一（13）班家长群</div>
            <div class="message">
              班主任 彭老师：大家暑假做好小朋友的学习指导
            </div>
          </div>
        </li>
        <li class="chat-item">
          <div class="avatar"><img src="@/assets/logo.svg" alt="" /></div>
          <div class="chat-info">
            <div class="name">一（13）班家长群</div>
            <div class="message">
              班主任 彭老师：大家暑假做好小朋友的学习指导
            </div>
          </div>
        </li>
        <li class="chat-item">
          <div class="avatar"><img src="@/assets/img/logo.png" alt="" /></div>
          <div class="chat-info">
            <div class="name">一（13）班家长群</div>
            <div class="message">
              班主任 彭老师：大家暑假做好小朋友的学习指导
            </div>
          </div>
        </li>
        <li class="chat-item">
          <div class="avatar"><img src="@/assets/logo.svg" alt="" /></div>
          <div class="chat-info">
            <div class="name">一（13）班家长群</div>
            <div class="message">
              班主任 彭老师：大家暑假做好小朋友的学习指导
            </div>
          </div>
        </li>
        <li class="chat-item">
          <div class="avatar"><img src="@/assets/img/logo.png" alt="" /></div>
          <div class="chat-info">
            <div class="name">一（13）班家长群</div>
            <div class="message">
              班主任 彭老师：大家暑假做好小朋友的学习指导
            </div>
          </div>
        </li>
        <li class="chat-item">
          <div class="avatar"><img src="@/assets/logo.svg" alt="" /></div>
          <div class="chat-info">
            <div class="name">一（13）班家长群</div>
            <div class="message">
              班主任 彭老师：大家暑假做好小朋友的学习指导
            </div>
          </div>
        </li>
        <li class="chat-item">
          <div class="avatar"><img src="@/assets/img/logo.png" alt="" /></div>
          <div class="chat-info">
            <div class="name">一（13）班家长群</div>
            <div class="message">
              班主任 彭老师：大家暑假做好小朋友的学习指导
            </div>
          </div>
        </li>
        <li class="chat-item">
          <div class="avatar"><img src="@/assets/logo.svg" alt="" /></div>
          <div class="chat-info">
            <div class="name">一（13）班家长群</div>
            <div class="message">
              班主任 彭老师：大家暑假做好小朋友的学习指导
            </div>
          </div>
        </li>
        <li class="chat-item">
          <div class="avatar"><img src="@/assets/img/logo.png" alt="" /></div>
          <div class="chat-info">
            <div class="name">一（13）班家长群</div>
            <div class="message">
              班主任 彭老师：大家暑假做好小朋友的学习指导
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue'
// xxx
</script>

<style lang="scss">
.custom-input {
  height: 28px;
  line-height: 28px;
  .el-input__inner {
    height: 28px;
    line-height: 28px;
  }
}
</style>

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
    padding: 16px 52px 16px 14px;
    gap: 8px;
    border-right: 1px solid #eee;
    .plus-opt {
      position: absolute;
      top: 16px;
      right: 16px;
      width: 28px;
      height: 28px;
      border-radius: 4px;
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
      padding: 14px 14px;
      display: flex;
      gap: 10px;
      &:hover {
        background: #e5e5e5;
        cursor: pointer;
      }
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
        height: 40px;
        line-height: 20px;
        .name {
          width: 182px;
          height: 20px;
          line-height: 20px;
          color: #000;
          font-size: 14px;
        }
        .message {
          width: 170px;
          height: 20px;
          line-height: 20px;
          color: #999;
          font-size: 12px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>
