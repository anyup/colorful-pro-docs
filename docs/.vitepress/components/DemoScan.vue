<template>
  <div class="demo-scan-row">
    <div v-for="(item, index) in currentList" :key="index" class="demo-scan-col">
      <div v-if="item.fullscreen" class="demo-scan-item" :style="{ borderColor: props.borderColor }">
        <img src="/images/thumb-colorful-app.png" />
      </div>
      <div v-else class="demo-scan-item" :style="{ borderColor: props.borderColor }">
        <a v-if="item.url" :href="item.url" target="_blank">
          <img :src="item.img" />
        </a>
        <img v-else :src="item.img" />
        <div class="demo-scan-name">{{ item.name }}</div>
        <p class="demo-scan-tips">{{ item.tips }}</p>
        <p v-if="item.url" class="demo-click-tips">(可直接点击图片)</p>
      </div>
    </div>

    <!-- <div class="demo-scan-col">
      <div class="demo-scan-item">
        <img src="https://www.anyup.cn/static/anyup/images/qr_wx_public.jpg" />
        <div class="demo-scan-name">
          微信公众号
          <p class="demo-scan-tips">微信扫码</p>
        </div>
      </div>
    </div>

    <div class="demo-scan-col">
      <div class="demo-scan-item">
        <img src="https://www.anyup.cn/static/anyup/images/qr_wx.png" />
        <div class="demo-scan-name">
          微信小程序
          <p class="demo-scan-tips">微信扫码</p>
        </div>
      </div>
    </div>

    <div class="demo-scan-col">
      <div class="demo-scan-item">
        <a href="https://www.anyup.cn/h5model.html" target="_blank">
          <img src="https://www.anyup.cn/static/anyup/images/qr_h5model.png" />
        </a>
        <div class="demo-scan-name">
          浏览器H5
          <p class="demo-scan-tips">微信或浏览器扫码</p>
        </div>
      </div>
    </div>

    <div class="demo-scan-col">
      <div class="demo-scan-item">
        <a href="https://www.pgyer.com/anyup-demo" target="_blank">
          <img src="https://www.anyup.cn/static/anyup/images/qr_android.png" />
        </a>
        <div class="demo-scan-name">
          安卓
          <p class="demo-scan-tips">浏览器扫码安装</p>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: '1'
  },
  borderColor: {
    type: String,
    default: '#dcdfe6'
  }
})

const list = [
  { img: 'https://www.anyup.cn/static/anyup/images/qr_wx.png', type: '1', fullscreen: true },
  { name: '微信小程序', img: 'https://www.anyup.cn/static/anyup/images/qr_wx.png', tips: '微信扫码', type: '1', url: '' },
  { name: '浏览器 H5', img: 'https://www.anyup.cn/static/anyup/images/qr_h5model.png', tips: '微信或浏览器扫码', type: '1', url: 'https://www.anyup.cn/h5model.html' },
  { name: '安卓', img: 'https://www.anyup.cn/static/anyup/images/qr_android.png', tips: '浏览器扫码安装', type: '1', url: 'https://www.pgyer.com/anyup-demo' },
  { name: '微信公众号', img: 'https://www.anyup.cn/static/anyup/images/qr_wx_public.jpg', tips: '微信扫码', type: '3', url: '' }
]
const currentList = computed(() => {
  return list.filter(item => item.type === props.type)
})
</script>

<style scoped>
.demo-scan-row {
  display: block;
  position: relative;
}

.demo-scan-row:before,
.demo-scan-row:after {
  display: table;
  content: ' ';
}

.demo-scan-row:after {
  clear: both;
}

.demo-scan-col {
  width: 25%;
  float: left;
}

.demo-scan-item {
  position: relative;
  text-align: center;
  border: 1px solid #dcdfe6;
  border-radius: 5px;
  transition: bottom 0.4s;
  position: relative;
  bottom: 0;
  margin: 20px 10px;
  padding: 40px 0;
  min-height: 210px;
  transition: all 0.3s;
  height: 315px;
}

.demo-scan-item:hover {
  bottom: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.demo-scan-item img {
  width: 150px;
  margin: auto;
  display: block;
  max-width: 100%;
}

.demo-scan-item .demo-scan-name {
  color: #606266;
  font-size: 18px;
  margin: 20px 0;
  height: 30px;
}

.demo-scan-item .demo-scan-tips {
  text-align: center;
  position: absolute;
  font-size: 14px;
  bottom: 30px;
  left: auto;
  width: 100%;
  right: auto;
  color: #909399;
}

.demo-scan-item .demo-click-tips {
  text-align: center;
  position: absolute;
  font-size: 12px;
  bottom: 0;
  left: auto;
  width: 100%;
  right: auto;
  color: #909399;
}

@media (max-width: 1200px) {
  .demo-scan-col {
    width: 50%;
  }
}

@media (max-width: 768px) {
  .demo-scan-col {
    width: 100%;
  }
}
</style>
