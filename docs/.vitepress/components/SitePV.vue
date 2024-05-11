<template>
  <div class="pv-row">
    <div class="pv-col">本站总访问量<span id="busuanzi_value_site_pv"></span>次</div>
    <div class="pv-col">本站总访客数<span id="busuanzi_value_site_uv"></span>人</div>
    <div class="pv-col">本文总阅读量<span id="busuanzi_value_page_pv"></span>次</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.pv-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
}
.pv-col {
  flex: 1;
  text-align: center;
  padding: 20px;
  border: 1px dashed #2979ff;
  border-radius: 5px;
  color: #666;
  min-width: 260px;
}
.pv-col + .pv-col {
  margin-left: 20px;
}
.pv-col span {
  color: #2979ff;
  font-weight: 700;
  padding: 0 5px;
}

@media (max-width: 1000px) {
  .pv-row {
    flex-direction: column;
  }
  .pv-col + .pv-col {
    margin-left: 0;
    margin-top: 20px;
  }
}
</style>
