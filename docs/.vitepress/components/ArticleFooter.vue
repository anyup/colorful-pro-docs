<template>
  <div v-if="link" class="article-footer-info">
    <h2>{{ name }}</h2>
    <div>
      <br />
      👨‍🎓 教育 | 计算机科学与技术 · 本科<br />
      👨‍💻 工作 | 前端开发工程师<br />
      🏷️ 技术 | Vue Angular JavaScript uni-app<br />
      📱 微信 | anyupxing<br />
      🏆 公众号｜ 前端梦工厂<br />
    </div>
    <div class="article-link-info">
      <CustomIcon name="yuanwenlianjie1" size="20px" color="#4e6e8e" />
      <a :href="link" target="_blank" rel="noopener noreferrer">
        {{ linkName }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    default: '关于我'
  },
  link: {
    type: String,
    default: ''
  },
  linkName: {
    type: String,
    default: '原文链接'
  }
})
</script>

<style scoped>
.article-link-info {
  padding: 20px 0;
  /* border-top: 1px solid #eaecef; */
  text-align: left;
  font-size: 16px;
}
.article-link-info a {
  color: #3451b2;
  font-weight: 500;
  padding-left: 5px;
}
</style>
