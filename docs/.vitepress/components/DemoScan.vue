<template>
  <div class="demo-scan-row">
    <div class="demo-scan-col">
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
    </div>
  </div>
</template>

<style scoped>
.demo-scan-row {
  display: block;
  position: relative;
}

.demo-scan-row:before,
.demo-scan-row:after {
  display: table;
  content: " ";
}

.demo-scan-row:after {
  clear: both;
}

.demo-scan-col {
  width: 25%;
  float: left;
}

.demo-scan-item {
  text-align: center;
  border: 1px solid #eaeefb;
  border-radius: 5px;
  transition: bottom 0.4s;
  position: relative;
  bottom: 0;
  margin: 20px 10px;
  padding: 40px 0;
  min-height: 210px;
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
  position: relative;
  margin: 20px 0;
  height: 30px;
}

.demo-scan-item .demo-scan-tips {
  text-align: center;
  position: absolute;
  font-size: 14px;
  bottom: -50px;
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
